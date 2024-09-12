/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AdminLayout } from '../containers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBookbyId } from '../slices/book.slices';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import moment from 'moment';
// Emotion Styles
const styles = {
bookDetail: css`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,
bookInfo: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px
`,
title: css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
`,
coverImage: css`
    width: 200px;
    height: auto;
    margin-bottom: 20px;
`,
details: css`
    font-size: 1rem;
    margin-bottom: 20px;
    p {
    margin-bottom: 10px;
    }
`,
description: css`
    font-size: 1.2rem;
    margin-top: 20px;
`,
statistics: css`
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    h3 {
    margin-bottom: 15px;
    }
    p {
    margin-bottom: 10px;
    font-weight: bold;
    }
`,
};

const Image = styled.img`
  width: 400px;
  height: 200px;
`;

const BookDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    // Fix the selector based on your state structure
    const { book, loading } = useSelector((state) => state.book);
  
    useEffect(() => {
      dispatch(getBookbyId(id));
    }, [dispatch, id]);
  
    // Conditionally render the table based on loading state
    if (loading) {
      return <p>Loading...</p>;
    }

    if(book) {
        console.log(book);
    }
return (
<AdminLayout>
    <div css={styles.bookDetail}>
        <div css={styles.bookInfo}>
            <div css={styles.show}>
            <h1 css={styles.title}>{book.title}</h1>
            <Image
            src={book.coverImageUrl} // Replace with your cover image
            alt="Book Cover"
            />
            </div>
            <div css={styles.details}>
            <p>Author: <strong>{book.author}</strong></p>
            <p>ISBN: <strong>{book.isbn}</strong></p>
            <p>Language: <strong>{book.language}</strong></p>
            <p>Publish Date: <strong>{moment(book.publishDate).format('YYYY-MM-DD')}</strong></p>
            <p>Category: <strong>{book.categories}</strong></p>
            <p>Price: <strong>{book.price}</strong></p>
            </div>
        </div>
        <p css={styles.description}>{book.description}</p>
        <div css={styles.statistics}>
            <h3>Statistics of Book</h3>
            <p>100 Orders in this month</p>
            <p>20 customers added it to favorite</p>
        </div>
    </div>
</AdminLayout>
);
};



export default BookDetail;
