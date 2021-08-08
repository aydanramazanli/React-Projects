import React from 'react'
import ReactDOM from 'react-dom'
import { allBooks } from './Books'
import { SpecificBook } from './Book'
//css
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      {allBooks.map((book, index) => {
        // const { img, title, author } = book
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  )
}

ReactDOM.render(<BookList></BookList>, document.getElementById('root'))
