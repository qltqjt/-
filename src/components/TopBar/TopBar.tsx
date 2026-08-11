import { useStudent } from '../../contexts/StudentContext';
import { getRealm } from '../../utils/cultivation';
import styles from './TopBar.module.css';

const GRADE_LABELS: Record<string, string> = {
  primary: '小学',
  middle: '初中',
  high: '高中',
};

export default function TopBar() {
  const { student } = useStudent();
  if (!student) return null;

  const realm = getRealm(student);

  return (
    <div className={styles.topBar}>
      <div className={styles.playerCard}>
        <div className={styles.avatar}>{student.name[0]}</div>
        <div className={styles.info}>
          <span className={styles.name}>{student.name}</span>
          <span className={styles.grade}>
            {GRADE_LABELS[student.grade]} · {realm.name}
          </span>
        </div>
      </div>
      <div className={styles.lvBadge}>
        <span className={styles.lvNum}>{student.level}</span>
        <span className={styles.lvLabel}>等 级</span>
      </div>
    </div>
  );
}
