import MockingData from './mock'
import { gameList } from './games'
import { hotList } from './hot'

export const musics = hotList.filter(item => item.type === 'music')

// 获取游戏或音乐详情
async function getDetail(params) {
  const { id, type } = params
  const list = type === 'music' ? musics : gameList

  try {
    const data = await new MockingData(
      `/${type === 'music' ? 'musics' : 'games'}/:${id}/detail`,
      list.find(item => +item.id === +id)
    ).request()

    return data
  } catch (e) {
    console.error(e)
  }
}

const detail = {
  getDetail
}

export default detail