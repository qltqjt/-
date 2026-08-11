import { useNavigate } from 'react-router-dom';
import { SPELLS } from '../../data/spells';
import { useStudent } from '../../contexts/StudentContext';
import styles from './Library.module.css';

const DIFFICULTY_LABELS = {
  1: '基础',
  2: '进阶',
  3: '高阶',
};

export default function Library() {
  const { student } = useStudent();
  const navigate = useNavigate();

  if (!student) return null;

  const learnedSet = new Set(student.spellsLearned);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>藏 书 阁</h1>
        <p className={styles.subtitle}>万法归宗，以语法为骨，以单词为肉</p>

        <div className={styles.grid}>
          {SPELLS.map(spell => {
            const learned = learnedSet.has(spell.id);
            return (
              <div
                key={spell.id}
                className={`${styles.card} ${learned ? styles.learned : ''}`}
                onClick={() => navigate(`/spell/${spell.id}`)}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.spellName}>{spell.name}</span>
                  <span className={`${styles.diffBadge} ${styles[`diff${spell.difficulty}`]}`}>
                    {DIFFICULTY_LABELS[spell.difficulty]} +{spell.difficulty}级
                  </span>
                </div>
                <div className={styles.category}>{spell.category}</div>
                <div className={styles.cardDesc}>{spell.description.slice(0, 40)}...</div>
                {learned && <div className={styles.learnedTag}>✓ 已修炼</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
