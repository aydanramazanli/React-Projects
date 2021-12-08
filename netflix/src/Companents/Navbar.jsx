import React, { useState, useEffect, useCallback } from "react";
import ppImg from "../Images/pp-img.png";
import logo from "../Images/logo.png";
import "../Css/Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [local, setLocal] = useState(null);
  const [status, setStatus] = useState(false);
  const location = useLocation();

  const logOut = useCallback(() => {
    if (local !== null) {
      return <span onClick={remove}>Log Out</span>;
    }
  },[local]);



  const remove = useCallback(() =>{
    window.localStorage.removeItem("data");
  },[]);

  useEffect(() => {
    const locals = JSON.parse(localStorage.getItem("data"));
    setLocal(locals);
  }, [location.pathname]);

  return (
    <div className="fixed w-full navbar z-10">
      <div className="flex container mx-auto py-4 place-items-center justify-between ">
        <div className="navbar-left">
          <div className="logo" style={{ width: "70%" }}>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="navbar-right flex items-center justify-between ">
          <div className="search w-2 flex ">
            <input
              type="text"
              placeholder="Search"
              className="bg-color-500 border-gray-50 border-2 bg-black px-2 text-gray-100 outline-none"
            />
            <i class="fas fa-search text-gray-100 text-xl px-4"></i>
          </div>

          <div
            onClick={() =>
              status === false ? setStatus(true) : setStatus(false)
            }
          >
            <Link
              to={{
                pathname: `${local == null ? "/registeration" : "/"}`,
              }}
              className="text-red-600 font-bold"
            >
              <span>
                {local === null ? "Register" : null}
              </span>
            </Link>

            {local !==null ? 
            
              <div className="dropdown" > 
                <div className="prof-img flex items-center relative">
                  <img src={ppImg} alt="profil image" className="rounded" />
                  <i class="navbar-pic-arrow fas fa-caret-down  text-gray-50 flex items-center px-4"></i>
                </div>
                <div
                  className="m-modal rounded" OnClick
                  style={
                    status !== false
                      ? { display: "block" }
                : { display: "none" }
                  }
                >
                  <ul className="flex flex-col text-gray-100 ">
                    <li className="py2 px-1">
                      <h2 className="text-base">
                        {local !== null
                          ? `${local.name + " " + local.lastName}`
                          : " "}
                      </h2>
                    </li>
                    <li  className="my-2 text-base">
                      <Link to="/">Add List</Link>
                    </li>
                    <li>
                      <div className="logOut text-base" style={{cursor:"pointer"}}>{logOut()}</div>
                    </li>
                  </ul>
                </div>
              </div>

            : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
