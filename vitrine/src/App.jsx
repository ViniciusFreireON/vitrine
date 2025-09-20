import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "/src/components/Hero";
import Header from "/src/components/hero/menuheader";
import GallerySection from "/src/components/galeria";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="select-none">
        <Header />
        <Hero />
        <GallerySection />
      </div>
    </>
  );
}

export default App;
