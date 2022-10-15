import React from "react";
import { createRoot } from "react-dom/client";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <About />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
