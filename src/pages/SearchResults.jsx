/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookBySearch } from '../slices/book.slices';
import { IoMdHeart } from 'react-icons/io';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

const contentStyle = css`
  margin-top: 60px;
  margin: 20px;
   h2 {
  font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
  }
`;

const booksSectionStyle = css`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const cardStyle = css`
  border: 2px solid #00a9b7;
  width: 350px;
  height: 200px;
  overflow: hidden;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;


const cardContentStyle = css`

  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: middle;
  gap: 10px;
  padding-top: 20px;
  font-family: 'Bebas Neue', sans-serif;

  h3 {
    font-size: 20px;
     margin: 0px;
     padding: 0px;
  }

  p {
    font-size: 16px;
    margin: 0px;
    padding: 0px;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 200px;
`;

const buttonStyle = css`
  width: 120px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-color: #00a9b7; /* teal */
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

const actionStyle = css`
display: flex;
gap: 20px;
`;

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(true);
  const location = useLocation(); // Hook to access the current location
  const {loading} = useSelector(state => state.book)
  const dispatch = useDispatch();

  // Helper function to extract the query parameter
  const getQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('query') || '';
  };

  useEffect(() => {
    const searchTerm = getQuery();

    const fetchSearchResults = async () => {
      try {
       dispatch(getBookBySearch(searchTerm))
       .unwrap()
       .then((response) => {
        setSearchResults(response.data);
        console.log(response.data);
       })
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [location.search]);

  if (loading) return <p>Loading...</p>;

  return (
    <div css={contentStyle}>
      <h2>Search Results for "{getQuery()}"</h2>
      {searchResults.length > 0 ? (
        <div css={booksSectionStyle}>
          {searchResults.map((book) => (
             <BookCard 
             key={book.bookId}
             Id={book.bookId}
             title={book.title}
             author={book.author}
             price={`${book.price} ETB`}
             imageUrl={book.coverImageUrl} // Assuming coverImageUrl is a property in your book data
           />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;


const BookCard = ({Id, title, author, price, imageUrl }) => {

    function handleClick() {
      window.location.href = `/catalog/${Id}`;
    }
  
    return (
    <div css={cardStyle} onClick={()=>{handleClick()}}>
      <Image src={imageUrl} alt={title}/>
      <div css={cardContentStyle}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>*****</p>
        <p>{price}</p>
        <div css={actionStyle}>
        <button css={buttonStyle}>
         Add to Cart
        </button>
        <IoMdHeart size={25} color='red'/>
        {/* <IoIosHeartEmpty /> */}
        </div>
      </div>
    </div>
  )};