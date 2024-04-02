import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowData from "./pages/showData/showData";
import ViewDetail from "./pages/viewDetail/viewDetail";
import InputPage from "./pages/inputPage/inputPage";
import { productInputs } from "./formSource";
import ShowDataUHQC from "./pages/showData/showDataUHQC";
import ShowDataSHQC from "./pages/showData/showDataSHQC";
import ShowDataPPIC from "./pages/showData/showDataPPIC";
import LoginPage from "./pages/login/loginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route
            path="/inputPage"
            exact
            element={<InputPage inputs={productInputs} />}
          />
          <Route path="/showdataUHQC" exact element={<ShowDataUHQC />} />
          <Route path="/showdataSHQC" exact element={<ShowDataSHQC />} />
          <Route path="/showdataPPIC" exact element={<ShowDataPPIC />} />
          <Route path="/showdata" exact element={<ShowData />} />
          <Route
            path="/viewDetail/:searchParam"
            exact
            element={<ViewDetail />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
