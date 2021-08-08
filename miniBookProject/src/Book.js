import React from 'react'

export const SpecificBook = ({ img, title, author }) => {
  // const { img, title, author } = props

  const clickHandler = (e) => {
    console.log(e.target)
  }
  const myAuthor = (e) => {
    alert(author)
  }

  return (
    <article className='book'>
      <img src={img} /> <h2> {title} </h2> <h4> {author} </h4>
      <button type='button' onClick={clickHandler}>
        console.log - target
      </button>
      <button type='button' onClick={myAuthor}>
        see author
      </button>
    </article>
  )
}
