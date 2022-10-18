import React from "react";
import { createRoot } from "react-dom/client";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <About />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
