import React from 'react'
import { connect } from 'react-redux'
import BookCart from './BookCart'
import { addToCart } from '../redux/cart-reduser'



export default connect(({cart}, {id}) => ({ // {id} пропсы из BookCart
  addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0)
}), {addToCart})(BookCart)