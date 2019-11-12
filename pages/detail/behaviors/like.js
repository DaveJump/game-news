import { getStorage } from '../../../utils/util'

export default Behavior({
  properties: {
    
  },

  data: {
    likeNum: 0,
    isLike: false
  },

  methods: {
    async handleLike({
      detail
    }) {
      const isLike = detail.isLike
      const {
        id,
        title,
        cover
      } = this.properties.detail

      if (id) {
        await wx.$api.setLike({
          isLike,
          id,
          type: this.data.detailType,
          title,
          cover
        })
        wx.showToast({
          title: isLike ? '已喜欢' : '已取消喜欢'
        })
        this.setData({
          isLike,
          likeNum: this.data.likeNum + (isLike ? 1 : -1)
        })
      }
    },
    async setLikes() {
      const likes = await getStorage('like')
      if (likes) {
        const isLike = likes.map(item => item.id).includes(this.properties.detail.id)
        this.setData({
          isLike
        })
        this.setData({
          likeNum: this.data.likeNum + (isLike ? 1 : 0)
        })
      }
    }
  }
})