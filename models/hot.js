import MockingData from './mock'

export const hotList = [
  {
    top: 1,
    id: 513,
    type: 'game',
    like: 326,
    title: '荒野大镖客:救赎2',
    desc: '在美国庞大、细腻和无情的蛮荒大地上绽放出的生命诗篇。',
    cover: '/images/bg/rdr.jpg'
  },
  {
    top: 2,
    id: 567,
    type: 'music',
    like: 244,
    title: 'Persona5 - Life Will Change',
    desc: '神秘的怪盗团们以“令腐败的大人们洗心革面”为目的，向有罪之人发起“偷心”行动。',
    cover: '/images/bg/p5.jpg',
    music: 'http://m10.music.126.net/20191107190027/a893a6f0d2906f4a868f5f9700435975/ymusic/587b/8979/e04a/ad33ec20daf61189f64d159cd121a9f0.mp3'
  },
  {
    top: 3,
    id: 346,
    type: 'game',
    like: 182,
    title: '使命召唤:现代战争',
    desc: '震撼人心的战场和畅快淋漓的战斗，证明了本作依然是这个时代射击游戏中的佼佼者。',
    cover: '/images/bg/cod.jpg'
  },
  {
    top: 4,
    id: 673,
    type: 'game',
    like: 179,
    title: '死亡搁浅',
    desc: '这是一款小岛秀夫操刀的以末日来临前为背景的...快递模拟器？',
    cover: '/images/bg/ds.jpg'
  },
  {
    top: 5,
    id: 997,
    type: 'music',
    like: 157,
    title: 'Devil May Cry 5 - Devil Trigger',
    desc: '时隔6年，再次在疯狂中举起利刃击退恶魔吧!',
    cover: '/images/bg/dmc.jpg',
    music: 'http://m8.music.126.net/20191108195101/00534122737cbc0a82b979bd3ca1b6df/ymusic/7632/a6e2/4871/4d03929eb713f6531c45b5daf2c4fceb.mp3'
  }
]

// 热门列表
async function getHot() {
  try {
    const data = await new MockingData(
      '/hot',
      hotList
    ).request()

    return data
  } catch (e) {
    console.error(e)
  }
}

const hot = {
  getHot
}

export default hot