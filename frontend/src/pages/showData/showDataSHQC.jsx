import React from "react";
import "./showData.css";
import TableHeader from "../../components/tableHeader";
import NavQC from "../../components2/navbar/navQC";
import DataListContainerSHQC from "../../components/dataListContainerSHQC";

function ShowDataSHQC(props) {
  return (
    <>
      <div className="background">
        <NavQC
          imgsrc="images/QC.png"
          role="SH QUALITY CONTROL"
          link="/showdataQC"
        />
        <div className="showData-container">
          <div className="showData-text-container">
            <div className="showData-text-wrapper">
              <div className="showData-text">MOCKUP KODIFIKASI EKSPOR</div>
            </div>
          </div>

          <TableHeader />
          <DataListContainerSHQC />
        </div>
      </div>
    </>
  );
}

export default ShowDataSHQC;
