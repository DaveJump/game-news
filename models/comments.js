import MockingData from './mock'
import { getStorageInfo, setStorage, getStorage } from '../utils/util'

export const commentsList = [
  {
    nickName: 'user_184227',
    time: 1573464506006,
    content: '感觉优化很好啊，我1050ti中高不怎么卡的啊！',
    avatarUrl: '/images/icon/avatar_boy.png',
    game_id: 513
  },
  {
    nickName: 'user_744523',
    time: 1573378106006,
    content: '这部游戏现在就算怎么优化也不会好哪里去了，游戏既然已经发售了 估计r星最多修复下bug稍微优化下帧数 并不会有过多针对这些的都做。',
    avatarUrl: '/images/icon/avatar_girl.png',
    game_id: 513
  }
]

// 获取游戏详情的评论
async function getCommentsByGameId({ id }) {
  try {
    let { keys } = await getStorageInfo()
    const storageKey = 'comments'
    let comments = []

    if (keys.includes(storageKey)) {
      comments = await getStorage(storageKey)
    }
    
    const data = await new MockingData(
      `/games/:${id}/comments`,
      [
        ...comments.filter(item => +item.gameId === +id),
        ...commentsList.filter(item => +item.game_id === +id)
      ]
    ).request()
    return data
  } catch (e) {
    console.error(e)
  }
}

// 评论(留言)
async function setComment({ gameId, content, userInfo }) {
  const { nickName, avatarUrl } = userInfo

  try {
    let { keys } = await getStorageInfo()
    let comments = []
    const comment = {
      gameId,
      nickName,
      avatarUrl,
      content,
      time: Date.now()
    }
    const storageKey = 'comments'

    if (keys.includes(storageKey)) {
      comments = await getStorage(storageKey)
      comments.unshift(comment)
    } else {
      comments = [comment]
    }
    await setStorage(storageKey, comments)

    const data = await new MockingData(
      `/games/:${gameId}/comments`,
      '留言成功',
      'post'
    ).request()

    return data
  } catch (e) {
    console.error(e)
  }
}

const comments = {
  getCommentsByGameId,
  setComment
}

export default comments