import React from "react";
import "./submitButton.css";
import { Link } from "react-router-dom";

function SubmitButton(props) {
  return (
    <>
      <div className="next-button-container">
        <button type="submit" className="next-button-wrapper">
          <Link to={props.link} className="next-text">Next {">>"}</Link>
        </button>
      </div>
    </>
  );
}

export default SubmitButton;
