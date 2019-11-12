Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: "#d81e06",
    list: [{
        pagePath: '/pages/hot/index',
        iconPath: '/images/icon/hot.png',
        selectedIconPath: '/images/icon/hot_s.png',
        name: 'hot',
        text: '热门'
      },
      {
        pagePath: '/pages/games/index',
        iconPath: '/images/icon/games.png',
        selectedIconPath: '/images/icon/games_s.png',
        name: 'games',
        text: '新游'
      },
      {
        pagePath: '/pages/mine/index',
        iconPath: '/images/icon/mine.png',
        selectedIconPath: '/images/icon/mine_s.png',
        name: 'mine',
        text: '我的'
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})