import React, {useState, useEffect, useRef,useCallback}from 'react'
import shortid from 'shortid';
import Paginations from './Pagination'


export default function Main() {
    const [data, setData]= useState()
    const [page, setPage]=useState(1)
    const [count, setCount]=useState(1)
    const [terms, setTerms]= useState()
    const nameRef= useRef(null)
    


useEffect(() =>{
if(data){
    fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${data}&format=json&page=${page}`).then(res=>{
    return res.json()
}).then(data=>{
    setTerms(data.items)
    setCount(data.totalItems/(data.endIndex - data.startIndex + 1))
    // console.log(data)
    // console.log(data.totalItems/(data.endIndex - data.startIndex + 1))
}).catch(() => {
    console.log("data yoxdur")
  })
}
    
},[data,page])


const getValue=(e)=>{
    e.preventDefault()
    setData(nameRef.current.value)
 }



    return (
        <>
      
            <form action="" style={{width: '50%',margin: '50px auto', display:"flex", justifyContent: 'center'}} >

                <input ref={nameRef} type="text" placeholder="enter newspaper title" style={{padding:'5px 10px', border:"2px solid lightgray", outline:"none"}}/>
                <button style={{margin:"0 10px", padding:"5px 10px"}} onClick={getValue}>Search</button>
            </form>
            <div >
          <h3 style={{color:"red"}}>Title:</h3>  
    {
        terms?.map(element=>{
            console.log(element)
            
           return <p key={shortid.generate()}>
               {element.title}

           </p> 
        })
    }   
             </div>
             <div >
        <h3 style={{color:"red"}}> Start year: </h3>   
    {
        terms?.map(element=>{
           return <p key={shortid.generate()}>
               {element.start_year}
           </p> 
        })
    }   
             </div>
             <div >
             <h3 style={{color:"red"}}>  Publisher: </h3>      
    {
        terms?.map(element=>{
           return <p key={shortid.generate()}>
               {element.publisher}
           </p> 
        })
    }   
             </div>
             <div >
             <h3 style={{color:"red"}}>  Country:</h3>        
    {
        terms?.map(element=>{
           return <p key={shortid.generate()}>
               {element.country}
           </p> 
        })
    }   
             </div>
             <div >
             <h3 style={{color:"red"}}>  City:</h3>         
    {
        terms?.map(element=>{
           return <p key={shortid.generate()}>
               {element.city}
           </p> 
        })
    }   
             </div>

{
    count &&

  <Paginations pageCount={count} pagination={setPage}>
            
  </Paginations> 
}
            
        </>
    )
}
