import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Ideas from "./components/Ideas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import FloatingMailButton from "./components/FloatingMailButton";
const Scrapbook = () => {
  return (
    <div className="bg-[#F8F6F2] text-[#1F2937] min-h-screen font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Ideas />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <FloatingMailButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Scrapbook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
