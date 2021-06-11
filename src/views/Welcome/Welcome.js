import React from "react";
import "assets/styles/scss/views/welcomeStyle.scss";
import { useHistory } from "react-router-dom";
import sample from "assets/videos/ball.mp4";
import { useCallback, memo } from "react";

function Welcome() {
  const history = useHistory();

  const handleOnclickStart = useCallback(() => {
    history.push(`/play`);
  }, [history]);

  return (
    <div className={"welcome-container"}>
      <div className="welcome-modal-container">
        <span className="welcome-modal-title-text">
          Bạn là nhân vật nào trong "Bữa tiệc sân cỏ?
        </span>
        <span className="welcome-modal-title-sub-text">
          Hãy khám phá nhân vật của bạn trong câu chuyện của thị trấn Lawton
          nhé!?
        </span>

        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>

        <div className="button-start" onClick={handleOnclickStart}>
          Bắt đầu
        </div>
      </div>
    </div>
  );
}

export default memo(Welcome);
