import "./topbar.scss";
import logo from "../../logo.svg";
import SocialMedia from "../socialMedia/SocialMedia";


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="navbar-brand">
            <img
              className="logo"
              src={logo}
              alt="Luis Alejandro Marcano With Love"
            />
          </a>
        </div>
        <div className="center">
          <SocialMedia/>
          </div>
        <div className="right">
          <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
