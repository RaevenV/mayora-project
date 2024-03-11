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
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="tb-input"
        />
      </div>
    </>
  );
}

export default InputTB;
