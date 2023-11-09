import React from "react";
import NavBar from "./components/NavBar/NavBar";
import CenterBlock from "./components/CenterBlock";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
