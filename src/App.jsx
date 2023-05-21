import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/navBar/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
