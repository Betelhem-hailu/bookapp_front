/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';

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

const searchStyle = css`
padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;



const Header = () => {
  const navigate = useNavigate();
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
      <input css={searchStyle} type="text" placeholder='search ...'/>
        <Button variant={"secondary"} size='small' onClick={()=>{navigate("/login")}}>Login</Button>
      </div>
    </header>
  );
};

export default Header;
