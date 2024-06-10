import { Probability, Priority } from '@/common/constant';
import type { Pattern } from  '../common/segmentit';
const DICT3: { [prop: string]: string } = {
  为什么: 'wèi shén me',
  实际上: 'shí jì shang',
  检察长: 'jiǎn chá zhǎng',
  干什么: 'gàn shén me',
  这会儿: 'zhè huì er',
  尽可能: 'jǐn kě néng',
  董事长: 'dǒng shì zhǎng',
  了不起: 'liǎo bù qǐ',
  参谋长: 'cān móu zhǎng',
  朝鲜族: 'cháo xiǎn zú',
  海内外: 'hǎi nèi wài',
  禁不住: 'jīn bú zhù',
  柏拉图: 'bó lā tú',
  不在乎: 'bú zài hu',
  洛杉矶: 'luò shān jī',
  有点儿: 'yǒu diǎn er',
  迫击炮: 'pǎi jī pào',
  不得了: 'bù dé liǎo',
  马尾松: 'mǎ wěi sōng',
  运输量: 'yùn shū liàng',
  发脾气: 'fā pí qi',
  士大夫: 'shì dà fū',
  仡佬族: 'gē lǎo zú',
  鸭绿江: 'yā lù jiāng',
  压根儿: 'yà gēn er',
  对得起: 'duì de qǐ',
  那会儿: 'nà huì er',
  自个儿: 'zì gě er',
  物理量: 'wù lǐ liàng',
  怎么着: 'zěn me zhāo',
  明晃晃: 'míng huǎng huǎng',
  节假日: 'jié jià rì',
  心里话: 'xīn lǐ huà',
  发行量: 'fā xíng liàng',
  兴冲冲: 'xìng chōng chōng',
  分子量: 'fēn zǐ liàng',
  国子监: 'guó zǐ jiàn',
  老大难: 'lǎo dà nán',
  党内外: 'dǎng nèi wài',
  这么着: 'zhè me zhāo',
  少奶奶: 'shào nǎi nai',
  暗地里: 'àn dì lǐ',
  更年期: 'gēng nián qī',
  工作量: 'gōng zuò liàng',
  背地里: 'bèi dì lǐ',
  山里红: 'shān li hóng',
  好好儿: 'hǎo hāo er',
  交响乐: 'jiāo xiǎng yuè',
  好意思: 'hǎo yì si',
  吐谷浑: 'tǔ yù hún',
  没意思: 'méi yì si',
  理发师: 'lǐ fà shī',
  塔什干: 'tǎ shí gān',
  充其量: 'chōng qí liàng',
  靠得住: 'kào de zhù',
  车行道: 'chē xíng dào',
  中郎将: 'zhōng láng jiàng',
  照明弹: 'zhào míng dàn',
  烟幕弹: 'yān mù dàn',
  没奈何: 'mò nài hé',
  乱哄哄: 'luàn hōng hōng',
  惠更斯: 'huì gēng sī',
  载重量: 'zài zhòng liàng',
  瞧得起: 'qiáo de qǐ',
  纪传体: 'jì zhuàn tǐ',
  阿房宫: 'ē páng gōng',
  卷心菜: 'juǎn xīn cài',
  戏班子: 'xì bān zi',
  过得去: 'guò de qù',
  花岗石: 'huā gāng shí',
  外甥女: 'wài sheng nǚ',
  团团转: 'tuán tuán zhuàn',
  大堡礁: 'dà bǎo jiāo',
  燃烧弹: 'rán shāo dàn',
  劳什子: 'láo shí zi',
  摇滚乐: 'yáo gǔn yuè',
  夹竹桃: 'jiā zhú táo',
  闹哄哄: 'nào hōng hōng',
  三连冠: 'sān lián guàn',
  重头戏: 'zhòng tóu xì',
  二人转: 'èr rén zhuàn',
  节骨眼: 'jiē gǔ yǎn',
  知识面: 'zhī shi miàn',
  护士长: 'hù shi zhǎng',
  信号弹: 'xìn hào dàn',
  干电池: 'gān diàn chí',
  枪杆子: 'qiāng gǎn zi',
  哭丧棒: 'kū sāng bàng',
  鼻咽癌: 'bí yān ái',
  瓦岗军: 'wǎ gāng jūn',
  买得起: 'mǎi de qǐ',
  癞蛤蟆: 'lài há ma',
  脊梁骨: 'jǐ liang gǔ',
  子母弹: 'zǐ mǔ dàn',
  开小差: 'kāi xiǎo chāi',
  女强人: 'nǚ qiáng rén',
  英雄传: 'yīng xióng zhuàn',
  爵士乐: 'jué shì yuè',
  说笑话: 'shuō xiào hua',
  碰头会: 'pèng tóu huì',
  玻璃钢: 'bō li gāng',
  曳光弹: 'yè guāng dàn',
  少林拳: 'shào lín quán',
  咏叹调: 'yǒng tàn diào',
  少先队: 'shào xiān duì',
  灵长目: 'líng zhǎng mù',
  对着干: 'duì zhe gàn',
  蒙蒙亮: 'méng méng liàng',
  软骨头: 'ruǎn gǔ tou',
  铺盖卷: 'pū gài juǎn',
  和稀泥: 'huò xī ní',
  背黑锅: 'bēi hēi guō',
  红彤彤: 'hóng tōng tōng',
  武侯祠: 'wǔ hóu cí',
  打哆嗦: 'dǎ duō suo',
  户口簿: 'hù kǒu bù',
  马尾藻: 'mǎ wěi zǎo',
  夜猫子: 'yè māo zi',
  打手势: 'dǎ shǒu shì',
  龙王爷: 'lóng wáng yé',
  气头上: 'qì tóu shang',
  糊涂虫: 'hú tu chóng',
  笔杆子: 'bǐ gǎn zi',
  占便宜: 'zhàn pián yi',
  打主意: 'dǎ zhǔ yì',
  多弹头: 'duō dàn tóu',
  露一手: 'lòu yì shǒu',
  堰塞湖: 'yàn sè hú',
  保得住: 'bǎo de zhù',
  趵突泉: 'bào tū quán',
  奥得河: 'ào de hé',
  司务长: 'sī wù zhǎng',
  禁不起: 'jīn bù qǐ',
  什刹海: 'shí chà hǎi',
  莲花落: 'lián huā lào',
  见世面: 'jiàn shì miàn',
  豁出去: 'huō chū qù',
  电位差: 'diàn wèi chā',
  挨个儿: 'āi gè er',
  那阵儿: 'nà zhèn er',
  肺活量: 'fèi huó liàng',
  大师傅: 'dà shī fu',
  掷弹筒: 'zhì dàn tǒng',
  打呼噜: 'dǎ hū lu',
  广渠门: 'ān qú mén',
  未见得: 'wèi jiàn dé',
  大婶儿: 'dà shěn er',
  谈得来: 'tán de lái',
  脚丫子: 'jiǎo yā zi',
  空包弹: 'kōng bāo dàn',
  窝里斗: 'wō li dòu',
  弹着点: 'dàn zhuó diǎn',
  个头儿: 'gè tóu er',
  看得起: 'kàn de qǐ',
  糊涂账: 'hú tu zhàng',
  大猩猩: 'dà xīng xing',
  禁得起: 'jīn de qǐ',
  法相宗: 'fǎ xiàng zōng',
  可怜相: 'kě lián xiàng',
  吃得下: 'chī de xià',
  汉堡包: 'hàn bǎo bāo',
  闹嚷嚷: 'nào rāng rāng',
  数来宝: 'shǔ lái bǎo',
  合得来: 'hé de lái',
  干性油: 'gān xìng yóu',
  闷葫芦: 'mèn hú lu',
  呱呱叫: 'guā guā jiào',
  西洋参: 'xī yáng shēn',
  林荫道: 'lín yīn dào',
  拉家常: 'lā jiā cháng',
  卷铺盖: 'juǎn pū gài',
  过得硬: 'guò de yìng',
  飞将军: 'fēi jiāng jūn',
  挑大梁: 'tiǎo dà liáng',
  哈巴狗: 'hǎ ba gǒu',
  过家家: 'guò jiā jiā',
  催泪弹: 'cuī lèi dàn',
  雨夹雪: 'yǔ jiā xuě',
  敲竹杠: 'qiāo zhú gàng',
  列车长: 'liè chē zhǎng',
  华达呢: 'huá dá ní',
  犯得着: 'fàn de zháo',
  土疙瘩: 'tǔ gē da',
  煞风景: 'shā fēng jǐng',
  轻量级: 'qīng liàng jí',
  羞答答: 'xiū dā dā',
  石子儿: 'shí zǐ er',
  达姆弹: 'dá mǔ dàn',
  科教片: 'kē jiào piān',
  侃大山: 'kǎn dà shān',
  丁点儿: 'dīng diǎn er',
  吃得消: 'chī de xiāo',
  捋虎须: 'luō hǔ xū',
  高丽参: 'gāo lí shēn',
  众生相: 'zhòng shēng xiàng',
  咽峡炎: 'yān xiá yán',
  禁得住: 'jīn de zhù',
  吃得开: 'chī de kāi',
  柞丝绸: 'zuò sī chóu',
  应声虫: 'yìng shēng chóng',
  数得着: 'shǔ de zháo',
  傻劲儿: 'shǎ jìn er',
  铅玻璃: 'qiān bō li',
  可的松: 'kě dì sōng',
  划得来: 'huá de lái',
  晕乎乎: 'yūn hū hū',
  屎壳郎: 'shǐ ke làng',
  尥蹶子: 'liào juě zi',
  藏红花: 'zàng hóng huā',
  闷罐车: 'mèn guàn chē',
  卡脖子: 'qiǎ bó zi',
  红澄澄: 'hóng deng deng',
  赶得及: 'gǎn de jí',
  当间儿: 'dāng jiàn er',
  露马脚: 'lòu mǎ jiǎo',
  鸡内金: 'jī nèi jīn',
  犯得上: 'fàn de shàng',
  钉齿耙: 'dīng chǐ bà',
  饱和点: 'bǎo hé diǎn',
  龙爪槐: 'lóng zhǎo huái',
  喝倒彩: 'hè dào cǎi',
  定冠词: 'dìng guàn cí',
  担担面: 'dàn dan miàn',
  吃得住: 'chī de zhù',
  爪尖儿: 'zhuǎ jiān er',
  支着儿: 'zhī zhāo er',
  折跟头: 'zhē gēn tou',
  阴着儿: 'yīn zhāo er',
  烟卷儿: 'yān juǎn er',
  宣传弹: 'xuān chuán dàn',
  信皮儿: 'xìn pí er',
  弦切角: 'xián qiē jiǎo',
  缩砂密: 'sù shā mì',
  说得来: 'shuō de lái',
  水漂儿: 'shuǐ piāo er',
  耍笔杆: 'shuǎ bǐ gǎn',
  数得上: 'shǔ de shàng',
  数不着: 'shǔ bù zháo',
  数不清: 'shǔ bù qīng',
  什件儿: 'shí jiàn er',
  生死簿: 'shēng sǐ bù',
  扇风机: 'shān fēng jī',
  撒呓挣: 'sā yì zheng',
  日记簿: 'rì jì bù',
  热得快: 'rè de kuài',
  亲家公: 'qìng jia gōng',
  奇函数: 'jī hán shù',
  拍纸簿: 'pāi zhǐ bù',
  努劲儿: 'nǔ jìn er',
  泥娃娃: 'ní wá wa',
  内切圆: 'nèi qiē yuán',
  哪会儿: 'nǎ huì er',
  闷头儿: 'mēn tóu er',
  没谱儿: 'méi pǔ er',
  铆劲儿: 'mǎo jìn er',
  溜肩膀: 'liū jiān bǎng',
  了望台: 'liào wàng tái',
  老来少: 'lǎo lái shào',
  坤角儿: 'kūn jué er',
  考勤簿: 'kǎo qín bù',
  卷笔刀: 'juǎn bǐ dāo',
  进给量: 'jìn jǐ liàng',
  划不来: 'huá bù lái',
  汗褂儿: 'hàn guà er',
  鼓囊囊: 'gǔ nāng nāng',
  够劲儿: 'gòu jìn er',
  公切线: 'gōng qiē xiàn',
  搁得住: 'gé de zhù',
  赶浪头: 'gǎn làng tóu',
  赶得上: 'gǎn de shàng',
  干酵母: 'gān jiào mǔ',
  嘎渣儿: 'gā zhā er',
  嘎嘣脆: 'gā bēng cuì',
  对得住: 'duì de zhù',
  逗闷子: 'dòu mèn zi',
  顶呱呱: 'dǐng guā guā',
  滴溜儿: 'dī liù er',
  大轴子: 'dà zhòu zi',
  打板子: 'dǎ bǎn zi',
  寸劲儿: 'cùn jìn er',
  醋劲儿: 'cù jìn er',
  揣手儿: 'chuāi shǒu er',
  冲劲儿: 'chòng jìn er',
  吃得来: 'chī de lái',
  不更事: 'bù gēng shì',
  奔头儿: 'bèn tou er',
  百夫长: 'bǎi fū zhǎng',
  娃娃亲: 'wá wa qīn',
  死劲儿: 'sǐ jìn er',
  骨朵儿: 'gū duǒ er',
  功劳簿: 'gōng láo bù',
  都江堰: 'dū jiāng yàn',
  一担水: 'yí dàn shuǐ',
  否极泰: 'pǐ jí tài',
  泰来否: 'tài lái pǐ',
  咳特灵: 'ké tè líng',
  开户行: 'kāi hù háng',
  郦食其: 'lì yì jī',
  花事了: 'huā shì liǎo',

  // 一字变调的词语（与两个字的字典冲突，故需要重新定义）
  一更更: 'yì gēng gēng', // 一声声，一更更。
  一重山: 'yì chóng shān',
  风一更: 'fēng yì gēng',
  雪一更: 'xuě yì gēng',
  归一码: 'guī yì mǎ', // 一码归一码

  // 一字不变调的词语（需要增补更多）
  星期一: 'xīng qī yī',
  礼拜一: 'lǐ bài yī',
  一季度: 'yī jì dù',
  一月一: 'yī yuè yī', // 一月一日，一月一号等
  一字马: 'yī zì mǎ',
  一是一: 'yī shì yī',
  一次方: 'yī cì fāng',
  一阳指: 'yī yáng zhǐ',
  一字决: 'yī zì jué',
  一年级: 'yī nián jí',
  一不做: 'yī bú zuò', // 一不做二不休

  屈戌儿: 'qū qu ér', // https://www.zhihu.com/question/51441924/answer/125861101
  难为水: 'nán wéi shuǐ',
  难为情: 'nán wéi qíng',

  行一行: 'xíng yì háng', // 绕口令，详见测试用例
  别别的: 'biè bié de', // 校长说校服上除了校徽别别别的，让你们别别别的别别别的你非得别别的
  干哪行: 'gàn nǎ háng',
  干一行: 'gàn yì háng',
  曲别针: 'qū bié zhēn',
};
export default DICT3;
export const Pattern3: Pattern[] = Object.keys(DICT3).map((key) => ({
  zh: key,
  pinyin: DICT3[key],
  probability: Probability.DICT,
  length: 3,
  priority: Priority.Normal,
  dict: Symbol('dict3'),
}));
