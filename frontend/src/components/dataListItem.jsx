import React from "react";
import "./dataListItem.css";

//untuk propsnya bakal dioper SKU/ItemID
//nanti bakal implementasi search algorithm disini

//sama nanti untuk tombol detail

function DataListItem(props) {
  return (
    <>
      <div className="dataListItem-container">
        <div className="dataListItem-wrapper">
          <div className="dataList-item">323001</div>
          <div className="dataList-item">BENG BENG CHOCOLATE 12X12X22G MM</div>
          <div className="dataList-item">001</div>
          <div className="dataList-item">24/02/2024</div>
          <div className="dataList-item">1011 09036 (A-D)</div>
          <div className="dataList-item">INBISCO THAILAND</div>
          <div className="dataList-item">Detail</div>
          <div className="dataList-item">Approve</div>
        </div>
      </div>
    </>
  );
}

export default DataListItem;
