import React from "react";
import "./input1.css";
import NextButton from "../nextButton";
import FormInput1 from "../formInput1";



function Input1() {
  return (
    <>
      <div className="background-container">
        <div className="form-container">
          <div className="form-header-text-wrapper">
            <div className="form-header-text">
              FORM MOCKUP KODIFIKASI EKSPOR
            </div>
          </div>

          <FormInput1/>
          <NextButton link="/input2" />
        </div>
      </div>
    </>
  );
}

export default Input1;
