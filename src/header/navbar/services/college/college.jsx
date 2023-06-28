import React from "react";
import "./college.css";
import { RiComputerLine } from 'react-icons/ri';

export default function College() {
  return (
    <div className="service-container">
      <div className="icon">
        <i className="iconfont-computer"><RiComputerLine/></i>
      </div>
      <h4 className="service-title">
        <a href="*">College Training</a>
      </h4>
      <p className="description-Text-justify">
        To be successful in today's fast growing world, it takes not only
        Training or business, but positive personal projection as well. For
        people to be very effective in any given situation, they need to have
        the appropriate personal skills along their knowledge and experience
        .....
        <a href=" " data-toggle="modal">
          Read More
        </a>
      </p>
    </div>
  );
}
