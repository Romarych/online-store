const ADD_TO_CART = 'cart/ADD_BOOK'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const SET_ADDED_COUNT = 'cart/SET_ADDED_COUNT'

const initialState = {
    count: 0,
    items: [],
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    payload
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(o => o.id != payload)
            }
        default:
            return state
    }
}

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
})

