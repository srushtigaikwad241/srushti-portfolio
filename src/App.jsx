import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Journey from "./components/Journey";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Journey />
        <Education />
        <Experience />
        <Github />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;