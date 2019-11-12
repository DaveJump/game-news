import { getStorage } from '../../../../utils/util'
const app = getApp()

Component({
  properties: {

  },

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    collectionNum: 0
  },

  attatched() {
    // this.initUserInfo()
  },

  pageLifetimes: {
    async show() {
      this.getStorageLikeGames()
    }
  },

  methods: {
    initUserInfo() {
      const { userInfo } = app.globalData

      this.setData({
        userInfo: {},
        hasUserInfo: false
      })

      if (userInfo) {
        this.setData({
          userInfo: userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
    getUserInfo({ detail }) {
      const userInfo = detail.userInfo
      
      if (userInfo) {
        app.globalData.userInfo = userInfo
        this.setData({
          userInfo,
          hasUserInfo: true
        })
      }
    },
    async getStorageLikeGames() {
      const likes = await getStorage('like')
      this.setData({
        collectionNum: likes.filter(item => item.type === 'game').length
      })
    }
  }
})
