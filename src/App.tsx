import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./App.css";
import ScrollToTopButton from "./components/scrollButton";

function App() {
  return (
    <div>
      <Navbar /> 
      <Intro />
      <Projects />
      <About />
      <Contact />
      <ScrollToTopButton />
    </div>
  )
}

export default App
