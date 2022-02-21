import React from 'react'
import { useSelector} from 'react-redux';



export default function Message() {

  const message = useSelector((state)=>state.MessageStore.messages)




  return (
      <>
      {
        message.map((m)=>{
          return (
            <div className="flex flex-col" style={m.player==="player1" ? {alignItems:"flex-end"} :null}>
              <div className= "text-slate-50 font-semibold w-1/2" >
              <h2 className={m.player==="player1" ? "bg-green-500" : 'bg-cyan-600'} style={{textAlign:'center', borderRadius:'5px', marginBottom:"10px", padding:"3px 0"}}>
              {m.text}
              </h2>
            
            </div>
            </div>
            
          )
        })
      }
      </>
  )
}
