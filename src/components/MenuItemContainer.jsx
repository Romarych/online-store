import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/cart-reduser'
import MenuItem from './MenuItem'
import uniqBy from 'lodash/uniqBy';


export default connect(({cart}) => ({
  totalPrice: cart.items.reduce((total, item) => total + item.price, 0),
  count: cart.items.length,
  books: uniqBy(cart.items, b => b.id),
}), {removeFromCart})(MenuItem)
