import { Spell } from '../types';

export const SPELLS: Spell[] = [
  // ═══ 词法 ═══
  {
    id: 'noun', name: '名词', category: '词法', difficulty: 1,
    description: '名词是表示人、事物、地点或抽象概念的词。掌握可数与不可数名词的用法。',
    quiz: [
      { id: 'n1', type: 'choice', stem: '"book" 是什么词性？', options: ['名词', '动词', '形容词', '副词'], answer: 0 },
      { id: 'n2', type: 'choice', stem: '下列哪个是可数名词？', options: ['water', 'apple', 'rice', 'milk'], answer: 1 },
      { id: 'n3', type: 'choice', stem: '"China" 属于哪类名词？', options: ['普通名词', '专有名词', '抽象名词', '集合名词'], answer: 1 },
    ],
  },
  {
    id: 'article', name: '冠词', category: '词法', difficulty: 1,
    description: '冠词分为不定冠词(a/an)和定冠词(the)，掌握其基本用法和区别。',
    quiz: [
      { id: 'a1', type: 'choice', stem: '"I saw ___ elephant." 填空：', options: ['a', 'an', 'the', '不填'], answer: 1 },
      { id: 'a2', type: 'choice', stem: '___ sun rises in the east.', options: ['A', 'An', 'The', '不填'], answer: 2 },
      { id: 'a3', type: 'choice', stem: '下列哪个用定冠词 the？', options: ['play football', 'play the piano', 'go to school', 'have breakfast'], answer: 1 },
    ],
  },
  {
    id: 'pronoun', name: '代词', category: '词法', difficulty: 1,
    description: '代词包括人称代词、物主代词、反身代词、指示代词等。',
    quiz: [
      { id: 'p1', type: 'choice', stem: '"This is ___ book." (我的)', options: ['I', 'my', 'me', 'mine'], answer: 1 },
      { id: 'p2', type: 'choice', stem: '"He did it by ___." (他自己)', options: ['him', 'his', 'himself', 'he'], answer: 2 },
      { id: 'p3', type: 'choice', stem: '"___ is a teacher." (她)', options: ['Her', 'She', 'Hers', 'Herself'], answer: 1 },
    ],
  },
  {
    id: 'adjective', name: '形容词', category: '词法', difficulty: 1,
    description: '形容词用于描述名词的特征、状态。掌握形容词的比较级和最高级。',
    quiz: [
      { id: 'adj1', type: 'choice', stem: '"This flower is ___ than that one." (beautiful)', options: ['beautiful', 'more beautiful', 'most beautiful', 'beautifully'], answer: 1 },
      { id: 'adj2', type: 'choice', stem: '下列哪个是比较级？', options: ['big', 'bigger', 'biggest', 'more big'], answer: 1 },
      { id: 'adj3', type: 'choice', stem: '"She is the ___ girl in class." (tall)', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 2 },
    ],
  },
  {
    id: 'adverb', name: '副词', category: '词法', difficulty: 1,
    description: '副词修饰动词、形容词或其他副词，表示方式、程度、频率等。',
    quiz: [
      { id: 'adv1', type: 'choice', stem: '"He runs ___." (quick)', options: ['quick', 'quicker', 'quickly', 'quickest'], answer: 2 },
      { id: 'adv2', type: 'choice', stem: '下列哪个是频率副词？', options: ['quickly', 'always', 'very', 'well'], answer: 1 },
      { id: 'adv3', type: 'choice', stem: '"She sings ___ well." (very)', options: ['much', 'very', 'too', 'enough'], answer: 1 },
    ],
  },
  {
    id: 'preposition', name: '介词', category: '词法', difficulty: 1,
    description: '介词表示名词/代词与其他词的关系，如时间(at/in/on)、地点(on/under/between)等。',
    quiz: [
      { id: 'pre1', type: 'choice', stem: '"I was born ___ May."', options: ['in', 'on', 'at', 'for'], answer: 0 },
      { id: 'pre2', type: 'choice', stem: '"The cat is ___ the table." (在桌子下面)', options: ['in', 'on', 'under', 'above'], answer: 2 },
      { id: 'pre3', type: 'choice', stem: '"I go to school ___ bus."', options: ['in', 'on', 'by', 'with'], answer: 2 },
    ],
  },

  // ═══ 时态 ═══
  {
    id: 'present-simple', name: '一般现在时', category: '时态', difficulty: 1,
    description: '表示经常性、习惯性的动作或状态。第三人称单数动词加 -s/-es。',
    quiz: [
      { id: 'ps1', type: 'choice', stem: '"She ___ to school every day." (go)', options: ['go', 'goes', 'going', 'went'], answer: 1 },
      { id: 'ps2', type: 'choice', stem: '哪个时间状语用于一般现在时？', options: ['yesterday', 'tomorrow', 'every day', 'now'], answer: 2 },
      { id: 'ps3', type: 'choice', stem: '"They ___ football on Sundays." (play)', options: ['plays', 'play', 'playing', 'played'], answer: 1 },
    ],
  },
  {
    id: 'present-continuous', name: '现在进行时', category: '时态', difficulty: 1,
    description: '表示此时此刻正在进行的动作。结构：be + V-ing。',
    quiz: [
      { id: 'pc1', type: 'choice', stem: '"Look! He ___ a book." (read)', options: ['reads', 'is reading', 'read', 'reading'], answer: 1 },
      { id: 'pc2', type: 'choice', stem: '现在进行时的标志词是？', options: ['every day', 'yesterday', 'now', 'tomorrow'], answer: 2 },
      { id: 'pc3', type: 'choice', stem: '"They ___ basketball now." (play)', options: ['play', 'plays', 'are playing', 'played'], answer: 2 },
    ],
  },
  {
    id: 'past-simple', name: '一般过去时', category: '时态', difficulty: 1,
    description: '表示过去某个时间发生的动作或存在的状态。动词用过去式。',
    quiz: [
      { id: 'pt1', type: 'choice', stem: '"I ___ to Beijing last week." (go)', options: ['go', 'goes', 'went', 'going'], answer: 2 },
      { id: 'pt2', type: 'choice', stem: '"___ you at home yesterday?"', options: ['Are', 'Were', 'Was', 'Do'], answer: 1 },
      { id: 'pt3', type: 'choice', stem: '哪个是过去时的标志？', options: ['now', 'every day', 'yesterday', 'tomorrow'], answer: 2 },
    ],
  },
  {
    id: 'future-simple', name: '一般将来时', category: '时态', difficulty: 1,
    description: '表示将来要发生的动作。结构：will + V 或 be going to + V。',
    quiz: [
      { id: 'f1', type: 'choice', stem: '"I ___ visit you tomorrow." (will)', options: ['will', 'am', 'was', 'do'], answer: 0 },
      { id: 'f2', type: 'choice', stem: '"She is ___ buy a car." (going to)', options: ['go to', 'going to', 'will', 'go'], answer: 1 },
      { id: 'f3', type: 'choice', stem: '哪个时间状语用于将来时？', options: ['yesterday', 'now', 'last week', 'next week'], answer: 3 },
    ],
  },
  {
    id: 'present-perfect', name: '现在完成时', category: '时态', difficulty: 2,
    description: '表示过去发生的动作对现在的影响。结构：have/has + 过去分词。',
    quiz: [
      { id: 'pp1', type: 'choice', stem: '"I ___ my homework already." (finish)', options: ['finish', 'finished', 'have finished', 'finishing'], answer: 2 },
      { id: 'pp2', type: 'choice', stem: '现在完成时用什么助动词？', options: ['do/does', 'will', 'have/has', 'be'], answer: 2 },
      { id: 'pp3', type: 'choice', stem: '"She ___ been to Shanghai." (has)', options: ['has', 'have', 'had', 'is'], answer: 0 },
    ],
  },

  // ═══ 语态与从句 ═══
  {
    id: 'passive-voice', name: '被动语态', category: '语态', difficulty: 2,
    description: '主语是动作的承受者。结构：be + 过去分词。',
    quiz: [
      { id: 'pv1', type: 'choice', stem: '"The cake ___ by my mom." (bake)', options: ['bakes', 'is baked', 'baking', 'baked'], answer: 1 },
      { id: 'pv2', type: 'choice', stem: '被动语态的基本结构是？', options: ['be + V-ing', 'have + 过去分词', 'be + 过去分词', 'will + V'], answer: 2 },
      { id: 'pv3', type: 'choice', stem: '"English ___ all over the world." (speak)', options: ['speaks', 'is spoken', 'speaking', 'spoke'], answer: 1 },
    ],
  },
  {
    id: 'object-clause', name: '宾语从句', category: '从句', difficulty: 2,
    description: '在句中充当宾语的从句，通常由 that/if/whether 或疑问词引导。',
    quiz: [
      { id: 'oc1', type: 'choice', stem: '"I know ___ he is right."', options: ['what', 'that', 'which', 'when'], answer: 1 },
      { id: 'oc2', type: 'choice', stem: '"He asked me ___ I liked the movie."', options: ['that', 'what', 'if', 'which'], answer: 2 },
      { id: 'oc3', type: 'choice', stem: '宾语从句的语序是？', options: ['疑问语序', '陈述语序', '倒装语序', '任意语序'], answer: 1 },
    ],
  },
  {
    id: 'adverbial-clause', name: '状语从句', category: '从句', difficulty: 2,
    description: '修饰主句中的动词、形容词或副词，表示时间、原因、条件、让步等。',
    quiz: [
      { id: 'ac1', type: 'choice', stem: '"___ it rains, we will stay home." (如果)', options: ['Because', 'If', 'When', 'Although'], answer: 1 },
      { id: 'ac2', type: 'choice', stem: '"He was late ___ he missed the bus." (因为)', options: ['so', 'but', 'because', 'if'], answer: 2 },
      { id: 'ac3', type: 'choice', stem: '"___ he is rich, he is not happy." (虽然)', options: ['Because', 'If', 'When', 'Although'], answer: 3 },
    ],
  },
  {
    id: 'attributive-clause', name: '定语从句', category: '从句', difficulty: 3,
    description: '修饰名词或代词的从句，由关系代词(who/whom/which/that)或关系副词(when/where/why)引导。',
    quiz: [
      { id: 'at1', type: 'choice', stem: '"The boy ___ is singing is my brother."', options: ['which', 'who', 'whom', 'whose'], answer: 1 },
      { id: 'at2', type: 'choice', stem: '"This is the book ___ I bought yesterday."', options: ['who', 'whom', 'which', 'where'], answer: 2 },
      { id: 'at3', type: 'choice', stem: '定语从句修饰什么？', options: ['动词', '形容词', '名词/代词', '副词'], answer: 2 },
    ],
  },

  // ═══ 高阶 ═══
  {
    id: 'subjunctive', name: '虚拟语气', category: '高阶语法', difficulty: 3,
    description: '表示与事实相反或不太可能实现的假设。If I were you... / I wish...',
    quiz: [
      { id: 's1', type: 'choice', stem: '"If I ___ you, I would go." (be)', options: ['am', 'was', 'were', 'are'], answer: 2 },
      { id: 's2', type: 'choice', stem: '"I wish I ___ fly." (can)', options: ['can', 'could', 'will', 'would'], answer: 1 },
      { id: 's3', type: 'choice', stem: '虚拟语气中与现在事实相反，从句用？', options: ['现在时', '过去时', '将来时', '完成时'], answer: 1 },
    ],
  },
  {
    id: 'inversion', name: '倒装句', category: '高阶语法', difficulty: 3,
    description: '将谓语或助动词提到主语之前，包括完全倒装和部分倒装。',
    quiz: [
      { id: 'i1', type: 'choice', stem: '"Never ___ I seen such beauty." (have)', options: ['I have', 'have I', 'I had', 'had I'], answer: 1 },
      { id: 'i2', type: 'choice', stem: '"Not only ___ he sing, but he also dances." (does)', options: ['he does', 'does he', 'he do', 'do he'], answer: 1 },
      { id: 'i3', type: 'choice', stem: '否定词放句首时，句子需要？', options: ['不变', '倒装', '加助动词do', '用过去时'], answer: 1 },
    ],
  },
  {
    id: 'non-finite', name: '非谓语动词', category: '高阶语法', difficulty: 3,
    description: '包括不定式(to do)、动名词(doing)和分词(done/doing)，在句中充当除谓语外的各种成分。',
    quiz: [
      { id: 'nf1', type: 'choice', stem: '"I enjoy ___ books." (read)', options: ['read', 'to read', 'reading', 'reads'], answer: 2 },
      { id: 'nf2', type: 'choice', stem: '"He wants ___ a doctor." (become)', options: ['become', 'to become', 'becoming', 'became'], answer: 1 },
      { id: 'nf3', type: 'choice', stem: '"___ is believing." (see)', options: ['See', 'To see', 'Seeing', 'Seen'], answer: 2 },
    ],
  },
];
