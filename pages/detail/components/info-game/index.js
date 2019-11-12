import likeBehavior from '../../behaviors/like'

Component({
  behaviors: [likeBehavior],

  properties: {
    detail: {
      type: Object,
      value: {},
      observer(val) {
        this.setData({
          likeNum: val.like || 0
        })
        this.setLikes()
        this.getCommentsByGameId()
      }
    }
  },

  data: {
    detailType: 'game',
    comments: []
  },

  methods: {
    async getCommentsByGameId() {
      const {
        id
      } = this.properties.detail

      if (id) {
        const comments = await wx.$api.comments.getCommentsByGameId({
          id
        })
        this.setData({
          comments
        })
      }
    }
  }
})