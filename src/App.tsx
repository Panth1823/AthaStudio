import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MemoryFeature from "./components/MemoryFeature";
import CategoryGrid from "./components/CategoryGrid";
import IdeaBehindPiece from "./components/IdeaBehindPiece";
import CreationCorner from "./components/CreationCorner";
import EnquireBand from "./components/EnquireBand";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MemoryFeature />
        <CategoryGrid />
        <IdeaBehindPiece />
        <CreationCorner />
        <EnquireBand />
      </main>
      <Footer />
    </>
  );
};

export default App;
