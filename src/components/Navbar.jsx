import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const homeFunc=()=>{
    window.location.href = "/"
  }

  return (
    <nav class="navbar" >
      <div class="container-fluid topnav">
          <Link to={""} style={{color:"white",textDecoration:"none"}}>
        <button onClick={homeFunc} className="button-71">
            Home
        </button>
          </Link>
        <h2 style={{fontFamily: 'Lobster'}} >Invent Analytics</h2>
          <Link to={"about"} style={{color:"white",textDecoration:"none"}}>
        <button className="button-71">
            About
        </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;

