import "./about.scss";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h2>About Me</h2>
        <div className="lottieabout">
          <Player autoplay loop src="assets/dron.json" />
        </div>
        <h1>
          My goal is design & develop awesome cross-platform apps for the world
          with love.
        </h1>
        <h3>
          Mi nombre es Luis Alejandro Marcano, venezolano, ingeniero
          electrónico, freelance, empresario, amante de la ciencia y tecnología.
        </h3>
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
            Mi primer encuentro fue con un Sistema Operativo MS-DOS y un juego
            llamado California Games, a partir de allí, entendí las infinitas
            posibilidades de crear algo maravilloso.
          </p><br/>
          <p>
            En la Universidad, interactuamos con lenguajes como C++ y
            Ensamblador para los Microcontroladores, permitiendo un sublime
            encuentro con las infinitas líneas de código que se ocultan
            sutilmente detras de lo tangible, cumpliendo funciones y tareas
            imperceptibles para la mayoría de las personas, fue como magia.
          </p><br/>
          <p>
            Luego de graduarme de ingeniero en el 2006, empecé trabajando en
            grandes empresas del sector de Telecomunicaciones y desarrollo de
            soluciones IT durante 6 años, En el 2012 decidí crear mi propia
            empresa de desarrollo de software, Todoca, con la intención de
            brindar Servicios Tecnológicos y Soluciones Integrales a personas
            que se encuentran en constante innovación y evolución. Finalmente,
            en 2019, decidimos dedicarme completamente a al area programación,
            diseño y desarrollo, con el propósito de crear aplicaciones
            multiplataformas que mejoren la productividad y sirvamos de ayuda a
            otros con la tecnología.
          </p><br/>
          <p>
            Actualmente dirijo Todoca, trabajamos remotamente a diferentes
            lugares del mundo. Si estás buscando eficiencia, profesionalidad y
            dedicación, ¡cuenta conmigo!
          </p>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}
