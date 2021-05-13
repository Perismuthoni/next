import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./components/root";
import Home from "./components/home";
import Blog from "./components/blog";
import Talent from "./components/talent";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={"/"} component={Root} />
        <Route path={"/home"} component={Home} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/talent"} component={Talent} />
      </Router>

      <div className="credits">
        <marquee>
          <b>WEBSITE BY DEV PERIS MUTHONI</b>
        </marquee>
      </div>
    </div>
  );
}

export default App;
