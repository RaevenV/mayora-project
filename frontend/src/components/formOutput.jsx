import React from "react";
import "./formInput1.css";
import AutoOutputTB from "./autoOutputTB.jsx";


function FormOutput() {
  return (
    <>
      <div className="form-wrapper">
        <AutoOutputTB title="SKU"/>
        <AutoOutputTB title="Nama Produk"/>
        <AutoOutputTB title="Shelf Life"/>
        <AutoOutputTB title="Tanggal Pembuatan"/>
        <AutoOutputTB title="Line"/>
        <AutoOutputTB title="Nomor QT"/>
        <AutoOutputTB title="Buyer"/>
        
      </div>
      
    </>
  );
}

export default FormOutput;
