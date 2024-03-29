import React from "react";
import "./input1.css";

import FormInput1 from "../formInput1";
import NavProd from "../navProduction";



function Input1() {
  return (
    <>
      <div className="background-container">
        <NavProd />
        <div className="form-container">
          <div className="form-header-text-wrapper">
            <div className="form-header-text">
              FORM MOCKUP KODIFIKASI EKSPOR
            </div>
          </div>

          <FormInput1 />
        </div>
      </div>
    </>
  );
}

export default Input1;
