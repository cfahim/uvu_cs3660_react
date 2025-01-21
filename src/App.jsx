import { Routes, Route } from 'react-router-dom';
import ReactHome from './pages/ReactHome';


const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReactHome />} />    
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
