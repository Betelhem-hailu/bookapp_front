/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Header } from '../containers';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getBookbyId } from '../slices/book.slices';
import moment from 'moment';
import { cover } from '../assets';


const containerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: h-full;
    `;


const BookContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 800px;
  height: 500px;
  margin-top: 80px;
  background: white;
  padding: 20px;
  position: relative;
  border: 1px solid black
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ECECEC;
`;

const BookImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 300px;
  max-width: 200px;
  object-fit: fit;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
`;
const buttonStyle = css`
  width: 160px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #00a9b7; 
    color: white;
    &:hover {
      background-color: #00a9b7;
      opacity: 0.8;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.5);
    }
`;

const BookTitle = styled.h2`
  font-size: 40px;
  font-family: 'Bebas Neue', sans-serif;
  margin: 0px;
  padding: 0px;
`;

const BookAuthor = styled.h3`
  font-size: 20px;
  font-weight: normal;
  color: #555;
`;

const BookDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const BookDetails = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  grid-template-rows: repeat(3, 30px);   /* 3 rows, height adjusts automatically */
  font-size: 14px;
  line-height: 1.8;

 
`;

const ReviewSection = styled.div`
margin-top: 10px;
padding-top: 10px;
  font-size: 16px;
  width: 500px;
  border-top: 2px solid #393E46;
`;

const ViewBook = () => {
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

  return (
    <>
    <Header />
    <div css={containerStyle}>
      <BookContainer>
      <ImageWrapper>
        <BookShadow />
        <BookImage
        //   src={book.coverImageUrl}
        src={cover}
          alt="Book cover"
        />
        </ImageWrapper>
        <BookInfo>
        <button css={buttonStyle}>
       Add to Cart
      </button>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>by {book.author}</BookAuthor>
          <BookDescription>
            {book.description}
          </BookDescription>
          <BookDetails>
           <p> ISBN: <strong>{book.isbn}</strong></p>
           <p> Language: <strong>{book.language}</strong></p>
            <p>Published Date: <strong>{moment(book.publishDate).format('YYYY-MM-DD')}</strong></p>
            <p>Genre: <strong>{book.categories}</strong></p>
            <p>Price: <strong>{book.price}</strong></p>
          </BookDetails>

          <ReviewSection>
            <strong>Review by Name</strong>
            <p>Reviewer's comment goes here...</p>
          </ReviewSection>
        </BookInfo>
      </BookContainer>
    </div>
    </>
  );
};

export default ViewBook;
