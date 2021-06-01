import "./about.scss";
import ProgressBar from "../progressBar/ProgressBar";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h2>About Me</h2>
        <h1>MY MISSION IS DESIGN & DEVELOP THE BEST WEBSITES AROUND</h1>
        <h3>
          I mastered technology to make the best possible software that’ll
          hopefully result in making people’s lives a bit better, one line of
          code at a time.
        </h3>
      </div>
      <div className="right">
        <div className="container">
          <div className="item">
            <h4>
              Website & Web Applications <span>80%</span>
            </h4>
            <ProgressBar width={100} percent={0.3} />
          </div>
          <div className="item">
            <h4>
            Mobile Apps <span>80%</span>
            </h4>
            <ProgressBar width={100} percent={0.3} />
          </div>
          <div className="item">
            <h4>
            Software Design & Architecture <span>80%</span>
            </h4>
            <ProgressBar width={100} percent={0.3} />
          </div>
          <div className="item">
            <h4>
              Web design <span>80%</span>
            </h4>
            <ProgressBar width={100} percent={0.3} />
          </div>
        </div>
      </div>
    </div>
  );
}
