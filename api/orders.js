import request from '@/utils/request'

export default {
  createOrders(courseId) {
    return request({
      url: '/purchase/order/createOrder/'+courseId,
      method: 'post'
    })
  },
  getOrdersInfo(id) {
    return request({
      url: '/purchase/order/getOrderInfo/'+id,
      method: 'get'
    })
  },

  createNatvie(orderNo) {
    return request({
      url: '/purchase/pay/createNative/'+orderNo,
      method: 'get'
    })
  },

  queryPayStatus(orderNo) {
    return request({
      url: '/purchase/pay/queryPayStatus/'+orderNo,
      method: 'get'
    })
  }
}