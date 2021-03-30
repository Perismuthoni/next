import reactDom from "react-dom";
import React from "react";
import { Link } from "react-router-dom";
import "../static/resume.css";
import { Whatsapp } from "react-bootstrap-icons";

function Resume() {
  return (
    <div className="resume">
        <div className="row">
        <a href="/home"><button className="buttonh" >HOME</button></a>
        <br></br>
        <p><b><h3><center>MY RESUME</center></h3></b></p>
         <br></br>
        </div>
     <div className="row">
        
       <div className="column1">
      
      <b> PERIS MUTHONI</b><br></br>
SOFTWARE DEVELOPER<br></br>
Contact:
 0701103297
Email:muthonimuriuki22@gmail.com<br></br>
LinkedIn: www.linkedin.com/in/peris-muthoni-49392219b<br></br>
Github username:
Perismuthoni<br></br>
Portfolio: https://muthonimuriuki.netlify.app/
       </div>
       <div className="column2">
       <b>OBJECTIVE</b><br></br>
To put my knowledge into practice and gain more knowledge.<br></br>
Am a self-motivated person, objective oriented, fast learner and open minded <br></br>
<b><h4><u>EDUCATION</u></h4></b><br></br>
<b>DEGREE</b><br></br>
School: KCA University<br></br>
BSc in software development<br></br>
Level: year 3<br></br>
 <b>Professional certification</b><br></br>
Certified public accountant (CPA)<br></br>
1. Part one (section 1&2)<br></br>
2. Part two (section 3&4)<br></br>

<b><u><h4>MY SKILLS</h4></u></b><br></br>
<div className="row">
    <div className="column">
    <ul>•	Python</ul>
    <ul>•	HTML & CSS</ul>
    <ul>•	Java programming </ul>
<ul>•	C++ programming </ul>
    </div>
    <div className="column">
    <ul>•	Reactjs</ul>
    <ul>•	Database management </ul>
<ul>•	Internet technology </ul>
<ul>•	System analysis</ul>
    </div>
    <div className="column">
    <ul>•	Github</ul>
    <ul>•	Networking essentials</ul>
    <ul>•Database design and development</ul>
    </div>
</div>


<b><h4><u>MY PROJECTS</u></h4></b><br></br>
1.
I have workied on project under SDG program by Andela and Facebook.<br></br>
My project is called PrescribeMe am worked in a team of three as a team lead <br></br>
https://pres-cribe-me.web.app/<br></br>
 https://github.com/BuildForSDGCohort2/Team-204-Group-A-frontend<br></br>
https://github.com/BuildForSDGCohort2/Team-204-Group-A-backend.<br></br>
<br></br>
2.
I have also created  my personal portfolio and deployed it to https://muthonimuriuki.netlify.app/<br></br>
<br></br>
3. At the moment am working on a react web application with  flask python API and postgress database<br></br>
 which is hosted at http://seedtonic.com/home
       </div>
     </div>
     <p>THANK YOU  for viewing my resume</p><br></br>
     <p><h5><a href="https://wa.me/0701103297">Whatsapp me here <Whatsapp className="whatsapp"/> </a></h5></p><br></br>
     or <br></br>
     <p><h5><a href="tel: +254701103297">click here to call me</a></h5></p>
  </div>
  );
}

export default Resume;
