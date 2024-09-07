/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BooksTable, Button } from '../components';
import { AdminLayout } from '../containers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../slices/book.slices';

// Emotion CSS Styles

const pageStyle = css`
padding: 20px;
`;

const headerStyle = css`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

h2 {
margin: 0;
font-family: 'Playfair Display', serif;
}
`;

const addBookButtonStyle = css`
width: 200px;
`;

const filterSearchStyle = css`
display: flex;
align-items: center;
margin-bottom: 20px;

span {
margin-right: 10px;
font-size: 18px;
font-family: 'Playfair Display', serif;
}
`;

const searchStyle = css`
padding: 10px;
font-size: 16px;
width: 300px;
border: 1px solid #ccc;
border-radius: 5px;
font-family: 'Playfair Display', serif;
`;

const BookList = () => {
    const dispatch = useDispatch();

    // Fix the selector based on your state structure
    const { data, loading } = useSelector((state) => state.book);
  
    useEffect(() => {
      dispatch(getBooks());
    }, [dispatch]);
  
    // Conditionally render the table based on loading state
    if (loading) {
      return <p>Loading...</p>;
    }

// Sample data for the books table
// const books = [
// { title: 'Title 1', author: 'Author 1', isbn: '730196', category: 'Comedy', publishedDate: '22/07/2002' },
// { title: 'Title 2', author: 'Author 2', isbn: '123456', category: 'Drama', publishedDate: '11/03/2010' },
// // Add more book data here...
// ];

return (
<AdminLayout>
<div css={pageStyle}>
    <div css={headerStyle}>
    <h2>Books List</h2>
    <div css={addBookButtonStyle}>
    <Button>+ Add Book</Button>
    </div>
    </div>
    <div css={filterSearchStyle}>
    <span>Filter</span>
    <input type="text" placeholder="Search..." css={searchStyle} />
    </div>
    {/* Ensure data is available before rendering */}
    {data.length > 0 ? (
        <BooksTable books={data} />
    ) : (
        <p>No books available</p>
    )}
</div>
</AdminLayout>
);
};

export default BookList;
