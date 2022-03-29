import React from "react";
import { useState } from "react";
import "../App.css";
import Qr from "../components/Qr";

export default function Message() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [qrText, setQrText] = useState("");

  const SMSQR = () => {
    if (!phoneNumber || !message) {
      alert("All inputs are required!");
      return;
    }

    setQrText(`smsto:${phoneNumber}:${message}`);

    setPhoneNumber("");
    setMessage("");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="mb-1">
              <label className="mt-2">Phone Number</label>
              <input
                type="text"
                className="w-100 form-control mt-2 style"
                placeholder="+92 123 4567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>

            <div className="mb-1">
              <label className="mt-2">Message</label>
              <textarea
                class="form-control w-100 mt-2 style"
                rows="3"
                placeholder="Type your Message Here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary style"
              onClick={SMSQR}
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
