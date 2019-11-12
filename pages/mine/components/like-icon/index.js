// pages/mine/components/like-icon/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleLike({ detail }) {
      const isLike = detail.isLike
      const { id, title, cover, type } = this.properties.item

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
    }
  }
})
