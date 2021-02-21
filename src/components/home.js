import React from "react";
import "../static/home.css";
import { Button,Nav,NavItem, NavLink, } from 'reactstrap';
import { Facebook,Instagram,Linkedin,Whatsapp,Twitter,Github,Telephone,Gmail, Mailbox} from 'react-bootstrap-icons';
import logo from "../images/logo.jpg";
import dp from"../images/dp.png";

function Home() {
  return (
  <>
  <Nav className="nav">
      <NavItem><img className="logo" src={logo} alt="Logo" /></NavItem>
      <NavItem> <NavLink href="#">Home</NavLink></NavItem>
      <NavItem><NavLink href="#">Career</NavLink></NavItem>
      <NavItem><NavLink href="#">Contact</NavLink></NavItem>
      <NavItem><NavLink href="#">Talent</NavLink></NavItem>
      <NavItem><NavLink href="#">Blog</NavLink></NavItem>
  </Nav>
  <div>
  <a href="#"><Button><Whatsapp/></Button></a>
  <a href="#"><Button><Linkedin/></Button></a>
  <a href="#"><Button><Github/></Button></a>
  <a href="#"><Button><Facebook/></Button></a>
  <a href="#"><Button><Instagram/></Button></a>
  <a href="#"><Button><Twitter/></Button></a>
  <div/>
  <div class="row">
  <div class="column"><p><b>MUTHONI MURIUKI</b></p>
  <a href="tel:+254701103297"><Telephone/> 0701103297 </a><br/>
  <a href="mailto:someone@yoursite.com">Email Us</a>  
  <a href="mailto: muthonimuriuki22@gmail.com "> muthonimuriuki22@gmail.com </a>

  <p>All that the mind believes in is possible</p>
      <img src={dp} alt="dp" />
  </div>
  <div class="column"> 
  <br/><br/>
  <p className="hello"><h3>Hello!</h3></p>
  <p>I'm muthoni muriuki a Fullstack Developer<br/>specializing in web development and data science</p>
  </div>
</div>      
  </div>
  </>
    
  );
}

export default Home;
