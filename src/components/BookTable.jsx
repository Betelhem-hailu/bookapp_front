/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Emotion CSS Styles

const tableStyle = css`
width: 100%;
border-collapse: collapse;
margin-top: 20px;

th, td {
padding: 10px;
text-align: left;
border-bottom: 1px solid #ddd;
font-family: 'Playfair Display', serif;
}

th {
font-weight: bold;
}

td {
font-size: 16px;
}
`;

const editButtonStyle = css`
background-color: #00a9b7;
color: white;
border: none;
padding: 5px 10px;
margin-right: 10px;
cursor: pointer;
border-radius: 3px;

&:hover {
background-color: #008f9b;
}
`;

const deleteButtonStyle = css`
background-color: #ff5252;
color: white;
border: none;
padding: 5px 10px;
cursor: pointer;
border-radius: 3px;

&:hover {
background-color: #ff3b3b;
}
`;

const BooksTable = ({ books }) => {
return (
<table css={tableStyle}>
    <thead>
    <tr>
        <th>Book Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Category</th>
        <th>Published Date</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {books.map((book, index) => (
        <tr key={index}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>{book.category}</td>
        <td>{book.publishedDate}</td>
        <td>
            <button css={editButtonStyle}>Edit</button>
            <button css={deleteButtonStyle}>Delete</button>
        </td>
        </tr>
    ))}
    </tbody>
</table>
);
};

export default BooksTable;
