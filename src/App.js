import React from "react";
import { createRoot } from "react-dom/client";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="wrapper">
      <Hero />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
