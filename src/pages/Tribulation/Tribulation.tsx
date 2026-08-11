import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SPELLS } from '../../data/spells';
import { useStudent } from '../../contexts/StudentContext';
import { updateStudent } from '../../data/storage';
import { completeSpell } from '../../utils/cultivation';
import styles from './Tribulation.module.css';

export default function Tribulation() {
  const { spellId } = useParams<{ spellId: string }>();
  const navigate = useNavigate();
  const { student, refreshStudent } = useStudent();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  if (!student) return null;

  const spell = SPELLS.find(s => s.id === spellId);
  if (!spell) return <div className={styles.page}>功法不存在</div>;

  const quiz = spell.quiz;
  const question = quiz[currentQ];
  const allPassed = results.length === quiz.length && results.every(r => r);

  function handleAnswer() {
    if (selected === null || !student || !spell) return;

    const correct = selected === question.answer;
    const newResults = [...results, correct];

    if (currentQ < quiz.length - 1) {
      setResults(newResults);
      setCurrentQ(c => c + 1);
      setSelected(null);
    } else {
      // 最后一题
      setResults(newResults);
      setFinished(true);

      if (newResults.every(r => r)) {
        // 全部通过
        const updates = completeSpell(student, spell.id, spell.difficulty);
        const newRecord = {
          spellId: spell.id,
          passed: true,
          date: new Date().toISOString().split('T')[0],
        };
        updateStudent(student.id, {
          level: updates.level ?? student.level,
          spellsLearned: updates.spellsLearned ?? student.spellsLearned,
          tribulationRecord: [...student.tribulationRecord, newRecord],
        });
        refreshStudent();
      } else {
        // 有失败
        updateStudent(student.id, {
          tribulationRecord: [
            ...student.tribulationRecord,
            { spellId: spell.id, passed: false, date: new Date().toISOString().split('T')[0] },
          ],
        });
        refreshStudent();
      }
    }
  }

  function handleRetry() {
    setCurrentQ(0);
    setSelected(null);
    setResults([]);
    setFinished(false);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {!finished ? (
          <>
            <div className={styles.header}>
              <span className={styles.progress}>
                渡劫中 · 第 {currentQ + 1}/{quiz.length} 题
              </span>
              <span className={styles.spellName}>{spell.name}</span>
            </div>

            <div className={styles.questionCard}>
              <h2 className={styles.stem}>{question.stem}</h2>
              <div className={styles.options}>
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`${styles.option} ${selected === i ? styles.selected : ''}`}
                    onClick={() => setSelected(i)}
                  >
                    <span className={styles.optLetter}>{'ABCD'[i]}</span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button
              className={styles.submitBtn}
              disabled={selected === null}
              onClick={handleAnswer}
            >
              {currentQ < quiz.length - 1 ? '下一题' : '提交渡劫'}
            </button>
          </>
        ) : (
          <div className={styles.resultCard}>
            {allPassed ? (
              <>
                <div className={styles.resultIcon}>⚡</div>
                <h2 className={styles.resultTitle}>渡 劫 成 功</h2>
                <p className={styles.resultDesc}>
                  恭喜！你成功渡过了「{spell.name}」的劫难！
                </p>
                <p className={styles.resultLevel}>
                  等级 +{spell.difficulty}
                </p>
              </>
            ) : (
              <>
                <div className={styles.resultIcon}>💀</div>
                <h2 className={styles.resultTitle}>渡 劫 失 败</h2>
                <p className={styles.resultDesc}>
                  答对 {results.filter(r => r).length}/{quiz.length} 题，还需继续修炼。
                </p>
                <p className={styles.resultHint}>修仙之路漫长，重修此功法后再来挑战！</p>
                <button className={styles.retryBtn} onClick={handleRetry}>
                  重新渡劫 ⚡
                </button>
              </>
            )}
            <button className={styles.backBtn} onClick={() => navigate('/library')}>
              返回藏书阁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
