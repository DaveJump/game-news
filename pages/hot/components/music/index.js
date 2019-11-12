Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cover: {
      type: String
    },
    src: {
      type: String,
      value: ''
    },
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    playingBtnSrc: '/images/icon/pause.png',
    pausingBtnSrc: '/images/icon/play.png'
  },

  attached() {
    this.setMusicPlayingStateSync()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePlayMusic() {
      const { src, title } = this.properties

      if (src && title) {
        this.setData({
          playing: !this.data.playing
        })

        const { bgmm } = getApp().globalData

        if (this.data.playing) {
          if (src !== bgmm.src) {
            bgmm.title = title
            bgmm.src = src
          } else {
            bgmm.play()
          }
        } else {
          bgmm.pause()
        }
      }
    },
    setMusicPlayingStateSync() {
      const { src } = this.properties
      const { bgmm } = getApp().globalData
      
      if (bgmm.paused) {
        this.setData({
          playing: false
        })
        return
      }
      this.setData({
        playing: src === bgmm.src
      })
    }
  }
})
