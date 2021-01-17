import {createRequestClient} from '~/store/request-client';

export const state = () => ({
    items: [],
    relatedItems: [],
    item: {},
    meta: {},
    searchItems: [],
    searchMeta: {},
})

export const actions = {
    async fetchPopularVideos({commit}, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri, payload.params)
        commit('mutatePopularVideos', res)
    },

    async findVideo({commit}, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri)
        const params = {
            ...res.video_list,
        }
        commit('mutateVideo', params)
    },

    async fetchRelatedVideos({commit}, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri)
        commit('mutateRelatedVideos', res)
    },

    async searchVideos({commit}, payload) {
        const client = createRequestClient(this.$axios)
        const res = await client.get(payload.uri, payload.params)
        commit('mutateSearchVideos', res)
    },
}

export const mutations = {
    mutatePopularVideos(state, payload) {
        state.items = payload.items ? state.items.concat(payload.items) : []
        state.meta = payload
    },

    mutateVideo(state, payload) {
        const params = (payload.items && payload.items.length > 0) ? payload.items[0] : {}
        state.item = params
    },

    mutateRelatedVideos(state, payload) {
        state.relatedItems = payload.items || []
    },

    mutateSearchVideos(state, payload) {
        state.searchItems = payload.items ? state.searchItems.concat(payload.items) : []
        state.searchMeta = payload
    },
}

export const getters = {
    getPopularVideos(state) {
        return state.items
    },

    getMeta(state) {
        return state.meta
    },

    getVideo(state) {
        return state.item
    },

    getRelatedVideos(state) {
        return state.relatedItems
    },

    getSearchVideos(state) {
        return state.searchItems
    },

    getSearchMeta(state) {
        return state.searchMeta
    },
}