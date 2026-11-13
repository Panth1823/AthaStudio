import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MemoryFeature from "./components/MemoryFeature";
import ShopSection from "./components/ShopSection";
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
        <ShopSection />
        <IdeaBehindPiece />
        <CreationCorner />
        <EnquireBand />
      </main>
      <Footer />
    </>
  );
};

export default App;
