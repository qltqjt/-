import { useStudent } from '../../contexts/StudentContext';
import { getRealm, getTitle, getNextRealm } from '../../utils/cultivation';
import styles from './Home.module.css';

export default function Home() {
  const { student } = useStudent();
  if (!student) return null;

  const realm = getRealm(student);
  const title = getTitle(student);
  const nextRealm = getNextRealm(student);
  const expPercent = Math.min(
    ((student.level - realm.minLevel) / (realm.maxLevel - realm.minLevel + 1)) * 100,
    100
  );

  return (
    <div className={styles.page}>
      <div className={styles.content}>

        {/* 中央卡片组 */}
        <div className={styles.cardRow}>
          {/* 境界主卡片 */}
          <div className={styles.heroCard}>
            <div className={styles.realmEmoji}>{realm.emoji}</div>
            <h2 className={styles.realmName}>{realm.name}</h2>
            <p className={styles.heroTitle}>称号：{title}</p>
            <div className={styles.expRow}>
              <span className={styles.expLabel}>Lv.{student.level}</span>
              <div className={styles.expBar}>
                <div className={styles.expFill} style={{ width: `${expPercent}%` }} />
              </div>
              <span className={styles.expLabel}>Lv.{realm.maxLevel + 1}</span>
            </div>
          </div>

          {/* 灵力 + 功法 小卡片 */}
          <div className={styles.sideCards}>
            <div className={styles.sideCard}>
              <span className={styles.scIcon}>🫧</span>
              <span className={styles.scVal}>{student.spiritPower}</span>
              <span className={styles.scLabel}>灵 力</span>
              <span className={styles.scSub}>已背 {student.spiritPower} 词</span>
            </div>
            <div className={styles.sideCard}>
              <span className={styles.scIcon}>📜</span>
              <span className={styles.scVal}>{student.spellsLearned.length}</span>
              <span className={styles.scLabel}>功 法</span>
              <span className={styles.scSub}>已渡劫 {student.tribulationRecord.filter(r => r.passed).length} 次</span>
            </div>
          </div>
        </div>

        {/* 底部突破条件 */}
        {nextRealm && (
          <div className={styles.btStrip}>
            <span className={styles.btLabel}>突破至 {nextRealm.name}</span>
            <div className={styles.btReqs}>
              <span>
                灵力{' '}
                <span className={student.spiritPower >= nextRealm.wordRequirement ? styles.done : styles.remain}>
                  {student.spiritPower}
                </span>
                <span className={styles.remain}> / {nextRealm.wordRequirement}</span>
              </span>
              <span>
                功法{' '}
                <span className={student.spellsLearned.length >= nextRealm.spellRequirement ? styles.done : styles.remain}>
                  {student.spellsLearned.length}
                </span>
                <span className={styles.remain}> / {nextRealm.spellRequirement}</span>
              </span>
            </div>
          </div>
        )}

        {!nextRealm && (
          <div className={styles.maxBanner}>
            🎉 已达最高境界：大乘期·太上仙帝！
          </div>
        )}
      </div>
    </div>
  );
}
