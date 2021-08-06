import React, { useEffect, useState } from "react";
import AppStartBtn from "./components/app-start-btn";

function App() {
  const ball = document.querySelector(".loader-container .ball");

  const [finishedLoading, setFinishedLoading] = useState(false);
  const [isStartApp, setIsStartApp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      ball.classList.add("stopped");
      setTimeout(() => {
        const ballTop = getComputedStyle(ball)
          .transform.split(",")[5]
          .split(")")[0];
        const fromTheTop = 75 - Number(ballTop);
        ball.style.top = `${fromTheTop}px`;
      }, 100);
      setTimeout(() => {
        ball.classList.add("hide");
        setFinishedLoading(true);
      }, 500);
    }, 2000);
  }, []);

  const handleStartClick = () => {
    ball.parentElement.classList.add("hide");
    setTimeout(() => setIsStartApp(true), 3500);
  };

  return (
    <div className="App">
      {!isStartApp ? (
        <AppStartBtn
          finishedLoading={finishedLoading}
          onStartClick={handleStartClick}
        />
      ) : (
        <h1>Placeholder</h1>
      )}
    </div>
  );
}

export default App;
