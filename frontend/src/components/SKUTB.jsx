import React, { useState } from "react";
import "./inputTB.css";

function SKUTB(props) {
  const [content, setContent] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setContent(value);
    props.handleSKUChange(value);
  };

  return (
    <>
      <div className="tb-wrapper">
        <div className="title-sym-container">
          <div className="tb-title">{props.title}</div>
          <div className="tb-sym">:</div>
        </div>
        <input
          placeholder={props.placeholder}
          type="text"
          className="tb-input"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default SKUTB;
