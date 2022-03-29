import React from "react";
import { useState } from "react";
import "../App.css";
import Qr from "../components/Qr";

export default function Call() {
  const [qrText, setQrText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const CallQr = () => {
    if (!phoneNumber) {
      alert("All inputs are required!");
      return;
    }
    setQrText("TEL:" + phoneNumber);

    setPhoneNumber("");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <label className="mt-2">Phone Number</label>
              <input
                type="text"
                className="w-100 form-control mt-3 style"
                placeholder="+92 123 4567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary style"
              onClick={CallQr}
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
