import react from 'react';

function Modal({closeModal,title, text}){
    return (
   
        <div className="bg-gray-100 rounded-md w-4/12 m-auto fixed p-4"
         style={{top:"30%", left:"33%"}}>
            <div >
                <h2 className="text-xl py-4 font-bold text-left">{title}</h2>
                <p className="text-sm text-left">{text}</p>
                <button onClick={()=>closeModal(false)} className=" p-2 bg-red-400 rounded-md m-6">Close Modal</button>
            </div>

     </div>
   
     )
     
    
}

export default Modal