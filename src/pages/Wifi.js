import React from "react";
import { useState } from "react";
import "../App.css";
import Qr from "../components/Qr";


export default function Wifi() {
  const [authentication, setAuthentication] = useState("nopass");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(false);
  const [qrText, setQrText] = useState("");

  const wifi = () => {
    if (!name || !password || authentication === "nopass") {
      alert("All inputs are required!");
      return;
    }

    setQrText(
      `WIFI:T:${authentication};S:${name};${
        authentication !== "nopass" ? `P:${password};` : ""
      }H:${hidden};`
    );

    setAuthentication("nopass");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <label className="mt-2">Authentication Type</label>
              <select
                className="form-select w-100 style"
                value={authentication}
                  onChange={(e) => setAuthentication(e.target.value)}
              >
                <option value="nopass">No Password</option>
                <option value="WEP">WEP</option>
                <option value="WPA">WPA</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="mt-2">Network Name (SSID)</label>
              <input
                type="text"
                className="w-100 form-control mt-3 style"
                placeholder="Enter Network Name (SSID)..."
                value={name}
                  onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label className="mt-2">Network Name (SSID)</label>
              <input
                type="password"
                className="w-100 form-control mt-3 style"
                placeholder="Enter Password..."
                value={password}
                  onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary style"
              onClick={wifi}
            >
              Generate
            </button>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
              <Qr QrText={qrText}></Qr>
          
          </div>
        </div>
      </div>
    </div>
  );
}
