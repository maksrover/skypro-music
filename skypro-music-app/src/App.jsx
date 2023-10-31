import "./styles/style.css";
import CenterBlock from "./components/CenterBlock";
import Sidebar from "./components/sidebar";
import MusicPlayer from "./components/musicPlayer";
import MainNav from "./components/mainNav";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <CenterBlock />
          <Sidebar />
          <MusicPlayer />
        </main>
      </div>
    </div>
  );
}

export default App;
