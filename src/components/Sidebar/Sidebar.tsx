import { useLocation, useNavigate } from 'react-router-dom';
import { useStudent } from '../../contexts/StudentContext';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { path: '/home', label: '洞府', sub: 'HOME' },
  { path: '/spirit-training', label: '灵力修炼', sub: 'SPIRIT' },
  { path: '/library', label: '藏书阁', sub: 'LIBRARY' },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = useStudent();

  if (!student) return null;

  return (
    <nav className={styles.sidebar}>
      {NAV_ITEMS.map(item => (
        <div
          key={item.path}
          className={`${styles.tab} ${location.pathname === item.path ? styles.active : ''}`}
          onClick={() => navigate(item.path)}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.sub}>{item.sub}</span>
        </div>
      ))}
    </nav>
  );
}
