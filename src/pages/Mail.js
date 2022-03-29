import React from "react";
import { useState } from "react";
import "../App.css";
import Qr from "../components/Qr";

export default function Mail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [qrText, setQrText] = useState("");

  const MailQR = () => {
    if (!to || !message) {
      alert("All inputs are required!");
      return;
    }

    setQrText(`MATMSG:TO:${to};SUB:${subject};BODY:${message};;`);

    setTo("");
    setSubject("");
    setMessage("");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="mb-1">
              <label className="mt-2">To</label>
              <input
                type="text"
                className="w-100 form-control mt-2 style"
                placeholder="abc@gmail.com"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              ></input>
            </div>
            <div className="mb-1">
              <label className="mt-2">Subject</label>
              <input
                type="text"
                className="w-100 form-control mt-2 style"
                placeholder="Subject of Email..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
              onClick={MailQR}
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
