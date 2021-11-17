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
     setText("ad ve sifre hack edildi")
    }
    else if (name === "Nebuchadnezzar" && password !== "12345") {
      setText("ad  hack edildi")
    } 
    else if (password === "12345" && name !=="Nebuchadnezzar") {
      setText("sifre  hack edildi")
    }
    else {
      setText("")
    }
  }, [name, password]);



  // JSX 
  return (
    <>
    <form onSubmit={submit}>
      <div className="form-group">
        <h1>{text}</h1>
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
          className="btn btn-warning form-control mt-2"
        />
      </div>
    </form>
    </>
  );
}

export default Form;
