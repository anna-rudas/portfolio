import React from "react";
import { createRoot } from "react-dom/client";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
