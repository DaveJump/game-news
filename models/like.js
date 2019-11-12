import MockingData from './mock'
import { setStorage, getStorage, getStorageInfo } from '../utils/util'
import uniqBy from '../lib/lodash.uniqby'


// 喜欢与取消喜欢
async function setLike(params) {
  const success = 'like successful'

  try {
    const { isLike, id, title, type, cover } = params

    let { keys } = await getStorageInfo()
    let likes = []
    const like = {
      id,
      type,
      title,
      cover
    }
    const storageKey = 'like'

    if (keys.includes(storageKey)) {
      likes = await getStorage(storageKey)

      if (isLike && id) {
        likes.push(like)
        likes = uniqBy(likes, 'id')
      }
      if (!isLike && id) {
        const index = likes.findIndex(item => item.id === id)
        likes.splice(index, 1)
      }
    } else {
      if (isLike && id) {
        likes = [like]
      }
    }
    await setStorage(storageKey, likes)

    const data = await new MockingData(
      '/hot/like',
      success,
      'post'
    ).request()

    return data
  } catch (e) {
    console.error(e)
  }
}

const like = {
  setLike
}

export default like