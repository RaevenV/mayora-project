import React from "react";
import "./dataListContainer.css";
import DataListItem from "./dataListItem";

//nanti disini bakal ambil data dari SubmittedProducts collection
//baru diallocate dan ditampilin disini


//pemanggilan propsnya bakal kita oper SKU / itemID
//baru di DataListItem bakal dicari dan ditampilin data2nya
function DataListContainer() {
  return <>
    <div className="data-list-container">
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
      <DataListItem/>
    </div>

  </>;
}

export default DataListContainer;
