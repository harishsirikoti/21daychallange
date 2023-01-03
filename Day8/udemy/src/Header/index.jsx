import React from "react";
import "./index.scss";
import Udemylogo from "./images/Udemylogo.png";
import heart from "./images/heart.svg";
import bell from "./images/bell.svg";
import shopping from "./images/shopping-cart.svg";
import user from "./images/user.svg";
import search from "./images/search.svg";
import Navbar from "./Navbar/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/Mainbody">
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
            <img src={heart} />
          </Link>
        </div>

        <div>
          <Link to="/Cart">
            <img src={shopping} />
          </Link>
        </div>

       
          <div>
            <img src={bell} />
          </div>
        

        <div>
          <Link to="/Profile">
            <img src={user} />
          </Link>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
