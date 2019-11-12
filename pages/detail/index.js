Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    type: '',
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id, type } = options
    this.setData({
      id,
      type
    })
    wx.startPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    setTimeout(async () => {
      try {
        await this.getDetail()
      } catch (e) {
      } finally {
        wx.stopPullDownRefresh()
      }
    }, Math.ceil(Math.random() * 1000))
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取详情
   */
  async getDetail() {
    const { id, type } = this.data
    const detail = await wx.$api.getDetail({
      id,
      type
    })
    this.setData({
      detail: detail || {}
    })
    return detail
  }
})