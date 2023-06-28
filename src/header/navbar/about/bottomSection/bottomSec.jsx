import React from "react";
import "./bottomSec.css";
import LeftSec from "./leftSec/leftSec";
import MidSec from "./midSec/midSec";
import RightSec from "./rightSec/rightSec";

export default function BottomSec() {
  return (
    <div className="row">
        <LeftSec/>
        <MidSec/>
        <RightSec/>
    </div>
  );
}
