import React,{useState}from 'react'
import ppImg from "../Images/pp-img.png"
import logo from "../Images/logo.png"
import '../Css/Navbar.css'
import { Link, NavLink} from "react-router-dom";


export default function Navbar() {
    const [location, SetLocation]= useState(null)

    return (
        <div className="fixed w-full navbar z-10">
        <div className="flex container mx-auto p-5 place-items-center justify-between " >

            <div className="navbar-left"> 
            <div className="logo" style={{width: '70%'}}>
                <NavLink to="/">
                <img src={logo} alt="" />
                </NavLink>
            </div>
           
            </div>

            <div className="navbar-right flex items-center justify-between " >
                <div className="search w-2 flex ">
                <input type="text" placeholder="Search" className="bg-color-500 border-gray-50 border-2 bg-black px-2 text-gray-100 outline-none"/>
                <i class="fas fa-search text-gray-100 text-xl px-4"></i>
             
                </div>
                <div className="prof-img flex items-center">
                    <img src={ppImg} alt="profil image" className="rounded" />
                    <i class="navbar-pic-arrow fas fa-caret-down  text-gray-50 flex items-center px-4"></i>
                </div>
                <Link to={{
                    pathname:`${location==null}`? "/registeration" : "/"

                }} className="register  text-gray-50">
                    <a href="">Register</a>
                    
                </Link>
            </div>
        </div>
        </div>
    )
}

