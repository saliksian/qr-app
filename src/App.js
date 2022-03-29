import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebar from "./components/Sidebar";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wifi from "./pages/Wifi";
import Url from "./pages/Url";
import Call from "./pages/Call";
import Mail from "./pages/Mail";
import Message from "./pages/Message";

function App() {
  return (
    <Router>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-3 g-0">
            <Sidebar />
          </div>
          <div className="col-9">
            <h1 className="text-center mt-5">QRCode Generator</h1>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/wifi" element={<Wifi />}></Route>
              <Route exact path="/url" element={<Url />}></Route>
              <Route exact path="/call" element={<Call />}></Route>
              <Route exact path="/mail" element={<Mail />}></Route>
              <Route exact path="/chat" element={<Message />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
