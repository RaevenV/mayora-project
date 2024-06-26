import React from "react";
import "./viewDetail.css";
import FormOutput2 from "../../components/formOutput2";
import FormOutput from "../../components/formOutput";
import NavQC from "../../components2/navbar/navQC";
import { useParams } from "react-router-dom"; 

function ViewDetail() {
  const { searchParam } = useParams();

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
              <div className="view-title-text1">PACKAGING</div>
            </div>
          </div>
          <FormOutput2 searchParam={searchParam} />
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;
