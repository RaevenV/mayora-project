import React, { useState } from "react";
import "./outputTB.css";

function OutputTB(props) {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="tb-wrapper">
        <div className="title-sym-container">
          <div className="tb-title">{props.title}</div>
          <div className="tb-sym">:</div>
        </div>
        <div className="tb-output"></div>
      </div>
    </>
  );
}

export default OutputTB;
