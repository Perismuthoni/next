import React, { useState } from "react";
import "../static/home.css";
import { Button } from "reactstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Whatsapp,
  Twitter,
  Github,
  Telephone,
  Gmail,
  Mailbox,
} from "react-bootstrap-icons";
import dp from "../images/profile.jpg";

function Home() {
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "view Less<<" : "View Resume>>";

  return (
    <>
      <div className="home">
        <div>
          <a href="https://www.linkedin.com/in/peris-muthoni-49392219b">
            <Linkedin className="linkedin" />{" "}
          </a>
          <a href="https://github.com/Perismuthoni">
            <Github className="github" />{" "}
          </a>
          <a href="https://www.facebook.com/peris.muso.7?_rdc=1&_rdr">
            <Facebook className="facebook" />{" "}
          </a>
          <a href="https://www.instagram.com/muthoni__muriuki/?hl=en">
            <Instagram className="instagram" />{" "}
          </a>
          <a href="https://twitter.com/Perismuriuki22?s=09">
            <Twitter className="twitter" />
          </a>
          <div />

          <div class="row1">
            <br />
            <br />
            <p className="hello">
              <h3>Hello!</h3>
            </p>
            <p>
              I'm muthoni muriuki a Fullstack Developer
              <br />
              specializing in web development and data science
            </p>
            <br></br>
            <img src={dp} alt="dp" className="dp" />
            <p>All that the mind believes in is possible</p>
            <br></br>
            
            <br></br>
            <button
              className="button"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h6>{linkName}</h6>
            </button>
            {readMore && (
              <div className="resume">
                <p>
                  <b>
                    <h3>
                      <center>MY RESUME</center>
                    </h3>
                  </b>
                </p>
                <br></br>

                <div className="row">
                  <div className="column1">
                    <b> PERIS MUTHONI</b>
                    <br />
                    <u>SOFTWARE DEVELOPER</u> <br />
                    Contact: +254701103297 Email:
                    <i>muthonimuriuki22@gmail.com</i> <br />
                    LinkedIn:
                    <a href="www.linkedin.com/in/peris-muthoni-49392219b ">
                      www.linkedin.com/in/peris-muthoni-49392219b{" "}
                    </a>{" "}
                    <br></br>
                    Github :{" "}
                    <a href="https://github.com/Perismuthoni">
                      Perismuthoni
                    </a>{" "}
                    <br /><br/>
                  </div>

                  <div className="column2">
                    <h4><u>OBJECTIVE</u></h4>
                    Am junior software engineer with one year experience in full stack web development,<br/>
                     data science.
                     Ability to work well with new technology both independently and in a team. 
                    <br/><br/>
                      <h4>
                        <u>EDUCATION</u>
                      </h4>
                    
                    <b>DEGREE</b>
                    <br />
                    School: KCA University
                    <br />
                    BSc in software development
                    <br />
                    Level: year 3<br></br>
                    <b>Professional certification</b>
                    <br />
                    Certified public accountant (CPA)
                    <br />
                    1. Part one (section 1&2)
                    <br />
                    2. Part two (section 3&4)
                    <br />
                  </div>
                </div>
                <br/><hr/>
                <u>
                  <h4>MY SKILLS</h4>
                </u>
                <div className="row">
                  <div className="column">
                    <ul><u>Technical Skills</u></ul>
                    <ul>• Python Flask</ul>
                    <ul>• Reactjs</ul>
                    <ul>• HTML & CSS</ul>
                    <ul>• Java programming </ul>
                    <ul>• Python Pandas</ul>
                    <ul>• SQL </ul>
                    <ul>• Github</ul>
                  </div>

                  <div className="column">
                    <ul><u>Soft Skills</u></ul>
                    <ul>•  Team work  </ul>
                    <ul>• Communication </ul>
                    <ul>• Problem Solving </ul>
                    <ul>•Teamwork </ul>
                    <ul>•Time Management </ul>
                    <ul>•Conflict Resolution  </ul>
                    <ul>•Leadership  </ul>
                  </div>
                </div>

                <br />
                <br />
                <b>
                  <h4>
                    <u>MY PROJECTS</u>
                  </h4>
                </b>
                <br></br>
                <p>
                  1. PrescribeMe(
                  <a href="https://pres-cribe-me.web.app/">
                    https://pres-cribe-me.web.app/
                  </a>
                  )<br />
                  created during a SDG challenge using Reactjs & Python API
                  <br />
                  <br />
                  2. Seedtonic web app (
                  <a href="http://seedtonic.com/home">
                    http://seedtonic.com/home
                  </a>
                  )<br />
                  build using Reactjs & Flask API
                  <br />
                  <br />
                  3. Online portfolio({" "}
                  <a href="https://muthonimuriuki.netlify.app/">
                    https://muthonimuriuki.netlify.app/
                  </a>{" "}
                  )
                </p>

                <hr />
                <p>
                  THANK YOU for viewing my resume <br></br>
                  <h5>
                    <a href="https://wa.me/0701103297">Click to Whatsapp </a>
                  </h5>
                  <br /> or <br />
                  <h5>
                    <a href="tel: +254701103297">Click here to call me</a>
                  </h5>
                </p>
                <hr />
              </div>
            )}
          </div>
        </div>
<hr/>
        <div className="software">
          <p>
            <b>
              <h3>SOFTWARE DEVELOPMENT</h3>
            </b>
          </p>
          <p>
            <b>MY SKILLS</b>
          </p>
          <div className="row">
            <div className="column">
              <ul>• Python Flask</ul>
              <ul>• Javascript</ul>
              <ul>• Reactjs</ul>
              <ul>• HTML & CSS</ul>
            </div>
            <div className="column">
              <ul>• Postgress </ul>
              <ul>• Postman skills </ul>
              <ul>• Python Pandas</ul>
            </div>
            
          </div>
        </div>
<hr/>
        <div className="accounting">
          <p>
            <b>
              <h3>ACCOUNTING</h3>
            </b>
          </p>
          <p>
            <b>MY SKILLS</b>
          </p>
          <div className="row">
            <div className="column">
              <ul>• Financial management</ul>
              <ul>• Financial reporting</ul>
              <ul>• Taxation </ul>
              <ul>• Economics </ul>
            </div>
            <div className="column">
              <ul>• Auditing</ul>
              <ul>• Commercial law </ul>
              <ul>• Marketing </ul>
              <ul>• Cost accounting</ul>
            </div>
          </div>
        </div>
<hr/>
        <div class="row">
          <div class="column">
            
              <b>
                <u>Social Media/contact</u>
              </b>
            

            <ul>
              <Facebook />
              muthoni muriuki
            </ul>
           
            <ul>
              <Linkedin /> Peris Muthoni
            </ul>
            <ul>
              <Instagram /> muthoni muriuki
            </ul>
            <ul>
              <Twitter /> Muthoni muriuki
            </ul>
            <ul>0701103297</ul>
            <ul>0734828631</ul>
          </div>
          
          <div class="column">
            <p>
              <b>
                <u>Quick LInks</u>
              </b>
            </p>

            <ul>skills</ul>
            <ul>Blogs</ul>
            <ul>resume</ul>
            <ul>skills</ul>
            <ul>
              <a href="https://wa.me/0701103297">
                <Button>
                  {" "}
                  <Whatsapp className="whatsapp" />
                </Button>{" "}
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
