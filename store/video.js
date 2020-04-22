
import * as actionTypes from '../utils/action-types';
import * as APIs from '../utils/endpoints';
import * as mutationTypes from '../utils/mutation-types'

/**
 * initial state
 */
const state = () => ({
  videos: [],
})

/**
 * initial getters
 */
const getters = {}

/**
 * initial actions
 */
const actions = {
  async [actionTypes.VIDEO.GET_VIDEOS]({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(APIs.VIDEOS);
      const listVideo = Array.from(Object.keys(data), k => data[k]);
      commit(mutationTypes.VIDEO.SET_VIDEO_LIST, listVideo)
    } catch (err) {
      console.log('[GET_VIDEOS]', err);
      return err;
    }
  },

  async [actionTypes.VIDEO.SHARE]({ commit, rootState }, payload) {
    try {
      const username = rootState.auth.username || "";
      const { data } = await this.$axios.post(APIs.VIDEOS, { ...payload, username });
      return { success: true };
    } catch (err) {
      console.log('[SHARE]', err);
      return err;
    }
  },
}

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.VIDEO.SET_VIDEO_LIST](state, _list) {
    state.videos = _list;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
