import React from "react";
import { FaTwitter,FaFacebookF ,FaInstagramSquare,FaPinterest,FaYoutube} from "react-icons/fa";
import { BsFillArrowLeftSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";

import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
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
        <div className="content-wrapper">
            <div className="home-wrapper">
              <div className="picture-wrapper">
                <div className="picture"></div>
              </div>
              <div className="home-title-wrapper">
                <div className="home-title">WEBSITE DEVELOPER</div>
                <p>Founder of Frenify. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
              </div>
              <BsFillArrowDownSquareFill className="home-arrow"/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
