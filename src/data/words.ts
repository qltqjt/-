export interface WordEntry {
  english: string;
  chinese: string;
  example: string;
  exampleCn: string;
}

type WordBank = Record<'primary' | 'middle' | 'high', WordEntry[]>;

export const WORDS: WordBank = {
  // ═══════════ 小学词汇（课标核心 80 词） ═══════════
  primary: [
    { english: 'apple', chinese: '苹果', example: 'I eat an apple every day.', exampleCn: '我每天吃一个苹果。' },
    { english: 'book', chinese: '书', example: 'This book is very interesting.', exampleCn: '这本书很有趣。' },
    { english: 'cat', chinese: '猫', example: 'The cat is sleeping on the sofa.', exampleCn: '猫正在沙发上睡觉。' },
    { english: 'dog', chinese: '狗', example: 'My dog likes to run in the park.', exampleCn: '我的狗喜欢在公园里跑。' },
    { english: 'egg', chinese: '鸡蛋', example: 'I have an egg for breakfast.', exampleCn: '我早餐吃一个鸡蛋。' },
    { english: 'fish', chinese: '鱼', example: 'There are many fish in the river.', exampleCn: '河里有很多鱼。' },
    { english: 'girl', chinese: '女孩', example: 'The girl is reading a book.', exampleCn: '那个女孩在看书。' },
    { english: 'house', chinese: '房子', example: 'We live in a big house.', exampleCn: '我们住在一所大房子里。' },
    { english: 'jump', chinese: '跳', example: 'The rabbit can jump very high.', exampleCn: '兔子能跳得很高。' },
    { english: 'kite', chinese: '风筝', example: 'Let us fly a kite in the park.', exampleCn: '我们在公园里放风筝吧。' },
    { english: 'lion', chinese: '狮子', example: 'The lion is the king of animals.', exampleCn: '狮子是百兽之王。' },
    { english: 'milk', chinese: '牛奶', example: 'I drink milk every morning.', exampleCn: '我每天早上喝牛奶。' },
    { english: 'nose', chinese: '鼻子', example: 'An elephant has a long nose.', exampleCn: '大象有长长的鼻子。' },
    { english: 'orange', chinese: '橙子', example: 'This orange is very sweet.', exampleCn: '这个橙子很甜。' },
    { english: 'pen', chinese: '钢笔', example: 'May I use your pen?', exampleCn: '我可以用你的钢笔吗？' },
    { english: 'queen', chinese: '女王', example: 'The queen lives in a castle.', exampleCn: '女王住在城堡里。' },
    { english: 'rain', chinese: '雨', example: 'It will rain tomorrow.', exampleCn: '明天会下雨。' },
    { english: 'sun', chinese: '太阳', example: 'The sun rises in the east.', exampleCn: '太阳从东方升起。' },
    { english: 'tree', chinese: '树', example: 'There is a tall tree in our garden.', exampleCn: '我们花园里有一棵大树。' },
    { english: 'water', chinese: '水', example: 'Please give me some water.', exampleCn: '请给我一些水。' },
    { english: 'bird', chinese: '鸟', example: 'A bird is singing in the tree.', exampleCn: '一只鸟在树上唱歌。' },
    { english: 'cake', chinese: '蛋糕', example: 'My mother made a birthday cake for me.', exampleCn: '妈妈给我做了一个生日蛋糕。' },
    { english: 'door', chinese: '门', example: 'Please close the door.', exampleCn: '请关门。' },
    { english: 'ear', chinese: '耳朵', example: 'Rabbits have long ears.', exampleCn: '兔子有长长的耳朵。' },
    { english: 'foot', chinese: '脚', example: 'I hurt my foot when playing football.', exampleCn: '我踢足球时伤了脚。' },
    { english: 'game', chinese: '游戏', example: 'This is my favorite computer game.', exampleCn: '这是我最喜欢的电脑游戏。' },
    { english: 'hand', chinese: '手', example: 'Wash your hands before eating.', exampleCn: '吃饭前要洗手。' },
    { english: 'ice', chinese: '冰', example: 'The lake is covered with ice in winter.', exampleCn: '冬天湖面结冰了。' },
    { english: 'king', chinese: '国王', example: 'The king was very kind to his people.', exampleCn: '国王对他的人民很仁慈。' },
    { english: 'leg', chinese: '腿', example: 'He broke his leg in the accident.', exampleCn: '他在事故中摔断了腿。' },
    { english: 'moon', chinese: '月亮', example: 'The moon is very bright tonight.', exampleCn: '今晚月亮很亮。' },
    { english: 'night', chinese: '夜晚', example: 'I usually go to bed at ten at night.', exampleCn: '我通常晚上十点睡觉。' },
    { english: 'old', chinese: '老的', example: 'My grandfather is very old but healthy.', exampleCn: '我爷爷很老了但是很健康。' },
    { english: 'park', chinese: '公园', example: 'We often take a walk in the park.', exampleCn: '我们经常在公园散步。' },
    { english: 'rice', chinese: '米饭', example: 'Chinese people eat rice every day.', exampleCn: '中国人每天都吃米饭。' },
    { english: 'school', chinese: '学校', example: 'I go to school by bus every day.', exampleCn: '我每天坐公交去学校。' },
    { english: 'table', chinese: '桌子', example: 'There is a book on the table.', exampleCn: '桌子上有一本书。' },
    { english: 'umbrella', chinese: '雨伞', example: 'Take an umbrella with you. It may rain.', exampleCn: '带上雨伞，可能要下雨。' },
    { english: 'yellow', chinese: '黄色', example: 'She is wearing a yellow dress.', exampleCn: '她穿着一条黄色的裙子。' },
    { english: 'zoo', chinese: '动物园', example: 'We saw many animals at the zoo.', exampleCn: '我们在动物园看到了很多动物。' },
    { english: 'happy', chinese: '快乐的', example: 'The children are very happy today.', exampleCn: '孩子们今天很开心。' },
    { english: 'big', chinese: '大的', example: 'China is a big country.', exampleCn: '中国是一个大国。' },
    { english: 'small', chinese: '小的', example: 'The puppy is very small and cute.', exampleCn: '小狗很小很可爱。' },
    { english: 'run', chinese: '跑', example: 'He can run very fast.', exampleCn: '他跑得很快。' },
    { english: 'eat', chinese: '吃', example: 'I like to eat noodles for lunch.', exampleCn: '我午饭喜欢吃面条。' },
    { english: 'drink', chinese: '喝', example: 'Would you like to drink some tea?', exampleCn: '你想喝点茶吗？' },
    { english: 'read', chinese: '读', example: 'I like to read storybooks before bed.', exampleCn: '我喜欢睡前读故事书。' },
    { english: 'write', chinese: '写', example: 'Please write your name here.', exampleCn: '请在这里写下你的名字。' },
    { english: 'play', chinese: '玩', example: 'The children play in the garden after school.', exampleCn: '孩子们放学后在花园里玩。' },
    { english: 'swim', chinese: '游泳', example: 'I can swim very well.', exampleCn: '我游泳游得很好。' },
    { english: 'beautiful', chinese: '美丽的', example: 'What a beautiful flower!', exampleCn: '多美的花啊！' },
    { english: 'family', chinese: '家庭', example: 'I love my family very much.', exampleCn: '我非常爱我的家人。' },
    { english: 'friend', chinese: '朋友', example: 'She is my best friend.', exampleCn: '她是我最好的朋友。' },
    { english: 'teacher', chinese: '老师', example: 'Our English teacher is very kind.', exampleCn: '我们的英语老师很和蔼。' },
    { english: 'mother', chinese: '妈妈', example: 'My mother cooks delicious food.', exampleCn: '我妈妈做的饭很好吃。' },
    { english: 'father', chinese: '爸爸', example: 'My father works in a hospital.', exampleCn: '我爸爸在医院工作。' },
    { english: 'brother', chinese: '兄弟', example: 'My brother is taller than me.', exampleCn: '我哥哥比我高。' },
    { english: 'sister', chinese: '姐妹', example: 'My sister can dance very well.', exampleCn: '我姐姐跳舞跳得很好。' },
    { english: 'morning', chinese: '早上', example: 'I get up at six in the morning.', exampleCn: '我早上六点起床。' },
    { english: 'afternoon', chinese: '下午', example: 'We have PE class in the afternoon.', exampleCn: '我们下午有体育课。' },
  ],

  // ═══════════ 初中词汇（中考课标核心 80 词） ═══════════
  middle: [
    { english: 'environment', chinese: '环境', example: 'We should protect the environment.', exampleCn: '我们应该保护环境。' },
    { english: 'encourage', chinese: '鼓励', example: 'My parents always encourage me to study hard.', exampleCn: '我父母总是鼓励我努力学习。' },
    { english: 'describe', chinese: '描述', example: 'Can you describe what happened?', exampleCn: '你能描述一下发生了什么吗？' },
    { english: 'opinion', chinese: '观点', example: 'In my opinion, this is a good idea.', exampleCn: '在我看来，这是个好主意。' },
    { english: 'patient', chinese: '耐心的', example: 'The doctor is very patient with his patients.', exampleCn: '医生对病人非常耐心。' },
    { english: 'realize', chinese: '意识到', example: 'I realized that I was wrong.', exampleCn: '我意识到我错了。' },
    { english: 'society', chinese: '社会', example: 'Everyone should contribute to society.', exampleCn: '每个人都应该为社会做贡献。' },
    { english: 'volunteer', chinese: '志愿者', example: 'She works as a volunteer at the hospital.', exampleCn: '她在医院做志愿者。' },
    { english: 'celebrate', chinese: '庆祝', example: 'How do you celebrate the Spring Festival?', exampleCn: '你们怎么庆祝春节？' },
    { english: 'balance', chinese: '平衡', example: 'You need to keep a balance between work and rest.', exampleCn: '你需要保持工作和休息的平衡。' },
    { english: 'imagine', chinese: '想象', example: 'Can you imagine life without electricity?', exampleCn: '你能想象没有电的生活吗？' },
    { english: 'manage', chinese: '管理', example: 'She manages a big company.', exampleCn: '她管理一家大公司。' },
    { english: 'necessary', chinese: '必要的', example: 'It is necessary to wear a seat belt.', exampleCn: '系安全带是必要的。' },
    { english: 'quality', chinese: '质量', example: 'The quality of this product is very high.', exampleCn: '这个产品的质量很高。' },
    { english: 'technology', chinese: '技术', example: 'Modern technology has changed our lives.', exampleCn: '现代技术改变了我们的生活。' },
    { english: 'temperature', chinese: '温度', example: 'The temperature today is very high.', exampleCn: '今天的温度很高。' },
    { english: 'tradition', chinese: '传统', example: 'It is a tradition to eat dumplings during the Spring Festival.', exampleCn: '春节吃饺子是一个传统。' },
    { english: 'accident', chinese: '事故', example: 'There was a car accident on the highway.', exampleCn: '高速公路上发生了一起车祸。' },
    { english: 'advantage', chinese: '优势', example: 'What is the advantage of living in a big city?', exampleCn: '住在大城市有什么优势？' },
    { english: 'background', chinese: '背景', example: 'Can you tell me about your family background?', exampleCn: '你能告诉我你的家庭背景吗？' },
    { english: 'challenge', chinese: '挑战', example: 'Learning a new language is a big challenge.', exampleCn: '学习一门新语言是一个很大的挑战。' },
    { english: 'discover', chinese: '发现', example: 'Scientists have discovered a new planet.', exampleCn: '科学家发现了一颗新行星。' },
    { english: 'excellent', chinese: '优秀的', example: 'She did an excellent job in the exam.', exampleCn: '她在考试中表现优秀。' },
    { english: 'friendly', chinese: '友好的', example: 'The people here are very friendly.', exampleCn: '这里的人们非常友好。' },
    { english: 'generous', chinese: '慷慨的', example: 'He is very generous and often helps others.', exampleCn: '他非常慷慨，经常帮助别人。' },
    { english: 'honest', chinese: '诚实的', example: 'An honest person never tells lies.', exampleCn: '诚实的人从不说谎。' },
    { english: 'include', chinese: '包括', example: 'The price includes breakfast and dinner.', exampleCn: '价格包括早餐和晚餐。' },
    { english: 'knowledge', chinese: '知识', example: 'Knowledge is power.', exampleCn: '知识就是力量。' },
    { english: 'language', chinese: '语言', example: 'English is an international language.', exampleCn: '英语是一门国际语言。' },
    { english: 'opportunity', chinese: '机会', example: 'This is a great opportunity for you.', exampleCn: '这对你来说是一个很好的机会。' },
    { english: 'population', chinese: '人口', example: 'China has the largest population in the world.', exampleCn: '中国是世界上人口最多的国家。' },
    { english: 'receive', chinese: '收到', example: 'I received a letter from my pen pal.', exampleCn: '我收到了笔友的来信。' },
    { english: 'experience', chinese: '经验', example: 'Traveling is a good way to gain experience.', exampleCn: '旅行是获得经验的好方式。' },
    { english: 'government', chinese: '政府', example: 'The government is working to improve public services.', exampleCn: '政府正在努力改善公共服务。' },
    { english: 'education', chinese: '教育', example: 'Education is important for everyone.', exampleCn: '教育对每个人都很重要。' },
    { english: 'condition', chinese: '条件', example: 'The living conditions here are very good.', exampleCn: '这里的生活条件很好。' },
    { english: 'ancient', chinese: '古代的', example: 'This is an ancient temple built 1000 years ago.', exampleCn: '这是一座一千年前建造的古庙。' },
    { english: 'weather', chinese: '天气', example: 'What is the weather like today?', exampleCn: '今天天气怎么样？' },
    { english: 'victory', chinese: '胜利', example: 'Our team won a great victory.', exampleCn: '我们队取得了伟大的胜利。' },
    { english: 'attitude', chinese: '态度', example: 'A positive attitude is very important.', exampleCn: '积极的态度非常重要。' },
    { english: 'believe', chinese: '相信', example: 'I believe you can do it.', exampleCn: '我相信你能做到。' },
    { english: 'valuable', chinese: '有价值的', example: 'This is a valuable piece of advice.', exampleCn: '这是一条有价值的建议。' },
    { english: 'worthy', chinese: '值得的', example: 'This movie is worthy of watching.', exampleCn: '这部电影值得一看。' },
    { english: 'respect', chinese: '尊重', example: 'We should respect the elderly.', exampleCn: '我们应该尊重老人。' },
    { english: 'support', chinese: '支持', example: 'Thank you for your support.', exampleCn: '谢谢你的支持。' },
    { english: 'explain', chinese: '解释', example: 'Can you explain this to me?', exampleCn: '你能给我解释一下这个吗？' },
    { english: 'express', chinese: '表达', example: 'I find it hard to express my feelings.', exampleCn: '我觉得很难表达我的感受。' },
    { english: 'familiar', chinese: '熟悉的', example: 'This song sounds familiar to me.', exampleCn: '这首歌我听着很熟悉。' },
    { english: 'humorous', chinese: '幽默的', example: 'He is a very humorous person.', exampleCn: '他是一个很幽默的人。' },
    { english: 'gradually', chinese: '逐渐地', example: 'It gradually became dark outside.', exampleCn: '外面逐渐变暗了。' },
    { english: 'influence', chinese: '影响', example: 'TV has a great influence on children.', exampleCn: '电视对儿童有很大影响。' },
    { english: 'mention', chinese: '提到', example: 'Did she mention my name?', exampleCn: '她提到我的名字了吗？' },
    { english: 'prefer', chinese: '更喜欢', example: 'I prefer tea to coffee.', exampleCn: '比起咖啡我更喜欢茶。' },
    { english: 'prevent', chinese: '阻止', example: 'Nothing can prevent us from achieving our goal.', exampleCn: '没有什么能阻止我们实现目标。' },
    { english: 'provide', chinese: '提供', example: 'The hotel provides free breakfast.', exampleCn: '酒店提供免费早餐。' },
    { english: 'purpose', chinese: '目的', example: 'What is the purpose of this meeting?', exampleCn: '这次会议的目的是什么？' },
    { english: 'require', chinese: '需要', example: 'This job requires a lot of patience.', exampleCn: '这份工作需要很多耐心。' },
    { english: 'separate', chinese: '分开', example: 'Please separate the good apples from the bad ones.', exampleCn: '请把好苹果和坏苹果分开。' },
    { english: 'suffer', chinese: '遭受', example: 'Many people suffered from the earthquake.', exampleCn: '很多人在地震中受灾。' },
    { english: 'suppose', chinese: '认为', example: 'I suppose you are right.', exampleCn: '我认为你是对的。' },
  ],

  // ═══════════ 高中词汇（高考课标核心 80 词） ═══════════
  high: [
    { english: 'acknowledge', chinese: '承认', example: 'He acknowledged that he had made a mistake.', exampleCn: '他承认自己犯了一个错误。' },
    { english: 'appreciate', chinese: '感激', example: 'I really appreciate your help.', exampleCn: '我真的很感激你的帮助。' },
    { english: 'approach', chinese: '方法', example: 'We need a new approach to solve this problem.', exampleCn: '我们需要一种新方法来解决这个问题。' },
    { english: 'benefit', chinese: '益处', example: 'Exercise has many benefits for your health.', exampleCn: '锻炼对你的健康有很多益处。' },
    { english: 'challenge', chinese: '挑战', example: 'This is a challenge I must face.', exampleCn: '这是一个我必须面对的挑战。' },
    { english: 'concern', chinese: '关心', example: 'Thank you for your concern about my health.', exampleCn: '谢谢你对我健康的关心。' },
    { english: 'contribute', chinese: '贡献', example: 'Everyone can contribute to protecting the earth.', exampleCn: '每个人都可以为保护地球做贡献。' },
    { english: 'convenient', chinese: '方便的', example: 'It is very convenient to shop online.', exampleCn: '网上购物非常方便。' },
    { english: 'convince', chinese: '说服', example: 'I tried to convince him but he would not listen.', exampleCn: '我试图说服他但他不听。' },
    { english: 'decorate', chinese: '装饰', example: 'We decorated the room with flowers and balloons.', exampleCn: '我们用鲜花和气球装饰了房间。' },
    { english: 'demand', chinese: '要求', example: 'This work demands a lot of patience and skill.', exampleCn: '这项工作需要很多耐心和技巧。' },
    { english: 'deserve', chinese: '值得', example: 'You deserve a good rest after such hard work.', exampleCn: '辛苦工作后你值得好好休息。' },
    { english: 'evidence', chinese: '证据', example: 'There is no evidence that he is guilty.', exampleCn: '没有证据表明他有罪。' },
    { english: 'flexible', chinese: '灵活的', example: 'We need a more flexible schedule.', exampleCn: '我们需要一个更灵活的时间表。' },
    { english: 'frequently', chinese: '频繁地', example: 'She frequently visits her grandparents.', exampleCn: '她经常去看望她的祖父母。' },
    { english: 'inspire', chinese: '激励', example: 'His story inspired me to work harder.', exampleCn: '他的故事激励我更加努力。' },
    { english: 'opportunity', chinese: '机会', example: 'Do not miss this important opportunity.', exampleCn: '不要错过这个重要的机会。' },
    { english: 'recommend', chinese: '推荐', example: 'I recommend this book to all English learners.', exampleCn: '我向所有英语学习者推荐这本书。' },
    { english: 'responsibility', chinese: '责任', example: 'It is our responsibility to protect nature.', exampleCn: '保护自然是我们的责任。' },
    { english: 'attempt', chinese: '试图', example: 'He attempted to climb the mountain alone.', exampleCn: '他试图独自攀登那座山。' },
    { english: 'available', chinese: '可用的', example: 'Is this seat available?', exampleCn: '这个座位有人吗？' },
    { english: 'average', chinese: '平均的', example: 'The average temperature this month is 25 degrees.', exampleCn: '这个月的平均温度是25度。' },
    { english: 'attract', chinese: '吸引', example: 'The beautiful scenery attracts many tourists.', exampleCn: '美丽的风景吸引了很多游客。' },
    { english: 'behavior', chinese: '行为', example: 'His behavior at the party was very polite.', exampleCn: '他在聚会上的行为非常有礼貌。' },
    { english: 'breathe', chinese: '呼吸', example: 'It is hard to breathe at high altitudes.', exampleCn: '在高海拔地区呼吸很困难。' },
    { english: 'combine', chinese: '结合', example: 'We should combine theory with practice.', exampleCn: '我们应该把理论和实践结合起来。' },
    { english: 'communicate', chinese: '交流', example: 'We communicate with each other by email.', exampleCn: '我们通过电子邮件互相交流。' },
    { english: 'apologize', chinese: '道歉', example: 'You should apologize for being late.', exampleCn: '你应该为迟到道歉。' },
    { english: 'compare', chinese: '比较', example: 'Compare these two pictures and find the differences.', exampleCn: '比较这两张图并找出不同之处。' },
    { english: 'confident', chinese: '自信的', example: 'She is very confident about her future.', exampleCn: '她对自己的未来非常自信。' },
    { english: 'consider', chinese: '考虑', example: 'We should consider all the possibilities.', exampleCn: '我们应该考虑所有的可能性。' },
    { english: 'consume', chinese: '消耗', example: 'This car consumes a lot of fuel.', exampleCn: '这辆车消耗很多燃料。' },
    { english: 'control', chinese: '控制', example: 'You must learn to control your temper.', exampleCn: '你必须学会控制你的脾气。' },
    { english: 'courage', chinese: '勇气', example: 'It takes courage to tell the truth.', exampleCn: '说真话需要勇气。' },
    { english: 'curious', chinese: '好奇的', example: 'Children are naturally curious about the world.', exampleCn: '孩子天生对世界充满好奇。' },
    { english: 'deliver', chinese: '递送', example: 'The package will be delivered within three days.', exampleCn: '包裹将在三天内送达。' },
    { english: 'determine', chinese: '决定', example: 'Your attitude will determine your success.', exampleCn: '你的态度将决定你的成功。' },
    { english: 'devote', chinese: '致力于', example: 'She devotes all her time to teaching.', exampleCn: '她把所有时间都投入到教学中。' },
    { english: 'effort', chinese: '努力', example: 'Success comes from hard effort.', exampleCn: '成功来自于艰苦的努力。' },
    { english: 'equal', chinese: '平等的', example: 'All people are born equal.', exampleCn: '人人生而平等。' },
    { english: 'equipment', chinese: '设备', example: 'The laboratory has modern equipment.', exampleCn: '实验室有现代化的设备。' },
    { english: 'exchange', chinese: '交换', example: 'I would like to exchange this shirt for a larger one.', exampleCn: '我想把这件衬衫换成大一号的。' },
    { english: 'exist', chinese: '存在', example: 'Does life exist on other planets?', exampleCn: '其他星球上存在生命吗？' },
    { english: 'expect', chinese: '期望', example: 'I do not expect you to agree with everything I say.', exampleCn: '我不期望你同意我说的每件事。' },
    { english: 'faith', chinese: '信念', example: 'I have faith in your ability.', exampleCn: '我相信你的能力。' },
    { english: 'grateful', chinese: '感激的', example: 'I am very grateful for all your help.', exampleCn: '我非常感激你的所有帮助。' },
    { english: 'ignore', chinese: '忽视', example: 'You cannot ignore the importance of practice.', exampleCn: '你不能忽视练习的重要性。' },
    { english: 'indicate', chinese: '表明', example: 'Research indicates that smoking is harmful.', exampleCn: '研究表明吸烟有害。' },
    { english: 'interrupt', chinese: '打断', example: 'Do not interrupt others when they are speaking.', exampleCn: '别人说话时不要打断。' },
    { english: 'judge', chinese: '判断', example: 'Do not judge a person by his appearance.', exampleCn: '不要以貌取人。' },
    { english: 'observe', chinese: '观察', example: 'Scientists carefully observe the behavior of animals.', exampleCn: '科学家仔细观察动物的行为。' },
    { english: 'organize', chinese: '组织', example: 'They organized a charity event last weekend.', exampleCn: '他们上周末组织了一场慈善活动。' },
    { english: 'perform', chinese: '表现', example: 'She performed very well in the competition.', exampleCn: '她在比赛中表现非常出色。' },
    { english: 'possess', chinese: '拥有', example: 'He possesses great talent in music.', exampleCn: '他在音乐方面拥有非凡的天赋。' },
    { english: 'predict', chinese: '预测', example: 'It is hard to predict what will happen next.', exampleCn: '很难预测接下来会发生什么。' },
    { english: 'promote', chinese: '促进', example: 'Exercise can promote good health.', exampleCn: '锻炼可以促进健康。' },
    { english: 'recall', chinese: '回忆', example: 'I can recall the day we first met.', exampleCn: '我能回忆起我们第一次见面的那一天。' },
    { english: 'recognize', chinese: '认出', example: 'I did not recognize you at first.', exampleCn: '我一开始没认出你。' },
    { english: 'recover', chinese: '恢复', example: 'It took her a month to recover from the illness.', exampleCn: '她花了一个月才从疾病中恢复。' },
    { english: 'rely', chinese: '依靠', example: 'You can rely on me when you need help.', exampleCn: '你需要帮助时可以依靠我。' },
  ],
};

// 从词库中随机抽取 N 个单词，并生成四选一选项
export function pickRandomWords(grade: 'primary' | 'middle' | 'high', count: number = 10) {
  const pool = [...WORDS[grade]];
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const picked = pool.slice(0, count);

  // 为每个单词生成四选一选项
  return picked.map(word => {
    // 从同一学段中随机抽取 3 个不同单词的中文释义作为干扰项
    const others = pool
      .filter(w => w.chinese !== word.chinese)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.chinese);

    const options = [...others];
    const answerIndex = Math.floor(Math.random() * 4);
    options.splice(answerIndex, 0, word.chinese);

    return {
      ...word,
      options,
      answerIndex,
      imageHint: word.english.split('').join(' '),
    };
  });
}
