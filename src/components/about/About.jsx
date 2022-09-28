import "./about.scss";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="container">
          <h2>About Me</h2>
          <div className="lottieabout">
            <Player autoplay loop src="assets/dron.json" />
          </div>
          <h1>
            My goal is design & develop awesome cross-platform apps for the
            world with love.
          </h1>
          <h3>
            My name is Alejandro Marcano, Venezuelan, Engineer
             electronic, freelance, manager, lover of science and
             technology.
          </h3>
        </div>
      </div>

      <div className="right">
        <div className="top">
          <div className="lottieabout">
            <Player autoplay loop src="assets/history.json" />
          </div>
          <h1>My History</h1>
        </div>
        <div className="center">
          <p>
          My first encounter was with an MS-DOS Operating System and a game called California Games, from there, I understood the infinite possibilities of creating something wonderful.
          </p>
          <br />
          <p>
          At the University, we interacted with languages such as C++ and Assembler for Microcontrollers, allowing a sublime encounter with the infinite lines of code that are subtly hidden behind the tangible, fulfilling functions and tasks imperceptible to most people, it was like magic.
          </p>
          <br />
          <p>
          After graduating as an engineer in 2006, I started working in large companies in the Telecommunications sector and developing IT solutions for 6 years. In 2012 I decided to create my own software development company, Todoca, with the intention of providing Technological Services and Comprehensive solutions for people who are in constant innovation and evolution. Finally, in 2019, I decided to dedicate myself completely to the programming, design and development area, with the purpose of creating multiplatform applications that improve productivity and efficiency according to the requirements of my clients.
          </p>
          <br />
          <p>
          Currently I run Todoca, I work remotely to different places in the world. If you are looking for efficiency, professionalism and dedication, count on me!
          </p>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}
