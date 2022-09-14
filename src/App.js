import React from "react";
import { FaTwitter,FaFacebookF ,FaInstagramSquare,FaPinterest,FaYoutube} from "react-icons/fa";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <BsFillArrowLeftSquareFill className="sidebar-arrow"/>
        <nav className="nav-wrapper">
          <div className="nav-title">REWALL</div>
          <ul>
            <li className="nav-btn nav-activ"><a href="#" >HOME</a></li>
            <li className="nav-btn"><a href="#">ABOUT ME</a></li>
            <li className="nav-btn"><a href="#">EDUCATION</a></li>
            <li className="nav-btn"><a href="#">SKILL</a></li>
            <li className="nav-btn"><a href="#">PROJECT</a></li>
            <li className="nav-btn"><a href="#">CONTACT</a></li>
          </ul>
        </nav>
        <div className="social-wrapper">
          <div className="social">
            <ul>
              <li><a href="#"><FaTwitter/></a></li>
              <li><a href="#"><FaFacebookF/></a></li>
              <li><a href="#"><FaInstagramSquare/></a></li>
              <li><a href="#"><FaPinterest/></a></li>
              <li><a href="#"><FaYoutube/></a></li>
            </ul>
          </div>
          <div className="desc">© 2021 Rewall Template <br/>Created by Frenify</div>
        </div>
      </div>
    </div>
  );
}

export default App;
