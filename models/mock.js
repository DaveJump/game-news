import Mock from '../lib/wxmock'

export default class MockingData {
  constructor(url, data = {}, method = 'get') {
    this.url = getApp().globalConfig.apiPrefix + url.replace(/^\/+/, '')
    this.data = data
    this.method = method
    this.bindMock()
  }
  bindMock() {
    Mock.mock(this.url, {
      code: 200,
      data: this.data
    })
  }
  async request() {
    const method = wx.$service[this.method]
    try {
      if (method) {
        const { data } = await method.call(wx.$service, this.url)
        return data
      } else {
        const { data } = await wx.$service.fetch.call(wx.$service, this.method, this.url)
        return data
      }
    } catch (e) {
      console.error(e)
    }
  }
}
