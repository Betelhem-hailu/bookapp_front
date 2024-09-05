/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BooksTable, Button } from '../components';
import { AdminLayout } from '../containers';

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
// Sample data for the books table
const books = [
{ title: 'Title 1', author: 'Author 1', isbn: '730196', category: 'Comedy', publishedDate: '22/07/2002' },
{ title: 'Title 2', author: 'Author 2', isbn: '123456', category: 'Drama', publishedDate: '11/03/2010' },
// Add more book data here...
];

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
    <BooksTable books={books} />
</div>
</AdminLayout>
);
};

export default BookList;
