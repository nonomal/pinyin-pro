// 单字拼音转换后的结果
export interface SingleWordResult {
  origin: string;
  originPinyin: string;
  result: string;
  isZh: boolean;
  delete?: boolean;
}

// type: all 结果
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

// type: all & heteronym 结果
export interface HeteronymData {
  origin: string;
  /**
   * @description 以空格隔开的拼音字符串
   */
  pinyin: string;
  /**
   * @description 拼音数组
   */
  pinyinList: string[];
  /**
   * @description 是否为汉字
   */
  isZh: boolean;
}

// toneType 属性可选参数
export type ToneType = 'symbol' | 'num' | 'none';

export type PinyinMode = 'normal' | 'surname';
