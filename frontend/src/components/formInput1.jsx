import React from "react";
import InputTB from "./inputTB.jsx";
import "./formInput1.css";

function FormInput1() {
  return (
    <>
      <div className="form-wrapper">
        <InputTB title="SKU*" />
        <InputTB title="Tanggal Pembuatan" />
        <InputTB />
        <InputTB />
        <InputTB />
      </div>
    </>
  );
}

export default FormInput1;
