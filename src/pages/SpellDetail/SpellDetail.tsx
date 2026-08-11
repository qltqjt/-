import { useParams, useNavigate } from 'react-router-dom';
import { SPELLS } from '../../data/spells';
import { useStudent } from '../../contexts/StudentContext';
import styles from './SpellDetail.module.css';

const DIFFICULTY_LABELS = {
  1: '基础功法',
  2: '进阶功法',
  3: '高阶功法',
};

export default function SpellDetail() {
  const { spellId } = useParams<{ spellId: string }>();
  const navigate = useNavigate();
  const { student } = useStudent();

  if (!student) return null;

  const spell = SPELLS.find(s => s.id === spellId);
  if (!spell) return <div className={styles.page}>功法不存在</div>;

  const alreadyLearned = student.spellsLearned.includes(spell.id);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/library')}>
          ◂ 返回藏书阁
        </button>

        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.name}>{spell.name}</h1>
            <span className={`${styles.diffBadge} ${styles[`diff${spell.difficulty}`]}`}>
              {DIFFICULTY_LABELS[spell.difficulty]} · 渡劫通过 +{spell.difficulty} 级
            </span>
          </div>

          <div className={styles.category}>📂 {spell.category}</div>

          <div className={styles.desc}>
            <h3>功法概要</h3>
            <p>{spell.description}</p>
          </div>

          <div className={styles.quizInfo}>
            <h3>⚡ 渡劫信息</h3>
            <p>共 {spell.quiz.length} 道题，全部答对即可渡劫成功。</p>
          </div>

          {alreadyLearned ? (
            <div className={styles.learnedBanner}>✓ 此功法已修炼完成</div>
          ) : (
            <button
              className={styles.tribulationBtn}
              onClick={() => navigate(`/tribulation/${spell.id}`)}
            >
              开始渡劫 ⚡
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
