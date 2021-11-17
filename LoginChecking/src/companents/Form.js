import react, { useEffect, useState,useRef } from "react";

function Form() {
  // Usestate
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const[text, setText]=useState("")
  const nameRef=useRef(null)
  const passRef= useRef(null)

  const submit = (e) => {
    e.preventDefault()
    //ref values
    const nameInput=nameRef.current.value
    const passInput= passRef.current.value

    setName(nameInput);
    setPassword(passInput);
    // save value
    console.log(nameInput.value);
    console.log(passInput.value);
  };


// UseEffect
  useEffect(() => {
   
   //contitions
    if (name === "Nebuchadnezzar" && password === "12345") {
     setText("Ad və şifrə hack olundu.")
    }
    else if (name === "Nebuchadnezzar" && password !== "12345") {
      setText("Yalnızca ad hack olundu.")
    } 
    else if (password === "12345" && name !=="Nebuchadnezzar") {
      setText("Yalnızca şifrə hack olundu.")
    }
    else {
      setText("")
    }
  }, [name, password]);



  // JSX 
  return (
    <>
    <form onSubmit={submit} >
      <div className="form-group" style={{padding:"5rem 0",width:"350px",margin:"auto"}}>
        <h1 style={{color:"white",textAlign:"center", margin:"15px 0"}}>{text}</h1>
        <input ref={nameRef} 
          type="text"
          name="name"
          className="form-control mb-4"
          placeholder="Name"
        />
       
        <input ref={passRef}
          type="password"
          name="password"
          className="form-control mb-4"
          placeholder="Password"
        />
       
        <input
          type="submit"
          value="Submit"
          className="btn btn-danger form-control mt-2"
        />
      </div>
    </form>
    </>
  );
}

export default Form;
