const state = {
    user: {}
}

const mutations = {
    SETUSER(state, user) {
        state.user = user
    }
}

const actions = {
    setUser({ commit }, user) {
        commit('SETUSER',user)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
