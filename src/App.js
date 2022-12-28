import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

      <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About/> } />
        <Route path="work" element={ <Work/> } />
      </Routes>
     </div>
    
    
    
  );
}

export default App;
