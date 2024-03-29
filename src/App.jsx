import {useState} from 'react'
import './app.scss'

import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";

import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        {/* <Works /> */}
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
export default App;
