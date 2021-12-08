// import React,{useState, useEffect, useCallback} from 'react'
// import {Link, useLocation} from 'react-router-dom'
// import "../Css/Modal.css"

// export default function Modal() {
//    const [local, setLocal] = useState(null)
//    const [status, setStatus]= useState(false)
//    const loc =useLocation()
//    const LogOut = useCallback(() => {
//     if (local !== null) {
//         return <span onClick={removeLocal} className="logout">Log Out</span>
//     }
// }, [local])
// const removeLocal = useCallback(() => {
//     window.localStorage.removeItem("data");
// }, [])

    
//    useEffect(() => {
//        const localData=JSON.parse(localStorage.getItem("data"))
//       setLocal(localData)
//    }, [loc])

//     return (
//         <div className="modal rounded" >
//             <ul className="flex flex-col text-gray-100 ">
//                 <li className="py2 px-1">
//                    <h2>`${local.name + " "+ local.lastName}`</h2>
//                 </li>
//                 <li>
//                     <Link to ="/">Add List</Link>
//                 </li>
//                 <li>
//                     <Link to ="/registeration">Log Out</Link>
//                 </li>
//             </ul>
//         </div>
//     )
// }
