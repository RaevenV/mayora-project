import React, { useState } from "react";
import "./autoTB.css";

function AutoTB(props) {
  const [content, setContent] = useState("");
  

  return (
    <>
      <div className="tb-wrapper">
        <div className="title-sym-container">
          <div className="tb-title">{props.title}</div>
          <div className="tb-sym">:</div>
        </div>
        <div className="auto-output">test</div>
      </div>
    </>
  );
}

export default AutoTB;
