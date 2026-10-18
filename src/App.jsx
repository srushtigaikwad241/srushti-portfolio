import Navbar from "./components/Navbar";

import Home from "./components/Home";

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
        <Home />

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