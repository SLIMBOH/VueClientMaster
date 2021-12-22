import request from '@/utils/request'

export default {

  // sendCode(phone) {
  //   return request({
  //     url: `/sms/send/${phone}`,
  //     method: 'get'
  //   })
  // },

  registerMember(formItem) {
    return request({
      url: `/ucenter/client/register`,
      method: 'post',
      data: formItem
    })
  }

}