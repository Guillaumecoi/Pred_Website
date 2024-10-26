import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import SciencePage from './pages/SciencePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/our-team' element={<Team />} />
      <Route path='/science/lllt' element={<SciencePage />} />
    </Routes>
  );
}

export default App;