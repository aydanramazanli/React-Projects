import React,{useRef} from 'react'



export default function Step3({onClick,setName}) {
    const name=useRef(null)
    const lastName = useRef(null)
    const email=useRef(null)
    const password = useRef(null)

    const submit=(e)=>{
        e.preventDefault()
        const data={
            name:name.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            password:password.current.value
        }
        console.log(data.name)
        const error=[]

        if(data.name.length < 4 ){
            error.push('Name length must be minimum 4 characters')
        }
        else if(data.lastName.length < 4 ){
            error.push('Lastname length must be minimum 4 characters')
        }
        else if (data.email.length === 0){
            error.push('please enter e mail ')
        }
    
        else if(data.password.length<5){
            error.push('password length must be minimum 4 characters')
        }
        if (error.length !== 0)
       alert(error);
    else {
        onClick()
        window.localStorage.setItem("data", JSON.stringify(data))
        setName(data.name)
    }

    }


    return (
        <div className=" mx-auto gap-1 flex justify-center flex-col" style={{height: '87vh', width: '370px'}}>
          <div className="header text-white">
              <span>Step 3 of 3</span>
              <h2 className="font-bold text-2xl my-1">Sign up to start your free month</h2>
              <h3 className="font-bold text-md my-0.5"> Create your Account</h3>
          </div>
          <form action="" onSubmit={submit} className="w-full flex flex-col gap-2 w-32">
              <input ref={name} type="text" placeholder="First name"  className="outline-none py-3 px-4"  />
              <input ref={lastName} type="text" placeholder="Last name" className="outline-none py-3 px-4"  />
              <input ref={email} type="email"  placeholder="email" className="outline-none py-3 px-4" />
              <input ref={password} type="password"  placeholder="Password" className="outline-none py-3 px-4" />
              <button  type="submit" className="w-full bg-red-600  py-3 my-3 text-white">Confirm</button>
          </form>
        </div>
    )
}
