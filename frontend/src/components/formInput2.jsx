import React from "react";
import InputTB from "./inputTB.jsx";
import InputTB2 from "./inputTB2.jsx";
import "./formInput2.css";
import NextButton from "./nextButton";
import AutoTB from "./autoTB.jsx";

function FormInput2() {
  return (
    <>
      <div className="form-wrapper2">
        <InputTB title="Primary Packaging" placeholder="" />
        <AutoTB title="Kode Packaging 1" />
        <InputTB title="Secondary Packaging" placeholder="" />
        <AutoTB title="Kode Packaging 2" />

        <InputTB title="Tersier Packaging" />
        <AutoTB title="Kode Packaging 3" />
        <InputTB2 title="Production Type" />
        <InputTB title="Kodifikasi*" />
      </div>
      <NextButton text="Next>>"  link="/showdata" />
    </>
  );
}

export default FormInput2;
