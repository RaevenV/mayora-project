import React from "react";
import InputTB from "./inputTB.jsx";
import "./formInput1.css";
import NextButton from "./nextButton";
import AutoTB from "./autoTB.jsx";

function FormInput1() {
  return (
    <>
      <div className="form-wrapper">
        <InputTB title="SKU*" placeholder="" />
        <AutoTB title="Nama Produk" />
        <AutoTB title="Shelf life" />
        <InputTB title="Tanggal Pembuatan*" placeholder="DD/MM/YY" />
        <InputTB title="Line*" />
        <InputTB title="Nomor QT*" />
        <InputTB title="Buyer*" />
      </div>
      <NextButton text="Next>>" link="/input2" />
    </>
  );
}

export default FormInput1;
