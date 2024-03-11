import React from "react";
import "./loginSelect.css";
import { Link } from "react-router-dom";


function LoginSelect(props) {
  return (
    <>
        <Link to={props.link} className="select-card-wrapper">
          <img className="img-login" src={props.src} alt="" />
          <h2 className="text-login">{props.text}</h2>
        </Link>
      
    </>
  );
}

export default LoginSelect;
