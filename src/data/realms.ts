import { Realm } from '../types';

export const REALMS: Realm[] = [
  {
    name: '炼气期', emoji: '🔰', minLevel: 1, maxLevel: 10,
    titles: ['外门弟子', '内门弟子', '亲传弟子'],
    wordRequirement: 0, spellRequirement: 0,
  },
  {
    name: '筑基期', emoji: '🧱', minLevel: 11, maxLevel: 20,
    titles: ['筑基真人', '筑基上仙', '筑基天尊'],
    wordRequirement: 50, spellRequirement: 3,
  },
  {
    name: '金丹期', emoji: '💎', minLevel: 21, maxLevel: 30,
    titles: ['金丹道长', '金丹天师', '金丹天尊'],
    wordRequirement: 120, spellRequirement: 5,
  },
  {
    name: '元婴期', emoji: '👁️', minLevel: 31, maxLevel: 40,
    titles: ['元婴老祖', '元婴圣者', '元婴帝君'],
    wordRequirement: 250, spellRequirement: 5,
  },
  {
    name: '化神期', emoji: '🔥', minLevel: 41, maxLevel: 50,
    titles: ['化神圣者', '化神天君', '化神至尊'],
    wordRequirement: 450, spellRequirement: 6,
  },
  {
    name: '渡劫期', emoji: '⚡', minLevel: 51, maxLevel: 60,
    titles: ['渡劫仙师', '渡劫道君', '渡劫仙尊'],
    wordRequirement: 700, spellRequirement: 7,
  },
  {
    name: '大乘期', emoji: '🌟', minLevel: 61, maxLevel: 70,
    titles: ['大乘道祖', '混元道祖', '太上仙帝'],
    wordRequirement: 1000, spellRequirement: 8,
  },
];
