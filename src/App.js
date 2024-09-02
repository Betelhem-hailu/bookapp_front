import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Signup } from './pages';
import { Home } from './containers';

function App() {
  return (
    <>
<Routes>
      <Route path="/" element={<Home />} /> {/* Use Home component for the root path */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
       </>
  );
}

export default App;
