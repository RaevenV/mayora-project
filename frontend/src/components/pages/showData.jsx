import React from "react";
import "./showData.css";
import DataListContainer from "../dataListContainer";
import TableHeader from "../tableHeader";
import "./input2.css";
import NavProd from "../../components2/navProduction";

function ShowData(props) {
  return (
    <>
      <div className="background">
        <NavProd/>
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

export default ShowData;
