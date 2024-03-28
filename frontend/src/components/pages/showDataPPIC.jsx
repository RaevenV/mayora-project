import React from "react";
import "./showData.css";
import DataListContainer from "../dataListContainer";
import TableHeader from "../tableHeader";
import NavQC from "../navQC";

function ShowDataPPIC(props) {
  return (
    <>
      <div className="background-container2">
        <NavQC imgsrc="images/PPIC.png" />
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

export default ShowDataPPIC;
