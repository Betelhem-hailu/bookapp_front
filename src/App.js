import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddBook, BookDetail, BookList, Dashboard, Login, Signup } from './pages';
import { Home } from './containers';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Use Home component for the root path */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/books' element={<BookList />} />
      <Route path='/admin/addbook' element={<AddBook />} />
      <Route path='/admin/books/detail' element={<BookDetail />} />
    </Routes>
      </>
  );
}

export default App;
