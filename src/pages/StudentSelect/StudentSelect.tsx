import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Student } from '../../types';
import { getAllStudents, addStudent, deleteStudent } from '../../data/storage';
import { useStudent } from '../../contexts/StudentContext';
import styles from './StudentSelect.module.css';

const GRADE_OPTIONS = [
  { value: 'primary' as const, label: '小学' },
  { value: 'middle' as const, label: '初中' },
  { value: 'high' as const, label: '高中' },
];

export default function StudentSelect() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newGrade, setNewGrade] = useState<Student['grade']>('primary');
  const { setStudentId } = useStudent();
  const navigate = useNavigate();

  useEffect(() => {
    setStudents(getAllStudents());
  }, []);

  function refresh() {
    setStudents(getAllStudents());
  }

  function handleAdd() {
    if (!newName.trim()) return;
    addStudent(newName.trim(), newGrade);
    setNewName('');
    setNewGrade('primary');
    setShowAdd(false);
    refresh();
  }

  function handleDelete(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    if (confirm('确定要删除这位弟子吗？')) {
      deleteStudent(id);
      refresh();
    }
  }

  function handleEnter(id: string) {
    setStudentId(id);
    navigate('/home');
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>选 择 弟 子</h1>
        <p className={styles.subtitle}>选择一位弟子进入修仙之路</p>

        <div className={styles.grid}>
          {students.map(s => (
            <div key={s.id} className={styles.card} onClick={() => handleEnter(s.id)}>
              <div className={styles.cardAvatar}>{s.name[0]}</div>
              <div className={styles.cardName}>{s.name}</div>
              <div className={styles.cardGrade}>
                {GRADE_OPTIONS.find(g => g.value === s.grade)?.label}
              </div>
              <div className={styles.cardLevel}>Lv.{s.level}</div>
              <button className={styles.deleteBtn} onClick={(e) => handleDelete(s.id, e)}>
                ✕
              </button>
            </div>
          ))}

          {/* 新增卡片 */}
          {!showAdd ? (
            <div className={styles.addCard} onClick={() => setShowAdd(true)}>
              <div className={styles.addIcon}>+</div>
              <div className={styles.addText}>新增弟子</div>
            </div>
          ) : (
            <div className={styles.addForm}>
              <input
                className={styles.input}
                placeholder="弟子姓名"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                autoFocus
                onKeyDown={e => e.key === 'Enter' && handleAdd()}
              />
              <div className={styles.gradeRow}>
                {GRADE_OPTIONS.map(g => (
                  <button
                    key={g.value}
                    className={`${styles.gradeBtn} ${newGrade === g.value ? styles.gradeActive : ''}`}
                    onClick={() => setNewGrade(g.value)}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
              <div className={styles.formActions}>
                <button className={styles.cancelBtn} onClick={() => setShowAdd(false)}>取消</button>
                <button className={styles.confirmBtn} onClick={handleAdd}>确认</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
