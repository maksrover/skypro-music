import React from "react";
import "./App.css";
import BlogPost from "./BlogPost"; // Import the BlogPost component

import NavBar from "./components/NavBar.jsx";
import CenterBlock from "./components/CenterBlock";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
          <BlogPost />
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
