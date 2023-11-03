import React from "react";
import "./App.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NavBar from "./components/NavBar.jsx";
import CenterBlock from "./components/CenterBlock";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import Footer from "./components/Footer";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="App">
        <p>
          <Skeleton count={5} />
        </p>
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
    </SkeletonTheme>
  );
}

export default App;
