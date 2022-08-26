import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Home from '../Home/Home.js';
import Projects from '../Projects/Projects.js';
import Music from '../Music/Music.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="page">
        <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/music" element={<Music />}/>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
