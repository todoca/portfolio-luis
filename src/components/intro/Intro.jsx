import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      strings: [" Full Stack Developer", "Designer", "Electronic Engineer"],
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        .
        <div className="wrapper">
          <h2>Hello, My name is</h2>
          <h1>Luis Alejandro Marcano</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}
