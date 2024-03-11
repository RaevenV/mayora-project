import React from "react";
import "./nextButton.css";
import { Link } from "react-router-dom";

function NextButton(props) {
  return (
    <>
      <div className="next-button-container">
        <Link to={props.link} className="next-button-wrapper">
          <div className="next-text">Next {">>"}</div>
        </Link>
      </div>
    </>
  );
}

export default NextButton;
