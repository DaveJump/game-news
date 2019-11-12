import { getStorage } from '../../../../utils/util'

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
    likeList: []
  },

  attached() {
    // this.getLikeList()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async getLikeList() {
      let likeList = await getStorage('like')
      this.setData({
        likeList
      })
      return likeList
    }
  }
})
