import React from 'react'
import { connect } from 'react-redux'
import Cart from './Cart';

export default connect(({cart}, {book}) => ({ // {book} пропсы из Cart
    addedCount: cart.items.reduce((count, item) => count + (item.id === book.id ? 1 : 0), 0)
  }), {})(Cart)
