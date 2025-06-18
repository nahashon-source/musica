import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home/Home';
import Home1 from './pages/Home/Home1';
import Home2 from './pages/Home/Home2';
import Home3 from './pages/Home/Home3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
      </Routes>
    </Router>
  );
}

export default App;
