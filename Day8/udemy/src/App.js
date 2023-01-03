import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter} from "react-router-dom";
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


function App() {
  return (
    
      <> 
      <BrowserRouter>
      <Header />
    
        <Routes>
                <Route path="/Mainbody" element={<Mainbody />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/Categories" element={<Categories />}/>
                <Route path="/Business" element={<Business />}/>
                <Route path="/Teach" element={<Teach />}/>
                <Route path="/Mylearning" element={<Mylearning />}/>
                <Route path="/Favourite" element={<Favourite />}/>
                <Route path="/Cart" element={<Cart />}/>
        </Routes>
       
      </BrowserRouter>
      </>
    
  );
}

export default App;
