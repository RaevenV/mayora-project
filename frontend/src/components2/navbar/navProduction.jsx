import React from "react";
import "./navProduction.css";
import { Link } from "react-router-dom";

function NavProd(){
    return (
      <>
        <div className="nav-container">
          <div className="nav-wrapper">
            <img className="prod-img" src="images/PROD.png" alt="" />
            <div className="role">PRODUCTION</div>
            <Link className="prod-link" to="/inputPage">
              <h4 className="prod-text">Input Data</h4>
            </Link>
            <Link className="prod-link2" to="/showdata">
              <h4 className="prod-text">View Data</h4>
            </Link>
            <Link className="prod-link2" to="/">
              <h4 className="prod-text">Choose Role</h4>
            </Link>
          </div>
        </div>
      </>
    );
}

export default NavProd;