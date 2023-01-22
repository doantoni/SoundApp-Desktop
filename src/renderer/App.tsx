import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import City from './Views/City/City';
import Nature from './Views/Nature/Nature';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/nature" element={<Nature />} />
      </Routes>
    </Router>
  );
}
