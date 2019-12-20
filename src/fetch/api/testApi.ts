import baseApi from 'base'
import fetch from '../httpPlugin'
const testApi = {
  apiAddress: data => fetch({url:`${baseApi.apiUrl}/apiAddress`, params: data, method: 'post'})
}
export default testApi
