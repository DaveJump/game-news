import hot from './hot'
import like from './like'
import detail from './detail'
import games from './games'
import comments from './comments'

const api = {
  getHot: hot.getHot,
  setLike: like.setLike,
  getDetail: detail.getDetail,
  getGames: games.getGames,
  comments
}

export default api