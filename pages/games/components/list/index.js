// pages/games/components/list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    games: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async getGames() {
      const games = await wx.$api.getGames()
      this.setData({
        games
      })
    }
  }
})
