import {createRequestClient} from '~/store/request-client';

export const state = () => ({
    items: [],
        meta: {},
})

export const actions = {
    async fetchPopularVideos({commit}, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri, payload.params)
        commit('mutatePopularVideos', res)
    },
}

export const mutations = {
    mutatePopularVideos(state, payload) {
        state.items = payload.items ? state.items.concat(payload.items) : []
        state.meta = payload
    },
}

export const getters = {
    getPopularVideos(state) {
        return state.items
    },
}