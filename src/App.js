import './App.css'
import AudioPlayer from './components/AudioPlayer'
import NavMenu from './components/NavMenu'
import MainBlock from './components/MainBlock'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <NavMenu />
              <MainBlock />
              <Sidebar/>
            </main>
            <AudioPlayer />
            <footer className="footer" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
