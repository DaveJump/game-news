const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 0,
      observer(val) {
        this.setData({
          likeNum: val || 0
        })
      }
    },
    like: {
      type: Boolean,
      value: false,
      observer(val) {
        this.setData({
          isLike: val
        })
      }
    },
    showTotalLike: {
      type: Boolean,
      value: true
    },
    likeWrapStyle: {
      type: String,
      value: ''
    },
    likeIconStyle: {
      type: String,
      value: ''
    }
  },

  attached() {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isLike: false,
    likeNum: 0,
    likeSrc: '/images/icon/like_s.png',
    unlikeSrc: '/images/icon/like.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleTapLike() {
      this.setData({
        isLike: !this.data.isLike
      })
      this.triggerEvent('like', {
        isLike: this.data.isLike
      })
    }
  }
})
