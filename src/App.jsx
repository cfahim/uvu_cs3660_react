import { Routes, Route } from 'react-router-dom';
import ReactHome from './pages/ReactHome';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BootStrap from './pages/BootStrap';
import Events from './pages/Events';


function App() {
  return (
      <Routes>
        <Route path="/" element={<ReactHome />} />    
        <Route path="/about" element={<About />} />
        <Route path="/bootstrap" element={<BootStrap />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App
