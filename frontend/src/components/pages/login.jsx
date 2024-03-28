import React from "react";
import LoginSelect from "../loginSelect";
import "./login.css";


function Login() {
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="header-wrapper">
            <h1 className="login-header">Select User</h1>
          </div>
          <div className="select-wrapper">
            <LoginSelect src="images/PROD.png" text="Production" link ="/inputPage" />
            <LoginSelect src="images/QC.png" text="QC" link="/showdataQC"/>
            <LoginSelect src="images/PPIC.png" text="PPIC" link="showdataPPIC" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
