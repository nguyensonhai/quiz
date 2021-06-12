import React, { memo } from "react";
import "assets/styles/scss/views/loadingStyle.scss";
import sample from "assets/videos/ball.mp4";

function Loading() {
  return (
    <div className="loading-container">
      <video className="videoLoading" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
}

export default memo(Loading);
