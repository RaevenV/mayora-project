import React, { useState } from "react";
import "./inputTB2.css";

function InputTB(props) {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="tb-wrapper2">
        <div className="title-sym-container2">
          <div className="tb-title2">{props.title}</div>
          <div className="tb-sym2">:</div>
        </div>
        <div className="input-wrapper2">
          <input
            placeholder={props.placeholder}
            type="text"
            className="tb-input1"
          />

          <input
            placeholder={props.placeholder}
            type="text"
            className="tb-input2"
          />
        </div>
      </div>
    </>
  );
}

export default InputTB;
