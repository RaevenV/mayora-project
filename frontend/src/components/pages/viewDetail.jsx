import React from "react";
import "./viewDetail.css";
import FormOutput2 from "../formOutput2";
import FormOutput from "../formOutput";
import { useLocation } from "react-router-dom";
import NavQC from "../navQC";

function ViewDetail() {
  return (
    <div className="background">
      <NavQC imgsrc="images/QC.png"/>
      <div className="viewDetail-container">
        <div className="viewDetail-wrapper">
          <div className="view-title-container1">
            <div className="view-title-wrapper1">
              <div className="view-title-text1">PRODUCT DETAIL</div>
            </div>
          </div>

          <FormOutput />

          <div className="view-title-container1">
            <div className="view-title-wrapper1">
              <div className="view-title-text1">PRIMARY PACKAGING</div>
            </div>
          </div>

          <FormOutput2 />
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;
