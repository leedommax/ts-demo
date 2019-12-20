import { UPDATETEST } from '../mutation-types'
import _ from 'lodash'
let state = {
  count: 0
}

let mutations = {
  // 更新至尊宝信息
  [UPDATETEST] (state, obj) {
    _.merge(state, obj)
  }
}
export default {
  state,
  mutations
}
