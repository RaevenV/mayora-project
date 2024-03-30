import React, { useState, useEffect } from "react";
import "./viewDetailButton.css";

function ViewDetailButton(props) {


  const handleClick = () => {
    props.onViewDetail(props.searchParam);
  };

  return (
    <div className="detailButtonContainer">
      <button onClick={handleClick} className="detailButton-wrapper">
        View Detail
      </button>
    </div>
  );
}

export default ViewDetailButton;