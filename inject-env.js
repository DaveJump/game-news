import service from './utils/service'
import globalConfig from './config/index'
import api from './models/api'

export default function injectEnv() {
  wx.$service = service
  getApp().globalConfig = globalConfig
  wx.$api = api
}