/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { cover } from '../assets';
import { AdminLayout } from '../containers';
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

const BookDetail = () => {
return (
<AdminLayout>
    <div css={styles.bookDetail}>
    <div css={styles.bookInfo}>
        <div css={styles.show}>
        <h1 css={styles.title}>Book Title</h1>
        <img
        css={styles.coverImage}
        src={cover} // Replace with your cover image
        alt="Book Cover"
        />
        </div>
        <div css={styles.details}>
        <p>Author: <strong>Author Name</strong></p>
        <p>ISBN: <strong>1234567890</strong></p>
        <p>Language: <strong>English</strong></p>
        <p>Publish Date: <strong>2024-01-01</strong></p>
        <p>Category: <strong>Fiction</strong></p>
        <p>Price: <strong>$20</strong></p>
        </div>
    </div>
    <p css={styles.description}>Description of the book goes here...</p>

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
