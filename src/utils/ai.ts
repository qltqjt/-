const API_KEY = 'sk-439d18df6fef4e8eb2bab5987b41d361';
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

export interface AIWord {
  english: string;
  chinese: string;
  example: string;
  exampleCn: string;
  imageHint: string;      // 用于生成图片的提示词
  options: string[];       // 4 个中文选项（含正确答案）
  answerIndex: number;     // 正确答案在 options 中的索引
}

export async function generateWords(
  grade: 'primary' | 'middle' | 'high',
  count: number = 10
): Promise<AIWord[]> {
  const levelMap = {
    primary: '小学水平，简单基础词汇，如 apple, book, cat, dog, sun, water 等',
    middle: '初中水平，中等难度词汇，如 environment, encourage, describe, opinion 等',
    high: '高中及以上水平，较难词汇，如 phenomenon, sophisticated, contemporary 等',
  };

  const prompt = `请生成 ${count} 个英语单词，难度为：${levelMap[grade]}。

要求严格返回 JSON 数组格式（不要markdown代码块），每个单词包含：
- english: 英文单词
- chinese: 中文释义
- example: 一个地道的中英文混合例句（英文句子中包含该单词，括号里标注中文翻译）
- exampleCn: 例句的完整中文翻译
- imageHint: 3-5个英文单词的画面描述，用于AI图片生成
- options: 4个中文选项数组（包含正确答案和3个干扰项，随机排列）
- answerIndex: 正确答案在options中的索引(0-3)

确保 options 中的干扰项是有迷惑性的，和正确答案意思相近或相关的词。

直接返回JSON数组，不要任何其他文字。`;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`AI 生成失败: ${response.status} ${err}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  // 尝试解析 JSON（可能包裹在 markdown 代码块中）
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('AI 返回格式异常，无法解析');
  }

  const words: AIWord[] = JSON.parse(jsonMatch[0]);

  // 验证每个单词的数据完整性
  for (const w of words) {
    if (!w.english || !w.chinese || !w.options || w.options.length !== 4) {
      throw new Error('AI 返回数据不完整');
    }
  }

  return words;
}

// 生成画面提示词（用于后续图片生成）
export function generateImagePrompt(word: AIWord): string {
  return `Simple clean illustration for English word "${word.english}" (${word.chinese}). ${word.imageHint}. Minimalist style, suitable for language learning flashcard, no text on image.`;
}
