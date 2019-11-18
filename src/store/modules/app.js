const state = {
    lang: 'zh'
}

const mutations = {
    SETLANG(state, lang) {
        state.lang = lang
    }
}

const actions = {
    setLang({ commit }, lang) {
        commit('SETLANG',lang)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
