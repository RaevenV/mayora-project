import React from "react";
import "./viewDetail.css";
import FormOutput2 from "../formOutput2";
import FormOutput from "../formOutput";
import { useLocation } from "react-router-dom";

function ViewDetail() {
  return (
    <div className="background-container3">
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
