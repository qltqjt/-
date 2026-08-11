import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Student } from '../types';
import { getStudent } from '../data/storage';

interface StudentContextType {
  student: Student | null;
  setStudentId: (id: string | null) => void;
  refreshStudent: () => void;
}

const StudentContext = createContext<StudentContextType>(null!);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const student = studentId ? getStudent(studentId) || null : null;

  const refreshStudent = useCallback(() => {
    setTick(t => t + 1);
  }, []);

  return (
    <StudentContext.Provider value={{ student, setStudentId, refreshStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}
