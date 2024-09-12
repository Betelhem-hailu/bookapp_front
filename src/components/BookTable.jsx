/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../slices/book.slices';
import { useState } from 'react';
import DeleteConfirmationModal from './DeleteConfirmation';
import styled from '@emotion/styled/macro';

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

const Error = styled.p`
color: #dc2f02;
font-size: 16px;
`;

const BooksTable = ({ books }) => {
const navigate = useNavigate();
const dispatch = useDispatch();
const [showConfirmationModal, setShowConfirmationModal] = useState(false);
const [bookId, setSelectedBookId] = useState(null);
const {loading} = useSelector(state=> state.book);
const [error, setError] = useState(null);

  const handleDelete = bookId => {
    setSelectedBookId(bookId);
    setShowConfirmationModal(true);
  };

  const confirmDelete = async () => {
    try {
      dispatch(deleteBook(bookId));
      setShowConfirmationModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    } catch (error) {
      setShowConfirmationModal(false);
    }

    dispatch(deleteBook(bookId))
    .unwrap()
    .then((response) => {
      setShowConfirmationModal(false);
    })
    .catch((error) => {
        if (error) {
            console.log(error)
            setError(error);
            alert(error);
        } else {
    setError("Submission failed. Please try again later.");
        }
        setShowConfirmationModal(false);
    });
  };

  const cancelDelete = () => {
    setShowConfirmationModal(false);
  };

  if(loading) {
    <p>loading</p>
  }


return (
  <>
  {/* {error && <Error>{error}</Error>} */}
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
    {books?.map((book, index) => (
        <tr key={book.bookId}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>{book.categories}</td>
        <td>{moment(book.publishDate).format('YYYY-MM-DD')}</td>
        <td>
            <button css={editButtonStyle} onClick={()=>{navigate(`/admin/books/updateBook${book.bookId}`)}}>Edit</button>
            <button css={deleteButtonStyle} onClick={()=> {handleDelete(book.bookId)}}>Delete</button>
            <IoEyeSharp size={15} style={{ marginLeft: "25px", cursor: "pointer" }} onClick={()=>{navigate(`/admin/books/${book.bookId}`)}}/>
        </td>
        </tr>
    ))}
    </tbody>
</table>
<DeleteConfirmationModal
            show={showConfirmationModal}
            onClose={cancelDelete}
            onConfirm={confirmDelete}
          />
</>
);
};

export default BooksTable;
