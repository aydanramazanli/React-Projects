import React,{ useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addMessage} from '../redux/reducers/MessageSlice'
import { useLocation } from 'react-router';

const Main=(props)=> {
  const inputRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch()
  const chatMessages = (e) => {
      dispatch(addMessage({
          text: inputRef.current.value,
          player: location.pathname === "/" ? "player1" : "player2",
          read:false
      }))
  }

  return (
    <>

    <div className="w-96 h-96 bg-gray-300 m-auto relative rounded" >
    {props.children}
    <div className="flex  w-full justify-center absolute bottom-2">
        <input ref={inputRef}
        onKeyDown={(e) => {
          if(e.key==="Enter") {
            chatMessages();
          }
      }} 
         type="text" placeholder="type" className="py-1.5 px-3 rounded mx-2 outline-none w-[70%]"  />
        <button type="button" onClick={chatMessages} className="bg-cyan-600 py-1.5 px-5 rounded text-slate-50 font-semibold">Enter</button>
    </div>
    </div>
    </>
  )
}

export default  Main
