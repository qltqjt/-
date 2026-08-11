import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudent } from '../../contexts/StudentContext';
import { updateStudent } from '../../data/storage';
import { addSpiritPower } from '../../utils/cultivation';
import { generateWords, AIWord } from '../../utils/ai';
import styles from './SpiritTraining.module.css';

const BATCH_SIZE = 10;

export default function SpiritTraining() {
  const { student, refreshStudent } = useStudent();
  const navigate = useNavigate();

  const [words, setWords] = useState<AIWord[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 生成单词
  const fetchWords = useCallback(async () => {
    if (!student) return;
    setLoading(true);
    setError('');
    try {
      const generated = await generateWords(student.grade, BATCH_SIZE);
      setWords(generated);
      setCurrentIdx(0);
      setSelected(null);
      setShowResult(false);
      setCorrectCount(0);
    } catch (e: any) {
      setError(e.message || 'AI 生成失败，请检查网络后重试');
    } finally {
      setLoading(false);
    }
  }, [student]);

  useEffect(() => {
    fetchWords();
  }, [fetchWords]);

  if (!student) return null;

  const currentWord = words[currentIdx];
  const isLastWord = currentIdx >= BATCH_SIZE - 1;

  function handleSelect(optIdx: number) {
    if (showResult) return;
    setSelected(optIdx);
    setShowResult(true);
    if (optIdx === currentWord.answerIndex) {
      setCorrectCount(c => c + 1);
    }
  }

  function handleNext() {
    if (!student) return;
    if (isLastWord) {
      // 完成一组，升级
      const updates = addSpiritPower(student, BATCH_SIZE);
      const newLevel = updates.level ?? student.level;
      updateStudent(student.id, {
        level: newLevel,
        spiritPower: updates.spiritPower ?? student.spiritPower,
      });
      refreshStudent();
      alert(`✨ 修炼完成！灵力 +${BATCH_SIZE}\n答对 ${correctCount}/${BATCH_SIZE}\n等级升至 Lv.${newLevel}`);
      navigate('/home');
    } else {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setShowResult(false);
    }
  }

  function handleRegenerate() {
    fetchWords();
  }

  // 加载中
  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loadingCard}>
            <div className={styles.loadingIcon}>🫧</div>
            <h2 className={styles.loadingTitle}>灵力凝聚中...</h2>
            <p className={styles.loadingSub}>AI 正在为你生成修炼单词</p>
            <div className={styles.spinner} />
          </div>
        </div>
      </div>
    );
  }

  // 错误
  if (error) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.errorCard}>
            <div className={styles.errorIcon}>⚠️</div>
            <h2 className={styles.errorTitle}>凝聚失败</h2>
            <p className={styles.errorMsg}>{error}</p>
            <button className={styles.retryBtn} onClick={handleRegenerate}>重新凝聚</button>
            <button className={styles.backBtn} onClick={() => navigate('/home')}>返回洞府</button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentWord) return null;

  const isCorrect = selected === currentWord.answerIndex;

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* 顶部进度 */}
        <div className={styles.topBar}>
          <button className={styles.quitBtn} onClick={() => navigate('/home')}>✕</button>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((currentIdx + (showResult ? 1 : 0)) / BATCH_SIZE) * 100}%` }}
            />
          </div>
          <span className={styles.progressText}>{currentIdx + 1}/{BATCH_SIZE}</span>
        </div>

        {/* 单词卡片 */}
        <div className={`${styles.wordCard} ${showResult ? (isCorrect ? styles.correct : styles.wrong) : ''}`}>
          {/* 画面提示区（百词斩风格——后续可替换为真实图片） */}
          <div className={styles.imageZone}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.imageEmoji}>
                {currentWord.imageHint.includes('food') ? '🍎' :
                 currentWord.imageHint.includes('animal') ? '🐾' :
                 currentWord.imageHint.includes('nature') ? '🌿' :
                 currentWord.imageHint.includes('people') ? '👤' :
                 currentWord.imageHint.includes('city') ? '🏙️' :
                 currentWord.imageHint.includes('book') ? '📚' :
                 currentWord.imageHint.includes('time') ? '⏰' :
                 currentWord.imageHint.includes('love') ? '💝' :
                 currentWord.imageHint.includes('water') ? '💧' :
                 '✨'}
              </span>
              <span className={styles.imageHint}>{currentWord.imageHint}</span>
            </div>
          </div>

          {/* 单词 */}
          <div className={styles.wordZone}>
            <h1 className={styles.englishWord}>{currentWord.english}</h1>
            <div className={styles.phonetic}>
              {currentWord.english.split('').join('·')}
            </div>
          </div>

          {/* 例句 */}
          <div className={styles.exampleZone}>
            <p className={styles.example}>{currentWord.example}</p>
            {showResult && (
              <p className={styles.exampleCn}>{currentWord.exampleCn}</p>
            )}
          </div>
        </div>

        {/* 四个选项（百词斩风格） */}
        <div className={styles.optionsGrid}>
          {currentWord.options.map((opt, i) => {
            let optClass = styles.option;
            if (showResult) {
              if (i === currentWord.answerIndex) {
                optClass += ` ${styles.optionCorrect}`;
              } else if (i === selected && !isCorrect) {
                optClass += ` ${styles.optionWrong}`;
              } else {
                optClass += ` ${styles.optionDimmed}`;
              }
            } else if (selected === i) {
              optClass += ` ${styles.optionSelected}`;
            }
            return (
              <button
                key={i}
                className={optClass}
                onClick={() => handleSelect(i)}
                disabled={showResult}
              >
                <span className={styles.optLetter}>{'ABCD'[i]}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {/* 结果提示 + 下一题 */}
        {showResult && (
          <div className={styles.resultZone}>
            <div className={`${styles.resultBanner} ${isCorrect ? styles.resultCorrect : styles.resultWrong}`}>
              {isCorrect ? '✓ 回答正确！灵力 +1' : `✗ 正确答案是：${currentWord.options[currentWord.answerIndex]}`}
            </div>
            <button className={styles.nextBtn} onClick={handleNext}>
              {isLastWord ? '✨ 完成修炼' : '下一题 ▸'}
            </button>
          </div>
        )}

        {/* 答对计数 */}
        <div className={styles.scoreStrip}>
          已答对：{correctCount} / {showResult ? currentIdx + 1 : currentIdx} 词
          <button className={styles.regenBtn} onClick={handleRegenerate}>换一批</button>
        </div>
      </div>
    </div>
  );
}
