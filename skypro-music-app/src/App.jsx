import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NavBar from "./components/NavBar.jsx";
import CenterBlock from "./components/CenterBlock";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <Skeleton count={50} />
              <NavBar />
              <CenterBlock />
              <Sidebar />
            </main>
            <PlayerBar />
          </div>
        </div>
      </SkeletonTheme>
      <Footer />
    </div>
  );
}

export default App;
