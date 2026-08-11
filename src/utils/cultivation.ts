import { REALMS } from '../data/realms';
import { Realm, Student } from '../types';

export function getRealm(student: Student): Realm {
  for (const realm of REALMS) {
    if (student.level >= realm.minLevel && student.level <= realm.maxLevel) {
      return realm;
    }
  }
  return REALMS[REALMS.length - 1];
}

export function getTitle(student: Student): string {
  const realm = getRealm(student);
  const levelsInRealm = student.level - realm.minLevel;
  const titleIndex = Math.min(
    Math.floor(levelsInRealm / 4),
    realm.titles.length - 1
  );
  return realm.titles[titleIndex];
}

export function getNextRealm(student: Student): Realm | null {
  const currentIdx = REALMS.findIndex(r => r.name === getRealm(student).name);
  if (currentIdx === -1 || currentIdx >= REALMS.length - 1) return null;
  return REALMS[currentIdx + 1];
}

export function canBreakthrough(student: Student): boolean {
  const next = getNextRealm(student);
  if (!next) return false;
  return student.spiritPower >= next.wordRequirement
    && student.spellsLearned.length >= next.spellRequirement;
}

export function addSpiritPower(student: Student, count: number): Partial<Student> {
  const newSpirit = student.spiritPower + count;
  const newLevel = student.level + Math.floor(count / 10);
  const updates: Partial<Student> = {
    spiritPower: newSpirit,
    level: newLevel,
  };
  return updates;
}

export function completeSpell(student: Student, spellId: string, difficulty: 1 | 2 | 3): Partial<Student> {
  const newSpells = student.spellsLearned.includes(spellId)
    ? [...student.spellsLearned]
    : [...student.spellsLearned, spellId];
  return {
    spellsLearned: newSpells,
    level: student.level + difficulty,
  };
}

export function getExpToNextLevel(student: Student): { current: number; max: number } {
  const realm = getRealm(student);
  const levelsInRealm = student.level - realm.minLevel;
  const totalInRealm = realm.maxLevel - realm.minLevel + 1;
  return { current: levelsInRealm, max: totalInRealm };
}
