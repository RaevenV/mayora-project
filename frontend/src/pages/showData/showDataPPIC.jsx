import React from "react";
import "./showData.css";
import DataListContainerPPIC from "../../components/dataListContainerPPIC";
import TableHeader from "../../components/tableHeader";
import NavQC from "../../components2/navbar/navQC";

function ShowDataPPIC(props) {
  return (
    <>
      <div className="background">
        <NavQC imgsrc="images/PPIC.png" role="PPIC" link="/showdataPPIC" />
        <div className="showData-container">
          <div className="showData-text-container">
            <div className="showData-text-wrapper">
              <div className="showData-text">MOCKUP KODIFIKASI EKSPOR</div>
            </div>
          </div>

          <TableHeader />
          <DataListContainerPPIC />
        </div>
      </div>
    </>
  );
}

export default ShowDataPPIC;
