import React from "react";
import "./App.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
            <NavBar />

            <SkeletonTheme baseColor="#313131" highlightColor="#525252">
              <CenterBlock />
              <Skeleton count={30} />
            </SkeletonTheme>
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
