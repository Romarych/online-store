import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Filter from './components/Filter'
import MenuItemContainer from './components/MenuItemContainer'
import BookCartContainer from './components/BookCartContainer'

const App = ({ books, isReady, setFilter, filterBy, searchQuery, setSearchQuery }) => {

  return (
    <>
      <MenuItemContainer />
      <Container maxWidth="lg">
        <Filter setSearchQuery={setSearchQuery} searchQuery={searchQuery} setFilter={setFilter} filterBy={filterBy} />
        <Grid container spacing={2} >

          {!isReady ? 'Загрузка...' : books.map(book => <BookCartContainer key={book.id} {...book} />)}
        </Grid>
      </Container>
    </>

  )
}

export default App