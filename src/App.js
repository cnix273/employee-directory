import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import "App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
