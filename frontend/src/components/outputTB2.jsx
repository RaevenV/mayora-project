import React, { useState } from "react";

function OutputTB2(props) {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="tb-wrapper2">
        <div className="title-sym-container2">
          <div className="tb-title2">{props.title}</div>
          <div className="tb-sym2">:</div>
        </div>
        <div className="input-wrapper2">
          <div className="tb-output1">test</div>
          <div className="tb-output2">test</div>
        </div>
      </div>
    </>
  );
}

export default OutputTB2;
