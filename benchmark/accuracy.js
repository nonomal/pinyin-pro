const { pinyin: pinyinPro } = require('../');
const { pinyin } = require('pinyin/lib/pinyin');
const { pinyin: nApiPinyin, PINYIN_STYLE } = require('@napi-rs/pinyin');

const correctPinyin = `dà hǎi shēn chù de yì tiáo měi rén yú yì zhí duì dà hǎi zhī wài de shì jiè chōng mǎn le hào qí ， tā yì zhí xiǎng yào chū qù kàn kàn hǎi zhī wài de shì jiè ， tā de fù mǔ xiōng dì jiě mèi men què gào sù tā hǎi yǐ wài de shì jiè fēi cháng xiǎn è ， rén xīn fēi cháng xiǎn è ， rú guǒ rén lèi fā xiàn tā měi rén yú de shēn fèn tā jiù huì xiàn rù fēi cháng wēi xiǎn de jìng dì ， tā men quàn gào tā bú yào chū qù 。 tā bù xiāng xìn ， tā jué de zì jǐ yǒu néng lì bǎo hù hǎo zì jǐ ， děng tā wán yí duàn shí jiān tā jiù huí lái ， fǒu zé zhè shǐ zhōng huì shì tā xīn lǐ de yí gè yí hàn ， tā bù xiǎng zài dà hǎi lǐ jú xiàn de guò wán zhè yì shēng 。 yì tiān ， tā chèn jiā lǐ bú zhù yì tōu tōu liū shàng àn ， huàn huà chéng rén xíng ， xiàng lí hǎi yuè lái yuè yuǎn de dì fāng zǒu qù ， měi rén yú de měi mào suǒ dào zhī chù jiē huàn lái yí zhèn jīng tàn ， dàn tā bù zhī dào de shì tā de shēn hòu yì zhí gēn zhe yí gè rén ， cóng tā shàng àn de nà kè kāi shǐ 。 shēn hòu gēn zhe de nán rén yuè lái yuè jiē jìn tā ， zài tā háo wú fáng bèi de qíng kuàng xià zǒu xiàng tā ， tā dǎ zhe xiǎng yào gēn tā zuò péng yǒu de míng yì yǔ měi rén yú jiāo tán ， měi rén yú gào sù tā zì jǐ zài jiā lǐ shì zuì xiǎo de suǒ yǐ zì jǐ jiào xiǎo xiǎo ， hé jiā lǐ nào le biè niu jiù dú zì yì rén pǎo le chū lái ， nán rén shuō ：“ wǒ jiào lǐ hào bó ， nǐ hěn yǒu qù ， wǒ men kě yǐ zuò gè péng yǒu ma ？” měi rén yú xīn lǐ fēi cháng gāo xìng ， méi xiǎng dào zì jǐ gāng shàng àn zhè me kuài jiù yǒu le péng yǒu ， dān chún de měi rén yú xiǎng yě bù xiǎng jiù dā ying le ， tiān sè jiàn wǎn ， kǎo lǜ dào xiǎo xiǎo wú chù kě qù ， lǐ hào bó wèn tā shì fǒu yuàn yì qù zì jǐ jiā lǐ xiān jiāng jiù zhù zhe ， xiǎo xiǎo xiǎng jì rán shì péng yǒu ér qiě zì jǐ yě méi yǒu qù chù jiù diǎn le diǎn tóu ， děng xiǎo xiǎo shuì zháo hòu ， lǐ hào bó zǒu xiàng yí gè piān pì de dì fāng duì zhe diàn huà shuō le jù yòu lái le dān shēng yì ， zhǔn bèi xià ， biàn guà le diàn huà 。 dì èr tiān ， lǐ hào bó wèn xiǎo xiǎo yǒu méi yǒu gōng zuò ， tā kě yǐ gěi tā jiè shào ， xiǎo xiǎo hào qí de wèn ：“ shén me gōng zuò ya ？” hào bó duì tā shuō ：“ shì kě yǐ ràng hěn duō rén zhī dào nǐ bìng qiě xǐ huān nǐ de gōng zuò 。” xiǎo xiǎo xīng fèn de dā ying le 。 chī guò fàn ， hào bó dài tā qù le gōng zuò shì qiān le xié yì ， biàn jiāng tā jiāo gěi le lǎo shī dài tā xùn liàn ， měi tiān chàng gē ， wǔ dǎo de liàn xí cóng wèi tíng zhǐ ， suī rán xīn kǔ dàn wèi le ràng gèng duō rén rèn shi tā ， tā cóng bú bào yuàn ， hào bó yě měi tiān máng wán zì jǐ de shì hòu jiù huì lái jiē tā huí jiā ， huì wèn tā lèi bu lèi ， huì gěi tā zuò fàn ， yì nián zhī hòu tā chū dào le ， hào bó bāng tā jiē le hěn duō diàn shì jù ， diàn yǐng ， guǎng gào dài yán ， xiǎo xiǎo de míng qì yuè lái yuè dà ， fěn sī yuè lái yuè duō ， xiǎo xiǎo fēi cháng kāi xīn ， hào bó yě yì zhí dān rèn zhe tā de jīng jì rén ， màn màn de tā yuè lái yuè xǐ huān xiàn zài de shēng huó ， tā shèn zhì kuài wàng le zì jǐ shì tiáo měi rén yú ， tā jué de zì jǐ hé qí tā rén méi yǒu rèn hé bù tóng ， yě wàng le yào huí dào hǎi lǐ hé hǎi lǐ de fù mǔ xiōng dì jiě mèi 。 tā duì hào bó fēi cháng xìn rèn ， tā ràng zì jǐ zuò shén me xiǎo xiǎo jiù huì qù zuò shén me 。 suī rán shì yí gè xīn rén ， dàn tā dān chún ， shàn liáng ， yú lè quān lǐ hěn duō rén dōu xǐ huān tā ， tā de péng yǒu yě cóng kāi shǐ de zhǐ yǒu hào bó biàn de yuè lái yuè duō ， dàn tā fā xiàn tā duì hào bó què bú zài xiàng shì kāi shǐ de péng yǒu de qíng gǎn ， tā hǎo xǐ huān tā ， hào bó duì tā yě yì zhí hěn hǎo ， xiǎo xiǎo jué de tā yīng gāi yě shì xǐ huān zì jǐ de ， tā hē zuì hòu tā huì zhào gù tā ， pāi wán xì lèi dào bù xíng de shí hòu tā huì bēi tā huí jiā ， tā měi tiān guò de chōng shí ér yòu kuài lè ， tā hǎo xǐ huān xiàn zài de shēng huó ， tā xī wàng yì zhí xiàng xiàn zài yí yàng 。 měi cì jiē shòu cǎi fǎng ， wèn dào tā yǔ hào bó shì bu shì yǒu bù yí yàng de guān xì ， shì bu shì yǐ jīng zài yì qǐ le ， tā zǒng shì xiào xiào ， hào bó gēn tā shuō duì wài bì xū shuō zì jǐ dān shēn bù rán huì yǐng xiǎng tā de fā zhǎn ， suī rán tā bú zài hu zhè xiē dàn shì shì hào bó shuō de tā zhǐ hǎo dā ying ， tā jué de hào bó zhè yàng zuò shì wèi le bǎo hù tā ， shí nián guò qù ， tā yǐ bú zài shì dāng chū gāng chū dào de xīn rén ， shǒu shàng de zī yuán yě yuè lái yuè shǎo ， tā xiǎng yào ān wěn ， xiǎng yào hào bó yì zhí péi zhe tā ， kě hào bó hé tā zài yì qǐ de shí jiān yuè lái yuè shǎo ， tā duì zì jǐ rèn wéi hào bó yě xǐ huān zì jǐ de xiǎng fǎ dòng yáo le ， tā wèn le hǎo jǐ cì hào bó xǐ bu xǐ huān zì jǐ ， tā zǒng shì chén mò huò zhě zhǎo qí tā huà tí huí bì le zhè ge wèn tí ， tā xiǎng qǐ zhī qián yí wèi qián bèi duì tā shuō de “ qī dài suǒ dài lái de mǎn zú gǎn ， zuì měi hǎo de ， bú shì bié rén mǎn zú le zì jǐ de qī dài ， ér shì wǒ men mǎn zú le bié rén de qī dài 。”“ xiàn zài de wǒ yīng gāi mǎn zú le tā de qī dài le ba ， wǒ chéng wéi le tā dāng chū xiǎng ràng wǒ chéng wéi de nà zhǒng rén ， yǒu le míng qì ， kě yǐ gěi tā dài lái cái fù ， wǒ bù kū bú nào ， suǒ yǒu shì qíng dōu tīng cóng tā de ān pái ， shùn cóng tā de xīn yì ， zài tā xīn lǐ zì jǐ hái yǒu shén me bù hǎo ne ？” xiǎo xiǎo kàn zhe hào bó xiǎng zhe 。 tā jué de hǎo lèi ， měi tiān bù tíng de gōng zuò ， wán chéng tā gěi tā de měi gè rèn wu ， tā xiǎng ràng zì jǐ hǎo hǎo xiū xi yí duàn shí jiān ， duō yì xiē hé tā xiāng chǔ de shí jiān ， tā gēn hào bó shuō zì jǐ xiǎng xiū xi yí duàn shí jiān ， hào bó xiǎng le xiǎng tóng yì le ， dì èr tiān tā biàn xuān bù le zì jǐ jiāng zàn shí tuì chū yú lè quān ， hào bó sòng tā huí le jiā ， tā duì tā shuō míng tiān dài tā qù gè dì fāng jiù zǒu le ， tā bù zhī dào tā yào dài tā qù nǎ ， dàn tā xiāng xìn tā ， tā bù zhī dào tā shì shén me shí hòu huí lái de ， tā jiào xǐng tā de shí hòu yǐ jīng shì dì èr tiān zǎo chén le ， yì rú jì wǎng de ， tā men yì qǐ chī guò zǎo cān ， tā gēn zài tā shēn hòu lái dào yí gè cóng wèi lái guò de dì fāng ， zhè ge dì fāng hǎo lěng ， tā men yì qǐ zǒu jìn qù ， tā xiǎng yào lā hào bó ， dàn tā què tū rán pǎo kāi le ， tā lèng zài yuán dì 。 yí gè tiě zhì de lóng zi cóng tiān ér jiàng kùn zhù le tā ， tā dāi dāi de wàng zhe hào bó nà zhāng lěng mò de liǎn ，“ wǒ yǐ wéi zì jǐ mǎn zú le nǐ de qī dài ， wǒ yǐ wéi wǒ zài nǐ xīn lǐ shì bù tóng de ， wǒ yǐ wéi nǐ qǐ mǎ duì wǒ shì yǒu yì diǎn xǐ huān de ， wǒ yǐ wéi wǒ men huì yì zhí zài yì qǐ ， wǒ yǐ wéi nǐ huì yì zhí duì wǒ hǎo de ， yuán lái ， yí qiè dōu zhǐ shì wǒ yǐ wéi 。 wèi shén me zhè me duì wǒ ？” tā lěng lěng de shuō ：“ yīn wèi nǐ yǐ jīng méi yǒu jià zhí le ， cóng yì kāi shǐ jiē jìn nǐ jiù shì wèi le lì yòng nǐ ， jiù shì wèi le ràng nǐ gěi wǒ zhuàn qián ， rú guǒ bú shì yīn wèi nǐ duì wǒ lái shuō shì yì bǐ jù dà de cái fù ， wǒ zěn me kě néng huì qù tǎo hǎo nǐ ， shuō dào dǐ hái shì nǐ tài tiān zhēn le ， wǒ shuō shén me nǐ dōu xìn 。” xiǎo xiǎo xiàn zài cái míng bái dāng chū fù mǔ bú ràng tā shàng àn shuō de huà ，“ nǐ yì kāi shǐ jiù zhī dào wǒ de shēn fèn shì bu shì ？”“ duì ， cóng nǐ shàng àn de nà yí kè wǒ jiù zhī dào le ， xiàn zài shì nǐ zuì hòu néng fā huī de jià zhí le ， yě bù wǎng wǒ duì nǐ fèi xīn le zhè me duō nián 。”“ yuán lái shí jǐ nián de péi bàn wǒ zài nǐ yǎn lǐ zhōng jiū dǐ bú guò qián 。” kàn zhe hào bó jué jué de zhuǎn shēn lí kāi de nà kè xiǎo xiǎo kū de sī xīn liè fèi ， tā hòu huǐ zì jǐ dāng chū bù guǎn bú gù de shàng àn le 。`;
const text = `大海深处的一条美人鱼一直对大海之外的世界充满了好奇，她一直想要出去看看海之外的世界，她的父母兄弟姐妹们却告诉她海以外的世界非常险恶，人心非常险恶，如果人类发现她美人鱼的身份她就会陷入非常危险的境地，他们劝告她不要出去。她不相信，她觉得自己有能力保护好自己，等她玩一段时间她就回来，否则这始终会是她心里的一个遗憾，她不想在大海里局限的过完这一生。一天，她趁家里不注意偷偷溜上岸，幻化成人型，向离海越来越远的地方走去，美人鱼的美貌所到之处皆换来一阵惊叹，但她不知道的是她的身后一直跟着一个人，从她上岸的那刻开始。身后跟着的男人越来越接近她，在她毫无防备的情况下走向她，他打着想要跟她做朋友的名义与美人鱼交谈，美人鱼告诉他自己在家里是最小的所以自己叫小小，和家里闹了别扭就独自一人跑了出来，男人说：“我叫李浩博，你很有趣，我们可以做个朋友吗？”美人鱼心里非常高兴，没想到自己刚上岸这么快就有了朋友，单纯的美人鱼想也不想就答应了，天色渐晚，考虑到小小无处可去，李浩博问她是否愿意去自己家里先将就住着，小小想既然是朋友而且自己也没有去处就点了点头，等小小睡着后，李浩博走向一个偏僻的地方对着电话说了句又来了单生意，准备下，便挂了电话。第二天，李浩博问小小有没有工作，他可以给她介绍，小小好奇的问：“什么工作呀？”浩博对她说：“是可以让很多人知道你并且喜欢你的工作。”小小兴奋的答应了。吃过饭，浩博带她去了工作室签了协议，便将她交给了老师带她训练，每天唱歌，舞蹈的练习从未停止，虽然辛苦但为了让更多人认识她，她从不抱怨，浩博也每天忙完自己的事后就会来接她回家，会问她累不累，会给她做饭，一年之后她出道了，浩博帮她接了很多电视剧，电影，广告代言，小小的名气越来越大，粉丝越来越多，小小非常开心，浩博也一直担任着她的经纪人，慢慢的她越来越喜欢现在的生活，她甚至快忘了自己是条美人鱼，她觉得自己和其他人没有任何不同，也忘了要回到海里和海里的父母兄弟姐妹。她对浩博非常信任，他让自己做什么小小就会去做什么。虽然是一个新人，但她单纯，善良，娱乐圈里很多人都喜欢她，她的朋友也从开始的只有浩博变得越来越多，但她发现她对浩博却不再像是开始的朋友的情感，她好喜欢他，浩博对她也一直很好，小小觉得他应该也是喜欢自己的，她喝醉后他会照顾她，拍完戏累到不行的时候他会背她回家，她每天过的充实而又快乐，她好喜欢现在的生活，她希望一直像现在一样。每次接受采访，问到她与浩博是不是有不一样的关系，是不是已经在一起了，她总是笑笑，浩博跟她说对外必须说自己单身不然会影响她的发展，虽然她不在乎这些但是是浩博说的她只好答应，她觉得浩博这样做是为了保护她，十年过去，她已不再是当初刚出道的新人，手上的资源也越来越少，她想要安稳，想要浩博一直陪着她，可浩博和她在一起的时间越来越少，她对自己认为浩博也喜欢自己的想法动摇了，她问了好几次浩博喜不喜欢自己，他总是沉默或者找其他话题回避了这个问题，她想起之前一位前辈对她说的“期待所带来的满足感，最美好的，不是别人满足了自己的期待，而是我们满足了别人的期待。”“现在的我应该满足了他的期待了吧，我成为了他当初想让我成为的那种人，有了名气，可以给他带来财富，我不哭不闹，所有事情都听从他的安排，顺从他的心意，在他心里自己还有什么不好呢？”小小看着浩博想着。她觉得好累，每天不停的工作，完成他给她的每个任务，她想让自己好好休息一段时间，多一些和他相处的时间，她跟浩博说自己想休息一段时间，浩博想了想同意了，第二天她便宣布了自己将暂时退出娱乐圈，浩博送她回了家，他对她说明天带她去个地方就走了，她不知道他要带她去哪，但她相信他，她不知道他是什么时候回来的，他叫醒她的时候已经是第二天早晨了，一如既往地，他们一起吃过早餐，她跟在他身后来到一个从未来过的地方，这个地方好冷，他们一起走进去，她想要拉浩博，但他却突然跑开了，她愣在原地。一个铁制的笼子从天而降困住了她，她呆呆的望着浩博那张冷漠的脸，“我以为自己满足了你的期待，我以为我在你心里是不同的，我以为你起码对我是有一点喜欢的，我以为我们会一直在一起，我以为你会一直对我好的，原来，一切都只是我以为。为什么这么对我？”他冷冷地说：“因为你已经没有价值了，从一开始接近你就是为了利用你，就是为了让你给我赚钱，如果不是因为你对我来说是一笔巨大的财富，我怎么可能会去讨好你，说到底还是你太天真了，我说什么你都信。”小小现在才明白当初父母不让她上岸说的话，“你一开始就知道我的身份是不是？”“对，从你上岸的那一刻我就知道了，现在是你最后能发挥的价值了，也不枉我对你费心了这么多年。”“原来十几年的陪伴我在你眼里终究抵不过钱。”看着浩博决绝的转身离开的那刻小小哭的撕心裂肺，她后悔自己当初不管不顾的上岸了。`;
const corrects = correctPinyin.split(' ');

// pinyin 包 node 版
const resultOfPinyin = pinyin(text, { segment: true });
const resultsOfPinyin = resultOfPinyin.flat();
let errorsOfPinyin = 0;

// pinyin 包 web 版
const resultOfPinyinWeb = pinyin(text);
const resultsOfPinyinWeb = resultOfPinyinWeb.flat();
let errorsOfPinyinWeb = 0;

// pinyin-pro 包
const resultOfPinyinPro = pinyinPro(text, { nonZh: 'consecutive' });
const resultsOfPinyinPro = resultOfPinyinPro.split(' ');
let errorsOfPinyinPro = 0;

// @napi-rs/pinyin 包
const resultOfNapiPinyin = nApiPinyin(text, {
  style: PINYIN_STYLE.WithTone,
  segment: true,
});
const resultsOfNapiPinyin = resultOfNapiPinyin;
let errorsOfNapiPinyin = 0;

corrects.forEach((item, i) => {
  if (item !== resultsOfPinyin[i]) {
    errorsOfPinyin++;
  }
  if (item !== resultsOfPinyinWeb[i]) {
    errorsOfPinyinWeb++;
  }
  if (item !== resultsOfPinyinPro[i]) {
    console.log(corrects.slice(i - 3, i + 3).join(' '));
    errorsOfPinyinPro++;
  }
  if (item !== resultsOfNapiPinyin[i]) {
    errorsOfNapiPinyin++;
  }
});

console.log(
  'pinyin(Node版)准确率:',
  (1 - errorsOfPinyin / corrects.length) * 100 + '%'
);

console.log(
  'pinyin(Web版)准确率:',
  (1 - errorsOfPinyinWeb / corrects.length) * 100 + '%'
);

console.log(
  'pinyin-pro 准确率:',
  (1 - errorsOfPinyinPro / corrects.length) * 100 + '%'
);

console.log(
  '@napi-rs/pinyin 准确率:',
  (1 - errorsOfNapiPinyin / corrects.length) * 100 + '%'
);
