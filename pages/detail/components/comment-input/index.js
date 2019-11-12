// pages/detail/components/comment-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gameId: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    comment: '',
    userInfo: null
  },

  attached() {
    this.setData({
      userInfo: getApp().globalData.userInfo
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleConfirm({ detail }) {
      const { value } = detail

      if (!this.data.userInfo) return

      if (!value.trim()) {
        wx.showToast({
          title: '内容不能为空哦',
          icon: 'none'
        })
        return
      }

      this.setData({
        comment: ''
      })

      await wx.$api.comments.setComment({
        gameId: this.properties.gameId,
        content: value,
        userInfo: this.data.userInfo
      })

      this.triggerEvent('commentset')
    }
  }
})
