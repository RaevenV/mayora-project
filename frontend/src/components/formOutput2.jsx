import React from "react";
import OutputTB2 from "./outputTB2.jsx";
import "./formOutput2.css";
import NextButton from "./nextButton";
import AutoOutputTB from "./autoOutputTB.jsx";

function FormOutput2() {
  return (
    <>
      <div className="form-wrapper2">
        <AutoOutputTB title="SKU Packaging" />
        <AutoOutputTB title="Jenis Packaging" />
        <OutputTB2 title="Print Coding" />
        <AutoOutputTB title="Kodifikasi" />
      </div>
      <NextButton text="<<Back" link="/showDataQC" />
    </>
  );
}

export default FormOutput2;
