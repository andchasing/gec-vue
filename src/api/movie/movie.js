import request from '@/utils/request'

// 定义公共的api 
const BASE_URL = '/admin/system/sysMovie'

export default{
  getMovieById(id){
    return request({
      url: `${BASE_URL}/findMovieById/${id}`,
      method: 'get'
    })
  },

  addMovie(sysMovie){
    return request({
      url: `${BASE_URL}/addMovie`,
      method: 'post',
      data: sysMovie
    })
  },

  updateMovie(sysMovie){
    return request({
      url: `${BASE_URL}/updateMovie`,
      method: 'post',
      data: sysMovie
    })
  },

  removeMovieById(id){
    return request({
      url: `${BASE_URL}/removeMovie/${id}`,
      method: 'delete'
    })
  },

  getMoviePageInfo(page,limit,searchObj){
    return request({
      url:`${BASE_URL}/${page}/${limit}`,
      method: 'get',
      params:searchObj
    })
  }
}
