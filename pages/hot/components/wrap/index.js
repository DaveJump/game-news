// pages/hot/components/wrap/index.js
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
    hotList: []
  },

  attached() {
    this.bindBgmmHandlers()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async getHot() {
      const hot = await wx.$api.getHot()
      this.setData({
        hotList: hot
      })
      return hot
    },
    bindBgmmHandlers() {
      const { bgmm } = getApp().globalData

      bgmm.onPlay(() => {
        this.syncMusicPlayingState()
      })

      bgmm.onPause(() => {
        this.syncMusicPlayingState()
      })

      bgmm.onEnded(() => {
        this.syncMusicPlayingState()
      })

      bgmm.onStop(() => {
        this.syncMusicPlayingState()
      })
    },
    syncMusicPlayingState() {
      const musicList = this.data.hotList.filter(item => item.type === 'music')
      musicList.forEach(item => {
        this.selectComponent(`#music-${item.id}`).setMusicPlayingStateSync()
      })
    }
  }
})
