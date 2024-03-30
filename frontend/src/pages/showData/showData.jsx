import React from "react";
import "./showData.css";
import DataListContainer from "../../components/dataListContainer";
import TableHeader from "../../components/tableHeader";
import NavProd from "../../components2/navbar/navProduction";

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
