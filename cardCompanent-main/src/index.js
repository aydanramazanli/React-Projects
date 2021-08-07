import React from 'react'
import ReactDOM from 'react-dom'
import SingleComment from './SingileComment'
import profile1 from './image/pic1.png'
import profile2 from './image/pic2.jpg'
import profile3 from './image/pic3.jpg'
import UserCard from './UserCard'

const App = () => {
  return (
    <div className='ui comments'>
      <UserCard>
        <SingleComment
          name='Sophie'
          date='Today 5:00PM '
          text='good day'
          picture={profile1}
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name='Emilie'
          date='Today 1:00PM '
          text='bad day'
          picture={profile2}
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name='John'
          date='Today 8:00PM '
          text='amazing day'
          picture={profile3}
        />
      </UserCard>
    </div>
  )
}

ReactDOM.render(
  <App />,

  document.querySelector('#root')
)
