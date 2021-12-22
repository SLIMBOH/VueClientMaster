import request from '@/utils/request'

export default {

  getCourseList(page,limit,searchObj) {
    return request({
      url: `/edu/front/course/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  getAllSubject() {
    return request({
      url: '/edu/subject/getAllSubject',
      method: 'get'
    })
  },
  getCourseInfo(id) {
    return request({
      url: '/edu/front/course/getFrontCourseInfo/'+id,
      method: 'get'
    })
  }

}