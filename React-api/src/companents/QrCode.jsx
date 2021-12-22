import React,{useState, useRef, useEffect} from "react";

export default function QrCode() {
  const [input, setInput]=useState()
  const [color, setColor] =useState()
  const [data, setData]=useState("Hello world")
  const inputRef=useRef(null)
  
  useEffect(() => {
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${data}!&size=200x200!&color=${color}`)
    .then(response=>response.blob()).then(data=>setData(URL.createObjectURL(data)))

    
  }, [input, color])


  const btn =(e)=>{
    e.preventDefault()
    const inputValue=inputRef.current.value
    //console.log(inputValue)
     setInput(inputValue)
  }


  return (
    <div style={{display:"flex", flexDirection:"column", width:"30%", margin:" 50px 20px", height:"100px", justifyContent:"space-between"}}>

<img src={data} alt=""  />

<form action="" onSubmit={btn}>
<input ref={inputRef}   type="text" placeholder="typing...." />
      <div>
        <label htmlFor="red"> Red</label>
      <input type="radio" id="red" name="red"   value="red" onClick={()=>{setColor("255-0-0")}} />
      <label htmlFor="red"> Yellow</label>
      <input type="radio" id="green" name="yellow"  value="yellow" onClick={()=>{setColor("255-255-0")}} />
      <label htmlFor="red"> Green</label>
      <input type="radio" id="yellow" name="green"  value="green" onClick={()=>{setColor("0-255-0")}} />
      </div>
     
      <button >button</button>
</form>
      
    </div> 
  );
}
