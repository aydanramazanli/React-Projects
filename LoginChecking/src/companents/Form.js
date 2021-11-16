import react, { useEffect, useState } from "react";

function Form() {
  // Usestate
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setName(e.target["name"].value);
    setPassword(e.target["password"].value);
    // save value
    console.log(e.target["name"].value);
    console.log(e.target["password"].value);
  };


// UseEffect
  useEffect(() => {
    //variables
    let h1 = document.querySelector("h1");
    let nameHacking= document.querySelector(".nameHack")
    let passHacking= document.querySelector(".passHack")
   
   //contitions
    if (name === "Nebuchadnezzar" && password === "12345") {
      h1.innerHTML = "sifre ve name Hack olundu";
      passHacking.innerHTML=""
      nameHacking.innerHTML=""
    }
    else if (name === "Nebuchadnezzar" && password !== "12345") {
      h1.innerHTML = "";
      nameHacking.innerHTML="name hack olundu"
    } 
    else if (password === "12345" && name !=="Nebuchadnezzar") {
      h1.innerHTML = "";
      passHacking.innerHTML="password hack olundu"
    }
    else {
     h1.innerHTML=""
     passHacking.innerHTML=""
     nameHacking.innerHTML=""
    }
  }, [name, password]);



  // JSX 
  return (
    <>
    <form onSubmit={submit}>
      <div className="form-group">
        <h1></h1>
        <h3 className="nameHack"></h3>
        <h3 className="passHack"></h3>
        <input
          type="text"
          name="name"
          className="form-control mb-4"
          placeholder="Name"
        />
       
        <input
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
