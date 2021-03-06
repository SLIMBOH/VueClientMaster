import request from '@/utils/request'

export default {

    getPageList(page,limit,courseId) {
        return request({
        url: `/edu/comment/getCommentList/${page}/${limit}`,
        method: 'get',
        params: {courseId}
        })
    },
    addComment(comment) {
        return request({
        url: '/edu/comment/addComment',
        method: 'post',
        data: comment
        })
    }
}