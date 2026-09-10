// 经公开报道核对的阅读索引；摘要与学习问题由本站整理，不是广告逐字稿。
const sourceCases = [
  {
    "id": "source-1",
    "title": "龙角散：教师节快乐，更祝你快乐",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28437",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "短片把镜头转向老师的课外生活。",
    "focus": "观察“职业称呼”怎样转向“具体的人”。"
  },
  {
    "id": "source-2",
    "title": "护舒宝：自信由我",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28438",
    "modes": [
      "tvc",
      "slogan"
    ],
    "summary": "品牌新片呈现不同年龄女性对自我的理解。",
    "focus": "一句主张怎样贯穿不同人物？"
  },
  {
    "id": "source-3",
    "title": "思加图：走着读的「外」刊",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28454",
    "modes": [
      "long",
      "slogan"
    ],
    "summary": "把鞋履传播与杂志形式结合。",
    "focus": "观察标题如何连接阅读与行走。"
  },
  {
    "id": "source-4",
    "title": "Grid Coffee：咖稻共生",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28449",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "以纪录片等内容讲述云南的咖稻共生。",
    "focus": "怎样把产地信息写成值得听的故事？"
  },
  {
    "id": "source-5",
    "title": "喜茶：小小设计师",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28433",
    "modes": [
      "slogan",
      "long"
    ],
    "summary": "品牌邀请小朋友参与设计，形成公益沟通。",
    "focus": "留意儿童表达与品牌之间的联系。"
  },
  {
    "id": "source-6",
    "title": "亚朵星球 × 邵艺辉",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/article/111325",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "阅读导演参与品牌广告的案例分析。",
    "focus": "观察导演的叙事风格怎样服务产品。"
  },
  {
    "id": "source-7",
    "title": "玛丽黛佳：坐下聊聊",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28458",
    "modes": [
      "slogan",
      "long"
    ],
    "summary": "用水边的角凳与线下艺术场景邀请交流。",
    "focus": "一句行动邀请如何变成真实体验？"
  },
  {
    "id": "source-8",
    "title": "CROCS：我惬意",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/28455",
    "modes": [
      "slogan"
    ],
    "summary": "把品牌表达延伸到上海街头的彩蛋车活动。",
    "focus": "观察情绪词怎样与穿着场景建立联系。"
  },
  {
    "id": "source-9",
    "title": "森马：亲爱的夏天",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/27534",
    "modes": [
      "tvc",
      "slogan"
    ],
    "summary": "夏日短片串联年轻人的生活场景，承接成套穿搭产品。",
    "focus": "浪漫情绪最终有没有回到衣服的利益？"
  },
  {
    "id": "source-10",
    "title": "美团：路很宽，一起跑",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/campaign/25230",
    "modes": [
      "slogan",
      "long",
      "tvc"
    ],
    "summary": "以海报和短片呈现商家、骑手与用户的视角。",
    "focus": "同一主题如何写出三种人的语言？"
  },
  {
    "id": "source-11",
    "title": "宝马：奥运实时海报",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/article/100024",
    "modes": [
      "slogan"
    ],
    "summary": "报道团队如何围绕赛事热点快速制作品牌海报。",
    "focus": "借势标题如何保持品牌自己的运动立场？"
  },
  {
    "id": "source-12",
    "title": "亨氏：卷帘门菜谱",
    "source": "广告门",
    "url": "https://www.adquan.com/article/353061",
    "modes": [
      "slogan"
    ],
    "summary": "把春节歇业餐厅的卷帘门转化为菜谱广告。",
    "focus": "媒介所在的位置，能不能替文案说明需求？"
  },
  {
    "id": "source-13",
    "title": "古茗 × 吴彦祖",
    "source": "广告门",
    "url": "https://www.adquan.com/article/353190",
    "modes": [
      "tvc",
      "slogan"
    ],
    "summary": "咖啡传播借助人物与英语课形式建立话题。",
    "focus": "观察明星特征如何连接产品信息。"
  },
  {
    "id": "source-14",
    "title": "特步：3·2·1 跑步节",
    "source": "广告门",
    "url": "https://www.adquan.com/article/352638",
    "modes": [
      "slogan",
      "tvc"
    ],
    "summary": "以跑步节为载体组织品牌传播。",
    "focus": "数字节奏怎样变成参与记忆？"
  },
  {
    "id": "source-15",
    "title": "伊利：三八节女性表达",
    "source": "广告门",
    "url": "https://www.adquan.com/article/350591",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "围绕女性称呼与共鸣展开节日广告。",
    "focus": "片中哪个具体细节支撑了女性观点？"
  },
  {
    "id": "source-16",
    "title": "东阿阿胶 × 迪士尼",
    "source": "广告门",
    "url": "https://www.adquan.com/article/352840",
    "modes": [
      "slogan",
      "tvc"
    ],
    "summary": "把传统品牌与迪士尼公主的联动带进当代语境。",
    "focus": "跨界双方如何找到共同的用户利益？"
  },
  {
    "id": "source-17",
    "title": "京东建材：好价格是大风刮来的",
    "source": "广告门",
    "url": "https://www.adquan.com/article/352956",
    "modes": [
      "tvc",
      "slogan"
    ],
    "summary": "以风的故事承接618优惠信息。",
    "focus": "抽象优惠怎样被拍成看得见的画面？"
  },
  {
    "id": "source-18",
    "title": "伊利 × 倪萍：妈妈的话",
    "source": "广告门",
    "url": "https://www.adquan.com/article/352054",
    "modes": [
      "tvc",
      "slogan",
      "long"
    ],
    "summary": "母亲节传播围绕妈妈的话与营养展开。",
    "focus": "同一个词怎样连接亲情和产品？"
  },
  {
    "id": "source-19",
    "title": "扬州文旅：敲背组曲",
    "source": "广告门",
    "url": "https://www.adquan.com/article/352024",
    "modes": [
      "tvc",
      "slogan"
    ],
    "summary": "将扬州的敲背体验转化为传播内容。",
    "focus": "地域体验怎样形成节奏和记忆？"
  },
  {
    "id": "source-20",
    "title": "小米：把这一年，展开说说",
    "source": "广告门",
    "url": "https://www.adquan.com/article/339657",
    "modes": [
      "long",
      "tvc",
      "slogan"
    ],
    "summary": "折叠屏影片将年度回忆与“展开”联系起来。",
    "focus": "产品动作如何成为整篇文案的结构？"
  },
  {
    "id": "source-21",
    "title": "诚品：0公里的诚品",
    "source": "广告门",
    "url": "https://www.adquan.com/article/305642",
    "modes": [
      "long",
      "tvc"
    ],
    "summary": "用品牌文案表达书店入驻线上平台。",
    "focus": "文学表达最后如何落到明确的商业信息？"
  },
  {
    "id": "source-22",
    "title": "半分一：品牌命名与女性人生",
    "source": "广告门",
    "url": "https://m.adquan.com/creative/detail/335316",
    "modes": [
      "long",
      "tvc"
    ],
    "summary": "案例介绍底妆品牌中文名及人物故事。",
    "focus": "一个名称如何从产品意义递进到人生意义？"
  },
  {
    "id": "source-23",
    "title": "步履不停：春季品牌文案",
    "source": "广告门",
    "url": "https://www.adquan.com/article/359498",
    "modes": [
      "long",
      "slogan"
    ],
    "summary": "文章分析女装品牌的春季短句与长文案。",
    "focus": "观察生活场景如何承接服饰，而不是只剩抒情。"
  },
  {
    "id": "source-24",
    "title": "亚朵：来日且方长",
    "source": "广告门",
    "url": "https://m.adquan.com/case2/detail-349494",
    "modes": [
      "long",
      "tvc"
    ],
    "summary": "年初传播通过故事细节展示酒店服务。",
    "focus": "服务证据怎样自然进入情绪叙事？"
  },
  {
    "id": "source-25",
    "title": "联想 × 大冰：2025开场白",
    "source": "广告门",
    "url": "https://m.adquan.com/creative/detail/349409",
    "modes": [
      "long",
      "tvc"
    ],
    "summary": "春节内容围绕回家与新年开场白展开。",
    "focus": "从一个日常话题，怎样写到品牌的角色？"
  },
  {
    "id": "source-26",
    "title": "招商银行信用卡：番茄炒蛋",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/106203",
    "modes": [
      "tvc"
    ],
    "summary": "文中收录以留学生活和家庭关系展开的经典短片。",
    "focus": "情绪转折落在哪个生活细节？（原文内查找招商银行）"
  },
  {
    "id": "source-27",
    "title": "招联金融：上台",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/106203",
    "modes": [
      "tvc"
    ],
    "summary": "同一专题介绍小镇青年逐步走上舞台的故事。",
    "focus": "四次上台如何形成叙事递进？（原文内查找上台）"
  },
  {
    "id": "source-28",
    "title": "上海农商银行：永不消逝的侠客",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/106203",
    "modes": [
      "tvc"
    ],
    "summary": "同一专题收录结合儿童视角与武侠元素的品牌微电影。",
    "focus": "梦想主题如何借类型故事变得具体？（原文内查找侠客）"
  },
  {
    "id": "source-29",
    "title": "绿箭：糖纸恋人",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/100919",
    "modes": [
      "tvc"
    ],
    "summary": "文中介绍用糖纸见证恋人关系变化的短片。",
    "focus": "产品道具如何串起时间？（原文内查找糖纸恋人）"
  },
  {
    "id": "source-30",
    "title": "汰渍 × 张艺兴：古画之谜",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/100919",
    "modes": [
      "tvc"
    ],
    "summary": "文中介绍将洗衣液功能放入解谜情节的视频广告。",
    "focus": "功能究竟推动了剧情，还是只在旁边出现？（原文内查找汰渍）"
  },
  {
    "id": "source-31",
    "title": "腾讯公益：耳朵山",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/100919",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "文中收录山区支教与留守儿童沟通心愿的故事。",
    "focus": "人物愿望如何带出公益行动？（原文内查找耳朵山）"
  },
  {
    "id": "source-32",
    "title": "腾讯音乐：冷与热",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/article/103728",
    "modes": [
      "slogan"
    ],
    "summary": "音乐榜单传播将冬季的冷与音乐的热并置。",
    "focus": "反义词如何解释产品，而非只做文字游戏？"
  },
  {
    "id": "source-33",
    "title": "华为 × Lens：手机摄影故事",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/103942",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "年度展映文章介绍以摄影为核心、个人化视角的合作影片。",
    "focus": "人物视角如何替代参数介绍？（原文内查找华为）"
  },
  {
    "id": "source-34",
    "title": "OPPO：夜拍与夜晚",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/103942",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "同一展映专题介绍围绕夜拍功能的情感化叙事。",
    "focus": "哪些夜晚细节能回到拍摄功能？（原文内查找OPPO）"
  },
  {
    "id": "source-35",
    "title": "腾讯动漫：午夜漫画店",
    "source": "SocialBeta",
    "url": "https://socialbeta.com/t/103942",
    "modes": [
      "tvc",
      "long"
    ],
    "summary": "同一专题介绍漫画店场景里的多段人物际遇。",
    "focus": "多人物故事如何汇成一个主题？（原文内查找漫画店）"
  }
];


