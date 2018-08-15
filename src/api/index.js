import fetch from '@/utils/fetch'

// 登陆
export function login (params) {
  return fetch.post('/server/login', params)  // username  password
}