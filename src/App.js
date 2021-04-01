import React from "react";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

// import "App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Main />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
