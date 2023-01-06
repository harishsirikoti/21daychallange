import React from "react";
import { themecontext } from "./index";
import Navbar from "./Navbar/index";
import Mainbody from "../Pages/Mainbody/index";
import Profile from "../Pages/Profile";
import Categories from "../Pages/Categories";
import Business from "../Pages/Business";
import Teach from "../Pages/Teach";
import Mylearning from "../Pages/Mylearning";
import Favourite from "../Pages/Favourite";
import Cart from "../Pages/Cart";
import { Route, Routes } from "react-router";

const test1 = () => {
  return (
    <>
      <themecontext.Consumer>
        {(value) => (
          <div className={value}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Mainbody />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/Categories" element={<Categories />}/>
                <Route path="/Business" element={<Business />}/>
                <Route path="/Teach" element={<Teach />}/>
                <Route path="/Mylearning" element={<Mylearning />}/>
                <Route path="/Favourite" element={<Favourite />}/>
                <Route path="/Cart" element={<Cart />}/>
        </Routes>
          </div>
        )}
      </themecontext.Consumer>
    </>
  );
};

export default test1;
