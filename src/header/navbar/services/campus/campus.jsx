import React from "react";
import "./campus.css";
import { FaUsers } from 'react-icons/fa';


export default function Campus() {
  return (
    <div className="service-container">
      <div className="icon">
        <i className="iconfont-users"><FaUsers/></i>
      </div>
      <h4 className="service-title">
        <a href="*">Campus Placement</a>
      </h4>
      <p className="description-Text-justify">
        MyInception Tech mold the student to meet the corporate expectation and
        place them in reputed companies. We deliver technical and soft skill
        training of exceptional quality through facilitators. Our Training
        Program was designed to aid the students to meet today's Global....
        <a href=" " data-toggle='modal'>Read More</a>
      </p>
    </div>
  );
}
