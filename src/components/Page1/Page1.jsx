import React from "react";
import { NavLink } from "react-router-dom";
import "./Page1.css";

const Page1 = () => {
  return(
    <div>
      <div className="page1">Page1
        <br></br>
        <NavLink to="/page2"><div class="navlink-div" id="navlink-div">to Page2</div></NavLink>
      </div>
    </div>
  )
};

export default Page1;