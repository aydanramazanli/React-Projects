import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import './App.css';
import { setName } from './redux/reducer/InputValue'

function App() {
  const name = useSelector((state)=>{
    return state.input.name
  })

const dispatch = useDispatch()
  return (
    <div className="App">
     <h1>{name}</h1>
     <input type="text" onChange={
            (e) => {
               
                    dispatch(setName(e.target.value))
                  
                
            }
        } />
    </div>
  );
}

export default App;
