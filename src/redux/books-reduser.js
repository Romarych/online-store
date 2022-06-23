const SET_BOOKS = 'books/SET_BOOKS'
const SET_IS_READY = 'books/SET_IS_READY'
const SET_FILTER = 'books/SET_FILTER'

const initialState = {
    isReady: false,
    items: null,
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_BOOKS:
            return {
                ...state,
                items: payload,
                isReady: true
            }
        case SET_IS_READY:
            return {
                ...state,
                isReady: payload,
            }
        default:
            return state
    }
}

export const setBooks = (payload) => ({
    type: SET_BOOKS,
    payload
})



