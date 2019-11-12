import {
  getStorage
} from '../../../../utils/util'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: Number,
      value: 1
    },
    hotInfo: {
      type: Object,
      value: {}
    },
    like: {
      type: Number,
      observer(val) {
        this.setData({
          likeNum: val || 0
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLike: false,
    likeNum: null
  },

  attached() {
    this.setLikes()
  },

  pageLifetimes: {
    show() {
      // 页面生命周期比组件生命周期执行早，此时 data.likeNum 依然为 null，不用担心组件渲染出来会有“喜欢”的逻辑错误
      this.checkLikeAfterSwitch()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleLike({
      detail
    }) {
      if (this.data.likeNum === null) return
      
      const isLike = detail.isLike
      const {
        id,
        title,
        cover,
        type
      } = this.properties.hotInfo

      if (id) {
        await wx.$api.setLike({
          isLike,
          id,
          type,
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
      if (this.data.likeNum === null) return
      
      const likes = await getStorage('like')
      if (likes) {
        const isLike = likes.map(item => item.id).includes(this.properties.hotInfo.id)
        this.setData({
          isLike,
          likeNum: this.data.likeNum + (isLike ? 1 : 0)
        })
      }
    },
    async checkLikeAfterSwitch() {
      const {
        likeNum: prevLikeNum,
        isLike: prevIsLike
      } = this.data

      if (prevLikeNum === null) return

      const likes = await getStorage('like')
      if (likes) {
        const isLike = likes.map(item => item.id).includes(this.properties.hotInfo.id)
        this.setData({
          isLike
        })
        // 判断前后是不是一样喜欢，不是则移除或增加，是则不动
        if (prevIsLike === isLike) return
        this.setData({
          likeNum: this.data.likeNum + (isLike ? 1 : -1)
        })
      }
    }
  }
})