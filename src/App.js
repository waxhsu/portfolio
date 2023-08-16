import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Landing from './components/Landing/Landing.js'
import Projects from './components/Projects/Projects.js'
import About from './components/About/About.js'
// import Skills from './components/Skills/Skills.js'
import Contact from './components/Contact/Contact.js'
// import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <About />
      {/* <Landing /> */}
      <Projects />
      {/* <Skills /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

// a button to change different styles of formatting?
// newspaper EXTRE! EXTRE! READ ALL ABOUT IT type style?

export default App;
