import likeBehavior from '../../behaviors/like'

Component({
  behaviors: [likeBehavior],

  properties: {
    detail: {
      type: Object,
      value: {},
      observer(val) {
        wx.nextTick(() => {
          this.setData({
            likeNum: val.like
          })
          this.setLikes()
          this.selectComponent('#music').setMusicPlayingStateSync()
        })
      }
    }
  },

  data: {
    detailType: 'music'
  },

  methods: {

  }
})
