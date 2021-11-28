import react,{useContext} from "react";
import {Link,NavLink} from 'react-router-dom';
import Dark from './Context'



function Navbar() {
  const DarkBg = useContext(Dark)
  return (
    <nav className="bg-green-500 w-full h-16 ">
      <ul className="flex justify-evenly w-full ">
        <li className="p-4">
        <input type="checkbox" onClick={(e)=>{
          DarkBg.SetDark(e.target.checked)

        }} />

        </li>
        <li className="p-4 ">
          <NavLink to="/">
            <button > Home</button>
          </NavLink>
        </li>
        <li className="p-4 ">
          <Link to={
          {  pathname:'/about',
            state: ""
          }
          }>
            <button>About</button>
          </Link>
        </li>
        <li className="p-4 ">
          <Link to="/team/John">
            <button> Team</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
