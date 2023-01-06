import React, { useState } from "react";
import { Route, Routes } from "react-router";

import "./App.css";
import Header from "./Header/index";
import Mainbody from "./Pages/Mainbody/index";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";
import Business from "./Pages/Business";
import Teach from "./Pages/Teach";
import Mylearning from "./Pages/Mylearning";
import Favourite from "./Pages/Favourite";
import Cart from "./Pages/Cart";
import './App.scss'


function App() {
  return (
    
      <> <div >
        <Header />
      </div>
      </>
    
  );
}

export default App;
