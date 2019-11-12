import { objectKeys2LowerCase } from './util'

class Service {
  fetch(method = 'get', url, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      if (!url) {
        return reject(new Error('url is required.'))
      }

      const defaultHeaders = {
        'content-type': 'application/json'
      }
      let { header = {}, dataType = 'json', responseType = 'text' } = options

      objectKeys2LowerCase(header)

      header = Object.assign(defaultHeaders, header)

      wx.request({
        method,
        url,
        data,
        header,
        dataType,
        responseType,
        success(resData, statusCode, resHeader) {
          resolve(resData)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
  
  get(url, data = {}, options = {}) {
    return this.fetch('get', url, data, options)
  }
  post(url, data = {}, options = {}) {
    return this.fetch('post', url, data, options)
  }
}

export default new Service()