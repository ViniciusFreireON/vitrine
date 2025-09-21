import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "/src/components/hero";
import Header from "/src/components/hero/menuheader";
import GallerySection from "/src/components/galeria";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GallerySites from "/src/pages/gallerysites";
import GalleryMockups from "/src/pages/gallerymockups";
import GalleryPosts from "/src/pages/galleryposts";
import GalleryFoto from "/src/pages/galleryfotografias"; // Importar GalleryFoto

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="select-none">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GallerySection />
            </>
          } />
          <Route path="/gallery-sites" element={<GallerySites />} />
          <Route path="/gallery-mockups" element={<GalleryMockups />} />
          <Route path="/gallery-posts" element={<GalleryPosts />} />
          <Route path="/gallery-foto" element={<GalleryFoto />} /> {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;