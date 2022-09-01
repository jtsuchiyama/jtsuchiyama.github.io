import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Home from '../Home/Home.js';
import Projects from '../Projects/Projects.js';
import Music from '../Music/Music.js';
import About from '../About/About.js';
import NoRoute from '../NoRoute/NoRoute.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/music" element={<Music />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NoRoute />}/>
        </Routes>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
