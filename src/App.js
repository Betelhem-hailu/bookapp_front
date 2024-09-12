import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddBook, BookDetail, BookList, Catalog, Dashboard, Login, SearchResults, Signup, UpdateBook, ViewBook } from './pages';
import { Home } from './containers';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Use Home component for the root path */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/catalog/:id' element={<ViewBook />} />
      <Route path='/search' element={<SearchResults />} />


      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/books' element={<BookList />} />
      <Route path='/admin/books/addbook' element={<AddBook />} />
      <Route path='/admin/books/updateBook/:bookId' element={<UpdateBook />} />
      <Route path='/admin/books/:id' element={<BookDetail />} />
    </Routes>
      </>
  );
}

export default App;
