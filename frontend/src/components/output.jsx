import React from "react";
import "./output.css";

function output({ title, value }) {
  return (
    <div className="fields-container">
      <div className="title">{title}</div>
      <div>:</div>
      <div className="value">{value}</div>
    </div>
  );
}

export default AutoOutputTB;
