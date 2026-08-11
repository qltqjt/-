import { Student } from '../types';

const KEY = 'cultivation_students';

function read(): Student[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

function write(students: Student[]): void {
  localStorage.setItem(KEY, JSON.stringify(students));
}

export function getAllStudents(): Student[] {
  return read();
}

export function getStudent(id: string): Student | undefined {
  return read().find(s => s.id === id);
}

export function addStudent(name: string, grade: Student['grade']): Student {
  const students = read();
  const newStudent: Student = {
    id: Date.now().toString(36),
    name,
    grade,
    level: 1,
    spiritPower: 0,
    spellsLearned: [],
    tribulationRecord: [],
  };
  students.push(newStudent);
  write(students);
  return newStudent;
}

export function deleteStudent(id: string): void {
  write(read().filter(s => s.id !== id));
}

export function updateStudent(id: string, updates: Partial<Student>): Student | null {
  const students = read();
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return null;
  students[idx] = { ...students[idx], ...updates };
  write(students);
  return students[idx];
}
