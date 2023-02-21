import request from '@/utils/request'

 export function getCardsList(data) {
    return request({
      url: '/api/v1/majorArcanaDay/list',
      method: 'post',
      data,
    })
  }