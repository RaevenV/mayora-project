import React from "react";
import "./showData.css";
import DataListContainerUHQC from "../../components/dataListContainerUHQC";
import TableHeader from "../../components/tableHeader";
import NavQC from "../../components2/navbar/navQC";

function ShowDataUHQC() {
  return (
    <>
      <div className="background">
        <NavQC imgsrc="images/QC.png" role="UH QUALITY CONTROL" link="/showdataQC" />
        <div className="showData-container">
          <div className="showData-text-container">
            <div className="showData-text-wrapper">
              <div className="showData-text">MOCKUP KODIFIKASI EKSPOR</div>
            </div>
          </div>

          <TableHeader />
          <DataListContainerUHQC />
        </div>
      </div>
    </>
  );
}

export default ShowDataUHQC;
