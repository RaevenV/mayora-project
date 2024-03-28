import React, { useState } from "react";
import "./inputTB.css";

function InputTB(props) {
  const [content, setContent] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setContent(value);

    if (props.handleSKUChange) {
      props.handleSKUChange(value);
    } else if (props.handleTanggalChange) {
      props.handleTanggalChange(value);
    } else if (props.handleLineChange) {
      props.handleLineChange(value);
    } else if (props.handleQTChange) {
      props.handleQTChange(value);
    } else if (props.handleBuyerChange) {
      props.handleBuyerChange(value);
    }
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

export default InputTB;