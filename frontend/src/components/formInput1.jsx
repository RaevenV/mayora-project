import React, { useState } from "react";
import InputTB from "./inputTB.jsx";
import "./formInput1.css";
import NextButton from "./nextButton";
import AutoTB from "./autoTB.jsx";
import SKUTB from "./SKUTB.jsx";

function FormInput1() {
  const [SKUval, setSKUval] = useState("");
  const [TanggalPembuatan, setTanggalPembuatan] = useState("");

  const handleSKUChange = (value) => {
    setSKUval(value);
  };

  return (
    <>
      <div className="form-wrapper">
        <SKUTB title="SKU*" placeholder="" handleSKUChange={handleSKUChange} />
        <AutoTB title="Nama Produk" skuvalue={SKUval} />
        <AutoTB title="Shelf life" skuvalue={SKUval} />
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
