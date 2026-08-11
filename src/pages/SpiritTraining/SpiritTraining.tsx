import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudent } from '../../contexts/StudentContext';
import { updateStudent } from '../../data/storage';
import { addSpiritPower } from '../../utils/cultivation';
import { pickRandomWords } from '../../data/words';
import styles from './SpiritTraining.module.css';

const BATCH_SIZE = 10;

export default function SpiritTraining() {
  const { student, refreshStudent } = useStudent();
  const navigate = useNavigate();

  const [round, setRound] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // 每次 round 变化时重新抽词
  const words = useMemo(() => {
    if (!student) return [];
    return pickRandomWords(student.grade, BATCH_SIZE);
  }, [student, round]);

  if (!student) return null;

  const currentWord = words[currentIdx];
  const isLastWord = currentIdx >= BATCH_SIZE - 1;

  function handleSelect(optIdx: number) {
    if (showResult || !currentWord) return;
    setSelected(optIdx);
    setShowResult(true);
    if (optIdx === currentWord.answerIndex) {
      setCorrectCount(c => c + 1);
    }
  }

  function handleNext() {
    if (!student) return;
    if (isLastWord) {
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

  function handleShuffle() {
    setRound(r => r + 1);
    setCurrentIdx(0);
    setSelected(null);
    setShowResult(false);
    setCorrectCount(0);
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
          <div className={styles.imageZone}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.imageEmoji}>
                {currentWord.english.length <= 3 ? '🅰️' :
                 currentWord.english.length <= 5 ? '📝' :
                 currentWord.english.length <= 8 ? '📖' :
                 '📚'}
              </span>
              <span className={styles.imageHint}>{currentWord.english.split('').join(' ')}</span>
            </div>
          </div>

          <div className={styles.wordZone}>
            <h1 className={styles.englishWord}>{currentWord.english}</h1>
          </div>

          <div className={styles.exampleZone}>
            <p className={styles.example}>{currentWord.example}</p>
            {showResult && (
              <p className={styles.exampleCn}>{currentWord.exampleCn}</p>
            )}
          </div>
        </div>

        {/* 四个选项 */}
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

        {/* 结果 */}
        {showResult && (
          <div className={styles.resultZone}>
            <div className={`${styles.resultBanner} ${isCorrect ? styles.resultCorrect : styles.resultWrong}`}>
              {isCorrect ? '✓ 灵力 +1' : `✗ 正确答案：${currentWord.options[currentWord.answerIndex]}`}
            </div>
            <button className={styles.nextBtn} onClick={handleNext}>
              {isLastWord ? '✨ 完成修炼' : '下一题 ▸'}
            </button>
          </div>
        )}

        <div className={styles.scoreStrip}>
          已答对：{correctCount} / {showResult ? currentIdx + 1 : currentIdx} 词
          <button className={styles.regenBtn} onClick={handleShuffle}>换一批</button>
        </div>
      </div>
    </div>
  );
}
