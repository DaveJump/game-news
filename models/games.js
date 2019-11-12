import MockingData from './mock'

export const gameList = [{
    id: 513,
    like: 326,
    title: '荒野大镖客:救赎2',
    desc: '《荒野大镖客:救赎2》是一款由《GTA5》、《荒野大镖客:救赎》团队打造开发的第三人称射击游戏。本次游戏的故事地点仍将是美国无情的蛮荒地区，R星创始人Sam Houser表示制作团队倾尽全力为玩家去打造一个“真实的、栩栩如生的”世界，而且本作将会给大家带来全新的线上模式体验。',
    short: '狂野西部与亚瑟的自我救赎',
    tags: '射击 | 西部',
    cover: '/images/bg/rdr.jpg',
    info: {
      type: '第三人称射击',
      producer: 'Rockstar',
      publisher: 'Rockstar',
      platform: 'PC/PS4/XboxOne',
      publishDate: '2018-10-26(PS4/XboxOne)\n2019-11-05(PC)'
    }
  },
  {
    id: 346,
    like: 182,
    title: '使命召唤:现代战争',
    desc: '《使命召唤:现代战争》是一款由Infinity Ward制作，Activision发行的第一人称射击游戏。本作是现代战争系列的重启之作。玩家将扮演多位顶尖的特战队员，执行生死一线的绝密任务，颠覆世界大国间的微妙平衡。玩家将与不同的国际特种部队和为自由而战的斗士合作，转战于战争的灰色地带。',
    short: '老牌配方还原暴力美学',
    tags: '射击 | 战争',
    cover: '/images/bg/cod.jpg',
    info: {
      type: '第一人称射击',
      producer: 'Infinity Ward',
      publisher: 'Activision',
      platform: 'PC/PS4/XboxOne',
      publishDate: '2019-10-25'
    }
  },
  {
    id: 673,
    like: 179,
    title: '死亡搁浅',
    desc: '《死亡搁浅》是由Kojima Production制作、索尼发行的一款动作游戏，也是小岛秀夫成立新工作室后的第一部作品。游戏中的世界在经历了神秘的爆炸之后，引发了一系列超自然的事件，这些事件被称为“死亡搁浅”，导致整个地球变得面目全非。玩家将穿越在灾后的美国，尝试将支离破碎的世界重新“链接”在一起。',
    short: '用步履重构世界的希望',
    tags: '末世 | 科幻',
    cover: '/images/bg/ds.jpg',
    info: {
      type: '动作冒险',
      producer: 'Kojima Production',
      publisher: '索尼',
      platform: 'PS4/PC',
      publishDate: '2019-11-08(PS4)\n未知(PC)'
    }
  },
  {
    id: 235,
    like: 117,
    title: '怪物猎人:世界',
    desc: '《怪物猎人:世界》是由CAPCOM制作发行的一款共斗动作冒险游戏。游戏中，玩家可以武装自己完成各项任务与各类可怕的怪物们战斗，在游戏的过程中逐步提升自己的狩猎技巧。\n与前作不同，《怪物猎人:世界》有着开放的地图和更多的怪物种类，更加细腻的画质摆脱了以前“马赛克猎人”的称号。在这样的世界中，玩家化身猎人，体验真实的狩猎生活，活用新建构的世界中各种各样的地形与生态环境享受狩猎的惊喜与兴奋，并利用狩猎怪物取得的材料，制作更强的武器和防具，挑战更强大的怪物。',
    short: '历代封面怪请求出战',
    tags: '动作 | 团队',
    cover: '/images/bg/mhw.jpg',
    info: {
      type: '动作冒险',
      producer: 'CAPCOM',
      publisher: 'CAPCOM',
      platform: 'PC/XboxOne/PS4',
      publishDate: '2018-08-10(Steam)\n2018-01-26(PS4/XboxOne)'
    }
  },
  {
    id: 765,
    like: 98,
    title: '无主之地3',
    desc: '《无主之地3》故事发生在《无主之地2》5年后，之前的人气角色，比如帕特丽夏·坦尼斯以及小Tina都会回归。2代的大反派帅杰克也会回归，但是以AI的形式，而且不再是反派。之前所有游戏的武器品牌都会回归到3代游戏中，但Bandit和Sacv除外。大部分元素伤害也会回归。另外核元素类型将在3代游戏中首次亮相。《无主之地3》将让玩家探索多个星球，包括Promethea。',
    cover: '/images/bg/bdl.jpg',
    short: '秘藏猎人再次开启征程',
    tags: '射击 | 科幻',
    info: {
      type: '第一人称射击',
      producer: 'Gearbox Software',
      publisher: '2K Games',
      platform: 'PC/XboxOne/PS4',
      publishDate: '2019-09-13'
    }
  }
]

// 获取所有游戏
async function getGames() {
  try {
    const data = await new MockingData(
      `/games`,
      gameList
    ).request()

    return data
  } catch (e) {
    console.error(e)
  }
}

const games = {
  getGames
}

export default games