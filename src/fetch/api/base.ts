const devBaseApi:object = {
  apiUrl: 'develpopment'
}
const testBaseApi:object = {
  apiUrl: 'test'
}
const proBaseApi:object = {
  apiUrl: 'production'
}
let baseApi:object = {}
switch (process.env.NODE_ENV) {
  case 'develpopment':
    baseApi = devBaseApi
    break
  case 'test':
    baseApi = testBaseApi
    break
  case 'production':
    baseApi = proBaseApi
}
export default baseApi
