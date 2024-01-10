import React, { useLayoutEffect } from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

const App = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
