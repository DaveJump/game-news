// pages/games/components/game-item/index.js
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
    navigateToDetail() {
      wx.navigateTo({
        url: `/pages/detail/index?id=${this.properties.item.id}&type=game`
      })
    }
  }
})
