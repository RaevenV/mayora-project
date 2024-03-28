import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Input1 from "./components/pages/input1";
import Input2 from "./components/pages/input2";
import ShowData from "./components/pages/showData";
import ViewDetail from "./components/pages/viewDetail";
import InputPage from "./pages/inputPage/inputPage"
import { productInputs } from "./formSource";
// import { productInputs } from "./formSource";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          {/* <Route path="product"> */}
            <Route path="/inputPage" exact element={<InputPage inputs={productInputs}/>} />
          {/* </Route> */}
          {/* <Route path="packaging">
            <Route path="/inputPage" exact element={<InputPage inputs={packagingInputs}/>} />
          </Route> */}
          <Route path="/input1" exact element={<Input1 />} />
          <Route path="/input1" exact element={<Input1 />} />
          <Route path="/input2" exact element={<Input2 />} />
          <Route path="/showdata" exact element={<ShowData />} />
          <Route path="/viewdetail" exact element={<ViewDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;