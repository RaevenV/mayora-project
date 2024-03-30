import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import ShowData from "./pages/showData/showData";
import ViewDetail from "./pages/viewDetail/viewDetail";
import InputPage from "./pages/inputPage/inputPage";
import { productInputs } from "./formSource";
import ShowDataQC from "./pages/showData/showDataQC";
import ShowDataPPIC from "./pages/showData/showDataPPIC";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/inputPage"
            exact
            element={<InputPage inputs={productInputs} />}
          />
          <Route path="/showdataQC" exact element={<ShowDataQC />} />
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
