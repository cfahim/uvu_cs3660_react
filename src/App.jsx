import { Routes, Route } from 'react-router-dom';
import ReactHome from './pages/ReactHome';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
      <Routes>
        <Route path="/" element={<ReactHome />} />    
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App
