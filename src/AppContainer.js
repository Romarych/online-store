import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setBooks } from './redux/books-reduser'
import { setFilter, setSearchQuery} from './redux/filter-reduser'
import axios from 'axios'
import App from './App'
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy, searchQuery) => {
  books = books.filter(b => 
      b.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 || 
      b.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 
  )
  switch (filterBy) {
    case 1:
      return orderBy(books, 'price', 'desc') //'asc' по возростанию    / 'desc' по убыванию
    case 2:
      return orderBy(books, 'price', 'asc') //'asc' по возростанию    / 'desc' по убыванию
    case 3:
      return orderBy(books, 'author', 'asc') //'asc' по возростанию    / 'desc' по убыванию
    case 4:
      return orderBy(books, 'title', 'asc') //'asc' по возростанию    / 'desc' по убыванию
    default:
      return books
  }
}

const AppContainer = ({ books, setBooks, setFilter, filterBy, isReady, searchQuery, setSearchQuery }) => {
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })

    return () => {

    }
  }, [])

  return <App setSearchQuery={setSearchQuery} searchQuery={searchQuery} filterBy={filterBy} books={books} isReady={isReady} setFilter={setFilter} />
}

export default connect(({books, filter}) => ({
  books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
  filterBy: filter.filterBy,
  searchQuery: filter.searchQuery
}), { setBooks, setFilter, setSearchQuery })(AppContainer)
