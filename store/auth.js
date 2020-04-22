import * as actionTypes from '../utils/action-types';
import { removeToken, setAccessToken, setUserName } from "../utils/auth";
import * as APIs from '../utils/endpoints';
import * as mutationTypes from '../utils/mutation-types';

/**
 * initial state
 */
const state = () => ({
    username: "",
    access_token: null,
})

/**
 * initial getters
 */
const getters = {
    isAuthenticated: (state) => {
        return !!state.access_token;
    }
}

/**
 * initial actions
 */
const actions = {
    async [actionTypes.AUTH.LOGIN]({ commit, rootState }, payload) {
        try {
            const listUser = rootState.users || [];
            const currentUser = listUser.find(item => (item.username == payload.username && item.password == payload.password));

            // if currentUser not null => user exist; else non-exist
            if (!currentUser) {
                return { success: false };
            } else {
                commit(mutationTypes.AUTH.SET_ACCOUNT, currentUser.username);
                commit(mutationTypes.AUTH.SET_ACCESS_TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ODIyOWVmLWRmZWMtNGFhMS04MzJiLWFmNWY0NzliOTg1MSIsImlhdCI6MTU4NzA1MTYzOX0.OmbkZFp0YoYsuZ8J8EP6GnOVywXD4V61_dX40gA2DJU');
            }

            return { success: true };
        } catch (err) {
            console.log('[LOGIN]', err);
            return err;
        }
    },

    async [actionTypes.AUTH.REGISTER]({ commit }, payload) {
        try {
            const { data } = await this.$axios.post(APIs.USERS, payload);
            commit(mutationTypes.AUTH.SET_ACCOUNT, payload.username);
            commit(mutationTypes.AUTH.SET_ACCESS_TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ODIyOWVmLWRmZWMtNGFhMS04MzJiLWFmNWY0NzliOTg1MSIsImlhdCI6MTU4NzA1MTYzOX0.OmbkZFp0YoYsuZ8J8EP6GnOVywXD4V61_dX40gA2DJU');
            return { success: true };
        } catch (err) {
            console.log('[REGISTER]', err);
            return err;
        }
    },

    async [actionTypes.AUTH.LOGOUT]({ commit }) {
        commit(mutationTypes.AUTH.REMOVE_TOKEN);
    },



}

/**
 * initial mutations
 */
const mutations = {
    [mutationTypes.AUTH.SET_ACCOUNT](state, _username) {
        state.username = _username;
        setUserName(_username);
    },

    [mutationTypes.AUTH.SET_ACCESS_TOKEN](state, access_token) {
        state.access_token = access_token;
        setAccessToken(access_token);
    },

    [mutationTypes.AUTH.REMOVE_TOKEN](state) {
        state.username = null;
        state.access_token = null;
        removeToken();
    },

    [mutationTypes.AUTH.SET_ACCOUNT](state, _username) {
        state.username = _username;
        setUserName(_username);
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
