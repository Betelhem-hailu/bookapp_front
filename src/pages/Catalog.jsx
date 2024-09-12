/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Header } from '../containers';
import styled from '@emotion/styled/macro';
import { IoMdHeart } from "react-icons/io";
// import { IoIosHeartEmpty } from "react-icons/io";
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookByCategory, getCategories } from '../slices/book.slices';

const contentStyle = css`
  display: flex;
  margin-top: 60px;
  padding: 20px;
`;

const sidebarStyle = css`
  width: 20%;
  height: 100%;
  margin-left: 10px;
  h2 {
  font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
  }
`;


const categoryItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 4px;
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

const Error = styled.p`
color: #dc2f02;
font-size: 16px;
`;

const Catalog = () => {
const dispatch = useDispatch();
  
const { data, categories, loading, error } = useSelector((state) => state.book);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleFilterChange = useCallback((selectedCategories) => {
    setFilteredCategories(selectedCategories);
  }, [setFilteredCategories]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((cat) => cat !== category)
      );
    }
  };

  useEffect(() => {
    dispatch(getCategories());
    }, [dispatch]);

  // Automatically apply filter when selectedCategories changes
  useEffect(() => {
    handleFilterChange(selectedCategories);
  }, [selectedCategories, handleFilterChange]);

  useEffect(() => {
    if (filteredCategories.length > 0) {
      dispatch(getBookByCategory(filteredCategories));
    } else {
      dispatch(getBookByCategory([])).unwrap();
    }
  }, [filteredCategories, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header /> 
      <div css={contentStyle}>

<div css={sidebarStyle}>
<h2>Categories</h2>
{categories &&
            categories.map((category, index) => (
              <div key={index} css={categoryItemStyle}>
              <label>
              <input type="checkbox" 
              value={category.name} 
              checked={selectedCategories.includes(category.name)} 
              onChange={handleCategoryChange} />
                {category.name}
              </label>
              </div>
            ))}
    </div>

        <section css={booksSectionStyle}>
        {error && <Error>{error}</Error>}
        {data?.length > 0 && (
         data.map((book) => (
          <BookCard 
            key={book.bookId}
            Id={book.bookId}
            title={book.title}
            author={book.author}
            price={`${book.price} ETB`}
            imageUrl={book.coverImageUrl} // Assuming coverImageUrl is a property in your book data
          />))
        )}
        </section>
      </div>
    </div>
  );
};

export default Catalog;

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
