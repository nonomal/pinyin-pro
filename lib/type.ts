// 单字拼音转换后的结果
export interface SingleWordResult {
  origin: string;
  originPinyin: string;
  result: string;
  isZh: boolean;
  delete?: boolean;
}

// type = all 结果
export interface AllData {
  origin: string;
  pinyin: string;
  initial: string;
  final: string;
  num: number;
  first: string;
  finalHead: string;
  finalBody: string;
  finalTail: string;
  isZh: boolean;
}

// toneType 属性可选参数
export type ToneType = 'symbol' | 'num' | 'none';

export type PinyinMode = 'normal' | 'surname';
