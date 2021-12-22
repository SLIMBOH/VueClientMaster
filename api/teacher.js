import request from '@/utils/request'

export default {
  getTeacherList(page,limit) {
    return request({
      url: `/edu/front/teacher/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  getTeacherInfo(id) {
    return request({
      url: `/edu/front/teacher/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }

}