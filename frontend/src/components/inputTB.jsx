import React, { useState } from "react";
import "./inputTB.css";

function InputTB(props) {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="tb-wrapper">
        <div className="title-sym-container">
          <div className="tb-title">{props.title}</div>
          <div className="tb-sym">:</div>
        </div>
        <input
          placeholder = {props.placeholder}
          type="text"
          className="tb-input"
        />
      </div>
    </>
  );
}

export default InputTB;