import React from "react";

export default function SideBarTab(props) {
  return (
    <div>
      <div className="container Tab rounded-3 mt-3 align-items-center">
        <div className="row">
          <div className="col-1 pb-3">
              {props.icon}
          </div>
          <div className="col-1"></div>
          <div className="col-9">
            <h6 className="mt-2">{props.Text}</h6>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
