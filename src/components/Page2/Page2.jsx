import React from "react";
import { NavLink } from "react-router-dom";
import "./Page2.css";

const Page2 = () => {
  return(
    <div>
      <div className="page2">Page2
        <br></br>
      <NavLink to="/page3">to Page3</NavLink>
      </div>
    </div>
  )
};

export default Page2;