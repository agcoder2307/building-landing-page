import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Bienrentado from "./components/Bienrentado/Bienrentado";
import Examples from "./components/Examples/Examples";
import Buildings from "./components/Buildings/Buildings";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Bienrentado />
      <Examples />
      <Buildings />
      <Footer />
    </>
  );
};

export default App;
