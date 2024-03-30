import React from "react";
import "./showData.css";
import DataListContainer from "../../components/dataListContainer";
import TableHeader from "../../components/tableHeader";
import NavQC from "../../components2/navbar/navQC";

function ShowDataQC(props) {
  return (
    <>
      <div className="background">
        <NavQC imgsrc="images/QC.png" role="QUALITY CONTROL"/>
        <div className="showData-container">
          <div className="showData-text-container">
            <div className="showData-text-wrapper">
              <div className="showData-text">MOCKUP KODIFIKASI EKSPOR</div>
            </div>
          </div>

          <TableHeader />
          <DataListContainer />
        </div>
      </div>
    </>
  );
}

export default ShowDataQC;
