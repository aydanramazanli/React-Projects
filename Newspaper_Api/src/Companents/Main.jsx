import React, {useState, useEffect, useRef}from 'react'
import shortid from 'shortid';


export default function Main() {
    const [data, setData]= useState()
    const [page, setPage]=useState(1)
    const [terms, setTerms]= useState()
    const nameRef= useRef(null)


useEffect(() =>{
fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${terms}&format=json&page=${page}`).then(res=>{
    return res.json()
}).then(data=>{
    setData(data)
    console.log(data)
}).catch(() => {
    alert("data yoxdur")
  })
    
},[terms,page])

const getValue=(e)=>{
    e.preventDefault()
    setTerms(nameRef.current.value)
 }

    return (
        <>
            <form action="" style={{width: '60%',margin: 'auto'}} >

                <input ref={nameRef} type="text" placeholder="enter word" />
                <button onClick={getValue}>Submit</button>
            </form>
            <div >
          <h3 style={{color:"red"}}>Title:</h3>  
    {
        data?.items.map(element=>{
            console.log(element)
            
           return <p key={shortid.generate()}>
               {element.title}

           </p> 
        })
    }   
             </div>
             <div>
        <h3 style={{color:"red"}}> Start year: </h3>   
    {
        data?.items.map(element=>{
           return <p key={shortid.generate()}>
               {element.start_year}
           </p> 
        })
    }   
             </div>
             <div>
             <h3 style={{color:"red"}}>  Publisher: </h3>      
    {
        data?.items.map(element=>{
           return <p key={shortid.generate()}>
               {element.publisher}
           </p> 
        })
    }   
             </div>
             <div>
             <h3 style={{color:"red"}}>  Country:</h3>        
    {
        data?.items.map(element=>{
           return <p key={shortid.generate()}>
               {element.country}
           </p> 
        })
    }   
             </div>
             <div>
             <h3 style={{color:"red"}}>  City:</h3>         
    {
        data?.items.map(element=>{
           return <p key={shortid.generate()}>
               {element.city}
           </p> 
        })
    }   
             </div>
        </>
    )
}
