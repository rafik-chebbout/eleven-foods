import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Headlinecards from "./components/headlinecards";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Headlinecards/>
    </div>
  );
}

export default App;
