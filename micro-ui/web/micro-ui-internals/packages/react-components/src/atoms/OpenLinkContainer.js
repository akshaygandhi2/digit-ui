import React, { useState } from "react";
import PropTypes from "prop-types";
import { NotificationBell } from "./svgindex";

const OpenLinkContainer = ({ img,}) => {
  return (
    <div className="navbar">
      <div className="center-container">
        <img
          className="city"
          id="topbar-logo" 
          crossOrigin="anonymous"
          src={"https://egov-bucket.s3.af-south-1.amazonaws.com/DATUH.jpeg"}
          alt="djibouti"
          style={{minWidth:"46px", height:"48px"}}
        />
      </div>
    </div>
  );
};

OpenLinkContainer.propTypes = {
  img: PropTypes.string,
};

OpenLinkContainer.defaultProps = {
  img: undefined,
};

export default OpenLinkContainer;