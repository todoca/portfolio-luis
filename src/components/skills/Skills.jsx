import "./skills.scss";
import ProgressBar from "../progressBar/ProgressBar";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="sliderlogos">Slider de Logos</div>
      <div className="left">
        <div className="top">
          <h1>My Skills</h1>
        </div>
        <div className="bottom">
          <div className="frontend">
            <h1>Front End</h1>
          </div>
          <div className="backend">
            <h1>Back End</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
