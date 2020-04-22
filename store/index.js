import * as APIs from '../utils/endpoints';
import * as mutationTypes from '../utils/mutation-types';
import { getAccessToken } from '../utils/auth';
/**
 * initial state
 */
const state = () => ({
  users: [],
})

/**
 * initial getters
 */
const getters = {}

/**
 * initial actions
 */
const actions = {
  async nuxtServerInit({ commit, req }) {
    const { data } = await this.$axios.get(APIs.USERS) || {};
    const listUser = Array.from(Object.keys(data), k => data[k]);
    commit(mutationTypes.AUTH.SET_LIST_USER, listUser)
  },

}

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.AUTH.SET_LIST_USER](state, _users) {
    state.users = _users;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
