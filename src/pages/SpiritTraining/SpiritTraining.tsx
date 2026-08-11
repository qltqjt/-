import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { WORDS } from '../../data/words';
import { useStudent } from '../../contexts/StudentContext';
import { updateStudent } from '../../data/storage';
import { addSpiritPower } from '../../utils/cultivation';
import styles from './SpiritTraining.module.css';

const BATCH_SIZE = 10;

export default function SpiritTraining() {
  const { student, refreshStudent } = useStudent();
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const words = useMemo(() => {
    if (!student) return [];
    return WORDS[student.grade] || WORDS.primary;
  }, [student]);

  if (!student) return null;

  const batchStart = Math.floor(currentIdx / BATCH_SIZE) * BATCH_SIZE;
  const batchWords = words.slice(batchStart, batchStart + BATCH_SIZE);
  const currentWord = batchWords[currentIdx - batchStart];

  function handleNext() {
    if (!student) return;
    if (currentIdx - batchStart >= BATCH_SIZE - 1) {
      // 完成一组 10 个
      const updates = addSpiritPower(student, BATCH_SIZE);
      const newLevel = updates.level ?? student.level;
      updateStudent(student.id, {
        level: newLevel,
        spiritPower: updates.spiritPower ?? student.spiritPower,
      });
      refreshStudent();
      alert(`✨ 修炼完成！灵力 +${BATCH_SIZE}，升了 ${newLevel - student.level} 级！`);
      navigate('/home');
    } else {
      setCurrentIdx(i => i + 1);
      setShowAnswer(false);
    }
  }

  if (!currentWord) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <p>词库已空，请更换学段或联系老师补充词库。</p>
          <button className={styles.backBtn} onClick={() => navigate('/home')}>返回洞府</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.progress}>
            第 {currentIdx + 1} / {words.length} 词 · 本组 {currentIdx - batchStart + 1}/10
          </span>
          <span className={styles.batchHint}>灵力：{student.spiritPower} → {student.spiritPower + BATCH_SIZE}</span>
        </div>

        <div className={styles.wordCard}>
          <div className={styles.english}>{currentWord.english}</div>
          <button className={styles.toggleBtn} onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? '隐藏释义' : '显示释义'}
          </button>
          {showAnswer && (
            <div className={styles.chinese}>{currentWord.chinese}</div>
          )}
        </div>

        <div className={styles.actions}>
          <button className={styles.skipBtn} onClick={() => navigate('/home')}>返回洞府</button>
          <button className={styles.nextBtn} onClick={handleNext}>
            {currentIdx - batchStart >= BATCH_SIZE - 1 ? '完成修炼 ✨' : '下一个'}
          </button>
        </div>

        {/* 本组进度条 */}
        <div className={styles.batchBar}>
          {Array.from({ length: BATCH_SIZE }).map((_, i) => (
            <div
              key={i}
              className={`${styles.batchDot} ${i <= currentIdx - batchStart ? styles.dotDone : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
