import React from 'react'
import { Avatar, Button, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux'

const Cart = ({book, removeFromCart, addedCount}) => {
    return (
      <ListItem key={'value'} button>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${'value + 1'}`}
            src={book.image}
            style={{borderRadius: 2}}
          />
        </ListItemAvatar>
        <ListItemText primary={`${book.title}  (${addedCount}) `} />
        <Button onClick={() => removeFromCart(book.id)} color='primary'>Удалить</Button>
        <ListItemSecondaryAction >
        </ListItemSecondaryAction>
      </ListItem>
    )
}

export default Cart
