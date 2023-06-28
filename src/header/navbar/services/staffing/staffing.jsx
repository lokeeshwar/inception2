import React from "react";
import "./staffing.css";
import { FaUser} from 'react-icons/fa';

export default function Staffing() {
  return (
    <div className="service-container">
      <div className="icon">
        <i className="iconfont-user"><FaUser/></i>
      </div>
      <h4 className="service-title">
        <a href="*">Staffing Solutions</a>
      </h4>
      <p className="description-Text-justify">
        Recruitment is the backbone of any organization. The employee
        contributes to the establishment of any organization. Quality policy and
        the assurance of constant up gradation in work and service can never be
        fulfilled without effective and hard working and honest employees....
        <a href=" " data-toggle="modal">
          Read More
        </a>
      </p>
    </div>
  );
}
