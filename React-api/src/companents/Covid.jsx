import React,{useState, useEffect, useRef} from 'react'

export default function Covid() {

const [country, setCountry]= useState("")
const [data, setData]= useState()
const [singleData, setSingleData]= useState()
const countryName=useRef(null)

useEffect(() => {
    fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`).then(res=>res.json()).then(data=>{
        for(let info in data){
            setSingleData(data[info])
        }
    })
}, [country])

const Submit =(e)=>{
e.preventDefault()
console.log(countryName.current.value)
setCountry(countryName.current.value)

setData(data)

}

    return (
        <div >
       <h1>Covid Information Api</h1>
       <form action="" onSubmit={Submit}>
      <input type="text"  ref={countryName} placeholder="enter country name"  />
      <button type="submit">Submit </button>
       </form>
       
      <div>
          <h3>Deaths : {singleData?.deaths}</h3>
          <h3>Confirmed : {singleData?.confirmed}</h3>
          <h3>Recovered: {singleData?.recovered}</h3>
          <h3>Date: {singleData?.updated}</h3>
      </div>
      <hr style={{width:"100%"}} />
     
        </div>
    )
}
