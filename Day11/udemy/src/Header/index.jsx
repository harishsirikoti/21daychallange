import React, { useState } from "react";
import "./index.scss";
import Udemylogo from "./images/Udemylogo.png";
import { FiHeart,FiBell,FiShoppingCart,FiUser} from "react-icons/fi";
import search from "./images/search.svg";

import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import Test1 from "./Test1";

export const themecontext=React.createContext();

const Header = () => {
const [theme,settheme]=useState("light");
const toggleTheme=()=>{
  settheme((curr)=>(curr==="light"?"dark":"light"));
}

  return (
    <>
      <div className={theme==="dark"?"headerdark":"header"}>
        <div className="logo">
          <Link to="/">
            <img src={Udemylogo} />
          </Link>
        </div>

        <div>
          <Link to="/Categories">Categories</Link>
        </div>

        <div className="input">
          <img className="img" src={search} />
          <input type={"search"} placeholder="Search" />
        </div>

        <div>
          <Link to="/Business">Udemy Business</Link>
        </div>

        <div>
          <Link to="/Teach">Teach on Udemy</Link>
        </div>

        <div>
          <Link to="/Mylearning">My learning</Link>
        </div>

        <div>
          <Link to="/Favourite">
            <FiHeart size={25}/>
          </Link>
        </div>

        <div>
          <Link to="/Cart">
            <FiShoppingCart size={25}/>
          </Link>
        </div>

       
          <div>
          <Link to="#">
           <FiBell size={25}/>
           </Link>
          </div>
        

        <div>
          <Link to="/Profile">
            <FiUser size={25}/>
          </Link>
        </div>
        <div>
        <ReactSwitch onChange={toggleTheme} checked={theme=="dark"} />
        </div>
      </div>
      {/* <Navbar /> */}
      <themecontext.Provider value={theme}>
        <Test1/>
      </themecontext.Provider>
    </>
  );
};

export default Header;
