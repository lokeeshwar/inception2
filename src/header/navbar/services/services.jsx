import React from "react";
import ServiceSec from "./service-section/serviceSec";
import "./services.css";
import Campus from "./campus/campus";
import College from "./college/college";
import Staffing from "./staffing/staffing";
import Bps from "./BPS/bps";

export default function Servicess() {
  return (
    <div className="service-container">
      <ServiceSec />
      <div className="service-pack">
        <Campus />
        <College />
        <Staffing />
      </div>
      <Bps />
    </div>
  );
}
