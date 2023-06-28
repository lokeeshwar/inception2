import React from "react";
import './bps.css'
import { FaBookOpen } from 'react-icons/fa';

export default function Bps() {
  return (
    <div className="bps-container">
      <div className="icon">
        <i className="iconfont-openbook"><FaBookOpen/></i>
      </div>
      <h4 className="service-title">
        <a href="*">BPS</a>
      </h4>
      <p className="description-Text-justify">
        In today's trend of Globalization, every other industry, be it big or
        small businesses are bound to give quality service and product to
        sustain themselves in this competitive world of businesses to earn value
        on their operational assets .....
        <a href=" " data-toggle="modal">
          Read More
        </a>
      </p>
    </div>
  );
}
