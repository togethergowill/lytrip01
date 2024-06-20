import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"
class lyRequest {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT) {
    this._instance = axios.create({
      baseURL,
      timeout,
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this._instance.request(config).then(res => {
        resolve(res.data)
      }).catch(reject)
    })
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export const lyrequest =  new lyRequest()
export const localRequest = new lyRequest('https://api.map.baidu.com/reverse_geocoding/v3')
