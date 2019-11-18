import axios from '../axios.js'

export const getList = () => {
  return axios({
    url: '/user/list',
    method: 'get',
    params: {}
  })
}
