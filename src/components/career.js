import React from "react";
import "../static/career.css";

function Career() {
  return (
   <>
   <div className="career">
   <div className="software">
     <p><b><h3>SOFTWARE DEVELOPMENT</h3></b></p>     
     <p><b>MY SKILLS</b></p>
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
   </div>

   <div className="accounting">
     <p><b><h3>ACCOUNTING</h3></b></p>     
     <p><b>MY SKILLS</b></p>
     <div className="row">
    <div className="column">
    <ul>•	Financial management</ul>
    <ul>•	Financial reporting</ul>
    <ul>•	Taxation </ul>
<ul>•	Economics </ul>
    </div>
    <div className="column">
    <ul>•	Auditing</ul>
    <ul>•	Commercial law </ul>
<ul>•	Marketing  </ul>
<ul>•	Cost accounting</ul>
    </div>
</div>
   </div>
   </div>

        </>
  );
}

export default Career;
