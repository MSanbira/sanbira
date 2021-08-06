import React, { useEffect, useRef } from "react";

export default function AppStartBtn(props) {
  const { finishedLoading, onStartClick } = props;

  const ball = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    if (ball && finishedLoading) {
      ball.current.classList.remove("hide");
    }
  }, [ball, finishedLoading]);

  const handleStartClick = () => {
    onStartClick();
    container.current.classList.add('expend');
  }

  return (
    <div class="loader-container app-section" ref={container}>
      <div class="ball-box">
        <div class="stopped-ball hide" ref={ball} onClick={handleStartClick}/>
      </div>
    </div>
  );
}
