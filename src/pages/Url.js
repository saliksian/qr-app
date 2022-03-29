import React from "react";
import { useState } from "react";
import "../App.css";
import Qr from "../components/Qr";

export default function Url() {
  const [url, setUrl] = useState("");
  const [qrText, setQrText] = useState("");

  const UrlQr = () => {
    if (!url) {
      alert("All inputs are required!");
      return;
    }
    setQrText(url);

    setUrl("");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <label className="mt-2">Website URL/Text</label>
              <input
                type="text"
                className="w-100 form-control mt-3 style"
                placeholder="www.google.com..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary style"
              onClick={UrlQr}
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
