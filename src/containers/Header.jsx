/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  background-color: #00aab2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>Destiny Book Store</div>
      <nav css={navStyle}>
        <a href="#home" css={navItemStyle}>Home</a>
        <a href="#about" css={navItemStyle}>About</a>
        <a href="#catalogue" css={navItemStyle}>Catalogue</a>
        <a href="#blog" css={navItemStyle}>Blog</a>
        <a href="#contact" css={navItemStyle}>Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
