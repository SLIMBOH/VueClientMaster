import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/vod/video/getAuth/${vid}`,
      method: 'get'
    })
  }
}