import React from "react";
import "./autoTB.css";

function AutoTB(props) {
  return (
    <>
      <div className="tb-wrapper">
        <div className="title-sym-container">
          <div className="tb-title">{props.title}</div>
          <div className="tb-sym">:</div>
        </div>
        <div className="auto-output">{props.skuvalue}</div>
      </div>
    </>
  );
}

export default AutoTB;
