import React, { memo } from "react";
import "assets/styles/scss/views/loadingStyle.scss";

function Loading() {
  return (
    <div>
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Redirecting</h1>
    </div>
  );
}

export default memo(Loading);
