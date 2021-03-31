import reactDom from "react-dom";
import React from "react";
import "../static/talent.css";
import { Button,Nav,NavItem, NavLink, } from 'reactstrap';
import { Instagram } from "react-bootstrap-icons";
import logo from "../images/logo.jpg";

function Talent() {
  return (
    <div className="talent">
 <Nav className="nav">
      <NavItem><img className="logo" src={logo} alt="Logo" /></NavItem>
      <NavItem> <NavLink href="#home">Home</NavLink></NavItem>
      <NavItem><NavLink href="#career">Career</NavLink></NavItem>
      <NavItem><NavLink href="/talent">Talent</NavLink></NavItem>
  </Nav>

      <p><a href="https://www.instagram.com/muthoniwritings/?hl=en">muthoniwritings <Instagram/></a></p>
     
      <article className="article">
<h2>muthoniwritings</h2>
<p> <p><a href="https://www.instagram.com/muthoniwritings/?hl=en">click here to visit my instagram handle <Instagram className="instagram" /></a></p><br></br>
  This is my article one <br></br>
 Thank you for your support<br></br>
 Whatsapp me for a customized piece
</p>
</article>
<hr></hr>

<article className="article">
<h2>muthoniwritings</h2>
<p> <p><a href="https://www.instagram.com/muthoniwritings/?hl=en">click here to visit my instagram handle <Instagram className="instagram" /></a></p><br></br>
  This is my article two <br></br>
 Thank you for your support<br></br>
 Whatsapp me for a customized piece
</p>
</article>
<hr></hr>

<article className="article">
<h2>muthoniwritings</h2>
<p> <p><a href="https://www.instagram.com/muthoniwritings/?hl=en">click here to visit my instagram handle <Instagram className="instagram" /></a></p><br></br>
  This is my article three <br></br>
 Thank you for your support<br></br>
 Whatsapp me for a customized piece
</p>
</article>
<hr></hr>

<article className="article">
<h2>muthoniwritings</h2>
<p> <p><a href="https://www.instagram.com/muthoniwritings/?hl=en">click here to visit my instagram handle <Instagram className="instagram" /></a></p><br></br>
  This is my article four <br></br>
 Thank you for your support<br></br>
 Whatsapp me for a customized piece
</p>
</article>
<hr></hr>


      <p>This page is a work in progress <br></br></p>
     
      
      
    </div>
  );
}

export default Talent;
