import React from "react";
import "./index.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="mylearning" >
        <div>
          <b>Let's start learning, FuiZen</b>
        </div>
        <Link to="/Mylearning"><b>My learning</b></Link>
      </div>
      <div>
        <div className="mylearningcourse">
          <div>
            <div className="iconmylearing">
              <BsFillPlayCircleFill />
            </div>
            <span className="mylearningcourse-details">
              Course Name
              <br />
              <b>Playing Video</b>
              <br />
              <br />
              Lecture -Time
            </span>
          </div>
          <div>
            <div className="iconmylearing">
              <BsFillPlayCircleFill />
            </div>
            <span className="mylearningcourse-details">
              Course Name
              <br />
              <b>Playing Video</b>
              <br />
              <br />
              Lecture -Time
            </span>
          </div>
          <div>
            <div className="iconmylearing">
              <BsFillPlayCircleFill />
            </div>
            <span className="mylearningcourse-details">
              Course Name
              <br />
              <b>Playing Video</b>
              <br />
              <br />
              Lecture -Time
            </span>
          </div>
          <div>
            <div className="iconmylearing">
              <BsFillPlayCircleFill />
            </div>
            <span className="mylearningcourse-details">
              Course Name
              <br />
              <b>Playing Video</b>
              <br />
              <br />
              Lecture -Time
            </span>
          </div>
        </div>
        <div className="myleaningbottom">
          <div>
            <b>Training 5 or more people?</b>Get your team access to Udemy's top
            19,000+ courses
          </div>
          <div className="myleaningbottom-button">
         
              <Link to="/Business"><button>Get Udemy Business</button></Link>
            
            <a href="#">
              <button className="dismiss">Dismiss</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
