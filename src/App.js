import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Dorm from './pages/Dorm';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';
import About from './components/Navbar/About'
import LearnMore from './components/Navbar/LearnMore';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='dorms/:name' element={<Dorm />}/>
          <Route path='/about' element={<About />} />
          <Route path='/learnMore' element={<LearnMore />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
