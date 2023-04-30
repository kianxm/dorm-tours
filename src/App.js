import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Cards from './components/Cards/Cards';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <HeroSection />
        <Cards />
        <Routes>
          {/* <Route path='/' exact component={Home} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
