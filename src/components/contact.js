import reactDom from "react-dom";
import React from "react";
import "../static/contact.css";
import { Facebook,Instagram,Linkedin,Whatsapp,Twitter,Github,Telephone,Gmail, Mailbox} from 'react-bootstrap-icons';
function Contact() {
  return (
   <>
<div class="row">
  <div class="column">
    <p><b><u>Social Media</u></b></p>
  
    <ul><Facebook/>muthoni muriuki</ul>
    <ul><Whatsapp/> 0701103297</ul>
    <ul><Linkedin/> Peris Muthoni</ul>
    <ul><Instagram/> muthoni muriuki</ul>
    <ul><Twitter/> Muthoni muriuki</ul>

  </div>
  <div class="column"> 
  <p><b><u>Contact</u></b></p>
  
    <ul>0701103297</ul>
    <ul>0734828631</ul>
  
</div>
<div class="column"> 
  <p><b><u>Quick LInks</u></b></p>
  
    <ul>skills</ul>
    <ul>skills</ul>
    <ul>skills</ul>
    <ul>skills</ul>
  
</div>
</div>
   </>
  
  );
}

export default Contact;
