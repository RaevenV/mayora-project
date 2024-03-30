import React, { useState } from "react";
import "./inputPage.css";
import useFormInput from "../../hooks/useFormInput";
import NavProd from "../../components2/navbar/navProduction";

function InputPage({ inputs }) {
  const { data, handleChangeData, onSubmitForm, productInputs } =
    useFormInput();

  return (
    <div className="new">
      <NavProd />
      <div className="body-container">
        <div className="form-header-wrapper">
          <h1>FORM MOCKUP KODIFIKASI EKSPOR</h1>
        </div>
        <div className="form-container4">
          <form>
            {inputs?.map((input) => (
              <div className="form-input" key={input.id}>
                <label>{input?.label}</label>
                <div>:</div>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  value={data[input.id]}
                  onChange={(e) => handleChangeData(input.id, e.target.value)}
                />
              </div>
            ))}
            <div className="button-wrapper">
              <button onClick={onSubmitForm}>SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default InputPage;
