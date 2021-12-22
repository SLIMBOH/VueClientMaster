import request from '@/utils/request'

export default {
  submitLoginUser(userInfo) {
    return request({
      url: `/ucenter/client/login`,
      method: 'post',
      data: userInfo
    })
  },

  getLoginUserInfo() {
    return request({
      url: `/ucenter/client/getMemberInfo`,
      method: 'get'
    })
  }

}