/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

const headerStyle = css`
  background-color: #00aab2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const items = css`
display: flex;
height: 30px;
align-items: middle;
gap: 20px;
`

const logoStyle = css`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
`;

const navStyle = css`
  display: flex;
  gap: 20px;
`;

const navItemStyle = css`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 5px;
   &:hover {
        background-color: #393E46;
        opacity: 0.8;
        border-radius: 5px;
      }
`;

const formStyle = css`
  position: relative;
`

const searchStyle = css`
padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const buttonStyle = css`
border: none;
background-color: transparent;
position: absolute;
top: 2px;
right: 10px;
cursor:pointer;
`



const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = (e) => {
    e.preventDefault();

    // Redirect to the search results page with the search term in the query string
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>Destiny Book Store</div>
      <div css={items}>
      <nav css={navStyle}>
        <a href="/#home" css={navItemStyle}>Home</a>
        <a href="/#about" css={navItemStyle}>About</a>
        <a href="/catalog" css={navItemStyle}>Catalogue</a>
        <a href="/#blog" css={navItemStyle}>Blog</a>
        <a href="/#contact" css={navItemStyle}>Contact Us</a>
      </nav>
      <form onSubmit={handleSearch} css={formStyle}>
      <input css={searchStyle} 
      type="text" 
      placeholder='search ...'   
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}/>
      <button css={buttonStyle} type="submit"><IoSearch size={20} color='#00aab2'/></button>
      </form>
        <Button variant={"secondary"} size='small' onClick={()=>{navigate("/login")}}>Login</Button>
      </div>
    </header>
  );
};

export default Header;
