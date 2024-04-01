import React from "react";
import "./navQCPPIC.css";
import { Link } from "react-router-dom";

function NavQC(props) {
  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <img className="prod-img" src={props.imgsrc} alt="" />
          <div className="role">{props.role}</div>
          <Link className="prod-link2" to={props.link}>
            <h4 className="prod-text">View Data</h4>
          </Link>
          <Link className="prod-link2" to="/">
            <h4 className="prod-text">Choose Role</h4>
          </Link>
        </div>
      </div>
    </>
  );
}


export default NavQC;
