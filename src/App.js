import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Headlinecards from "./components/headlinecards";
import Food from './components/food'
import Category from './components/category'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Headlinecards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
