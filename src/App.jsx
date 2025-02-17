import { Routes, Route } from 'react-router-dom';
import ReactHome from './pages/ReactHome';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BootStrap from './pages/BootStrap';
import Events from './pages/Events';
import Surprise from './pages/Surprise';
import AuthRoute from './AuthRoute';
import Login from './pages/Login';
import Admin from './pages/admin/Admin';


function App() {
  return (
      <Routes>
        <Route path="/" element={<ReactHome />} />    
        <Route path="/about" element={<About />} />
        <Route path="/bootstrap" element={<BootStrap />} />
        <Route path="/events" element={<Events />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/login" element={<Login />} />

        <Route element={<AuthRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App
