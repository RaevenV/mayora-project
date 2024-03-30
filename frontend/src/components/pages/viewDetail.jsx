import React from "react";
import "./viewDetail.css";
import FormOutput2 from "../formOutput2";
import FormOutput from "../formOutput";
import NavQC from "../navQC";
import { useParams } from "react-router-dom"; 
import NavProd from "../../components2/navProduction";
function ViewDetail() {
  const { searchParam } = useParams(); // Extract searchParam from the route

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

          <FormOutput searchParam={searchParam} />

          <div className="view-title-container1">
            <div className="view-title-wrapper1">
              <div className="view-title-text1">PRIMARY PACKAGING</div>
            </div>
          </div>
          <FormOutput2 searchParam={searchParam} />
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;
