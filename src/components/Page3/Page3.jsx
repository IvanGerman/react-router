import React from "react";
import { NavLink } from "react-router-dom";
import "./Page3.css";

const Page3 = () => {
  return(
    <div>
      <div className="page3">Page3
        <br></br>
      <NavLink to="/page1">to Page1</NavLink>
      </div>
    </div>
  )
};

export default Page3;