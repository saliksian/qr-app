import React from "react";
import "../App.css";
import SideBarTab from "./SideBarTab.jsx";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white sidebar container-fluid">
      <div className="row">
        <div className="col-11 mt-4 ">
          <Link to="/wifi">

             <SideBarTab Text="Wifi QRCode" icon={[<i className="bi bi-wifi fs-4"></i>]}/>
          </Link>
          <Link to="/url">

          <SideBarTab Text="URL QRCode" icon={[<i className="bi bi-globe fs-4"></i>]}/>
          </Link>
          <Link to="/call">

          <SideBarTab Text="Call QRCode" icon={[<i className="bi bi-telephone fs-4"></i>]}/>
          </Link>
          <Link to="/mail">

          <SideBarTab Text="Mail QRCode" icon={[<i className="bi bi-envelope fs-4"></i>]}/>
          </Link>
          <Link to="/chat">

          <SideBarTab Text="Message QRCode" icon={[<i className="bi bi-chat-left fs-4"></i>]}/>
          </Link>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
