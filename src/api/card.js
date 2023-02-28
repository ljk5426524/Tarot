import request from '@/utils/request'

export function getCardsList(data) {
  return request({
    url: '/api/v1/majorArcanaDay/list',
    method: 'post',
    data,
  })
}

export function getDaylyCard(data) {
  return request({
    url: '/api/v1/majorArcanaDay/day',
    method: 'get',
    data,
  })
}

// 每日一卡
export function getDailyCard(data) {
  return request({
    url: '/api/v1/chatDay/day',
    method: 'get',
    data,
  })
}

// 爱情占卜
export function getLoveCard(data) {
  return request({
    url: '/api/v1/chatLove/love',
    method: 'get',
    data,
  })
}
