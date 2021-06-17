import "./skills.scss";
import ProgressBar from "../progressBar/ProgressBar";
import { Player } from "@lottiefiles/react-lottie-player";
import { Apple, Android, LaptopWindows, Storage } from "@material-ui/icons";
export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="left">
          <div className="top">
            <div className="lottieskills">
              <Player autoplay loop src="assets/skills.json" />
              <h1>My Skills</h1>
            </div>
            <div className="myskills">
              <img src="assets/jsnet.svg" alt="" />
              <div className="item">
                <div className="labelbar">
                  <h4>Website & Web Applications</h4>
                  <span>60%</span>
                </div>
                <ProgressBar width={300} percent={0.6} />
              </div>
              <div className="item">
                <div className="labelbar">
                  <h4>Mobile & Desktop Apps</h4>
                  <span>70%</span>
                </div>
                <ProgressBar width={300} percent={0.7} />
              </div>
              <div className="item">
                <div className="labelbar">
                  <h4>Design & Architecture</h4>
                  <span>60%</span>
                </div>
                <ProgressBar width={300} percent={0.6} />
              </div>
              <div className="item">
                <div className="labelbar">
                  <h4>Backend & Tests</h4>
                  <span>50%</span>
                </div>
                <ProgressBar width={300} percent={0.5} />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="frontend">
              <h1>Front End</h1>
              <br />
              <div className="fronticons">
                <Apple className="icon" />
                <Android className="icon" />
                <LaptopWindows className="icon" />
              </div>

              <div className="tools">
                <div className="first item">
                  <h4>&lt;Web&gt;</h4>
                  <ul>
                    <li>- React</li>
                    <li>- Blazor MAUI</li>
                    <li>- MVC</li>
                    <li>- Wordpress (Divi & Elementor)</li>
                    <li>- HTML & CSS</li>
                  </ul>
                </div>
                <br />
                <div className="second item">
                  <h4>Mobile & Desktop:</h4>
                  <ul>
                    <li>- React Native</li>
                    <li>- Xamarin</li>
                    <li>- Xcode & Kotlin</li>
                    <li>- Electron</li>
                    <li>- Windows Forms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <h1>UI/UX Design, Planners & Tools Apps</h1>
            <div className="tools">
              <ul className="first">
                <li className="title">{"//"}Design</li>
                <li> - Illustrator</li>
                <li> - PhotoShop</li>
                <li> - Lightroom</li>
                <li> - InkScape</li>
                <li> - Sketch</li>
                <li> - draw.io</li>
                <li> - Figma</li>
              </ul>
              <ul className="second">
                <li className="title">{"/*"}Planner & Cloud</li>
                <li> - ClickUp</li>
                <li> - Google Keep</li>
                <li> - GitHub</li>
                <li> - Notion</li>
                <li> - Trello</li>
                <li> - Microsoft Teams</li>
                <li> - DevOps</li>
              </ul>
              <ul className="third">
                <li className="title">--Tools & IDE</li>
                <li> - Visual Studio & VS Code </li>
                <li> - Dockers</li>
                <li> - Postman</li>
                <li> - NotePad++</li>
                <li> - Xcode</li>
                <li> - Android Studio</li>
                <li> - Remote Desktop VPN</li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="backend">
              <h1>
                Backend <Storage className="icon" />
              </h1>
              <div className="tools">
                <div className="first">
                  <h4>Database Sql & NoSql:</h4>
                  <ul>
                    <li>MS SQL</li>
                    <li>MySql</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                    <li>MongoDb</li>
                    <li>CosmoDb</li>
                  </ul>
                </div>
                <div className="second">
                  <h4>Cloud Provider:</h4>
                  <ul>
                    <li>Microsoft Azure</li>
                    <li>Google Firebase</li>
                    <li>MongoDB Atlas</li>
                    <li>Hostings</li>
                  </ul>
                </div>
                <div className="third">
                  <h4>API (RESTFul & GraphQL):</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>.NET CORE</li>
                    <li>Azure API Managment</li>
                    <li>Google Cloud API Services</li>
                    <li>Google & Azure Functions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
