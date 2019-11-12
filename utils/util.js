export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const objectKeys2LowerCase = obj => {
  Object.keys(obj).forEach(key => {
    const lowerCasedKey = key.toLowerCase()
    const value = obj[key]
    delete obj[key]
    obj[lowerCasedKey] = value
  })
  return obj
}

export const randomRequestTimeout = Math.ceil(Math.random() * 3000)

export const setStorage = (key, data) => {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      success(res) {
        resolve(res)
      },
      fail() {
        reject()
      }
    })
  })
}

export const getStorage = key => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success(res) {
        resolve(res.data)
      },
      fail(e) {
        reject()
      }
    })
  })
}

export const removeStorage = key => {
  return new Promise((resolve, reject) => {
    wx.removeStorage({
      key,
      success(res) {
        resolve(res)
      },
      fail() {
        reject()
      }
    })
  })
}

export const getStorageInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getStorageInfo({
      success(res) {
        resolve(res)
      },
      fail() {
        reject()
      }
    })
  })
}
