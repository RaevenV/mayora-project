import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Input1 from "./components/pages/input1";
import Input2 from "./components/pages/input2";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/input1" exact element={<Input1 />} />
          <Route path="/input2" exact element={<Input2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
