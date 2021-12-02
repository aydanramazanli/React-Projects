import React from 'react'
import logo from '../Images/logo.png'
import "../Css/Footer.css";

export default function Footer() {
    return (
        <div>
            <div className="footer flex justify-between container px-10 py-7" >
                <div className="footer-img" >
                    <img src={logo} alt="logo"  />
                </div>
                <div className="copyRight">
              <h3> ©2021. All Rights Reserved</h3> 
                </div>
                <div className="github" >
                 <a href="#" className="githubLink"> Github</a>  
                </div>
            </div>
        </div>
    )
}
