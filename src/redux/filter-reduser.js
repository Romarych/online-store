const SET_FILTER = 'books/SET_FILTER'
const SET_SEARCH_QUERY = 'books/SET_SEARCH_QUERY'

const initialState = {
    searchQuery: '',
    filterBy: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: payload,
            }
        case SET_FILTER:
            return {
                ...state,
                filterBy: payload,
            }
        default:
            return state
    }
}

export const setSearchQuery = (payload) => ({
    type: SET_SEARCH_QUERY,
    payload
})

export const setFilter = (payload) => ({
    type: SET_FILTER,
    payload
})

