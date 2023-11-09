import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import CenterBlock from "./components/centerBlockFolder/CenterBlock";
import { Sidebar } from "./components/sidebarFolder/Sidebar";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <NavBar />
              <CenterBlock />
              <Sidebar />
            </main>
            <PlayerBar />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
