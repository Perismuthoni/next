import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../static/home.css";
import { Button,Nav,NavItem, NavLink, } from 'reactstrap';
import { Facebook,Instagram,Linkedin,Whatsapp,Twitter,Github,Telephone,Gmail, Mailbox} from 'react-bootstrap-icons';
import logo from "../images/logo.jpg";
import dp from"../images/profile.jpg";


function Home() {
  
  return (
  <>
  <div className="home">
  <div id="home">
  <Nav className="nav">
      <NavItem><img className="logo" src={logo} alt="Logo" /></NavItem>
      <NavItem> <NavLink href="#home">Home</NavLink></NavItem>
      <NavItem><NavLink href="#career">Career</NavLink></NavItem>
      <NavItem><NavLink href="/talent">Talent</NavLink></NavItem>
      <a href="https://wa.me/0701103297"><Button> <Whatsapp className="whatsapp"/></Button> </a>
  </Nav>
  <div>
  <a href="https://www.linkedin.com/in/peris-muthoni-49392219b"><Linkedin className="linkedin"/>  </a>
  <a href="https://github.com/Perismuthoni"><Github className="github"/>  </a>
  <a href="https://www.facebook.com/peris.muso.7?_rdc=1&_rdr"><Facebook className="facebook"/>  </a>
  <a href="https://www.instagram.com/muthoni__muriuki/?hl=en"><Instagram className="instagram"/>  </a>
  <a href="https://twitter.com/Perismuriuki22?s=09"><Twitter className="twitter"/></a>
  <div/>
  
  <div class="row1">  
  <br/><br/>
  <p className="hello"><h3>Hello!</h3></p>
  <p>I'm muthoni muriuki a Fullstack Developer<br/>specializing in web development and data science</p>
   <br></br>
   <img src={dp} alt="dp" className="dp" />
  <p>All that the mind believes in is possible</p>
   <br></br>   
   <a href="muthonimuriuki22@gmail.com "> muthonimuriuki22@gmail.com </a><br></br>
   <a href="/resume"><button  className="button">VIEW RESUME</button></a>
</div>      
  </div>
  </div>
  </div>
  </>
    
  );
}

export default Home;
