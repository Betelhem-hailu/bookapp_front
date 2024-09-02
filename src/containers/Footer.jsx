/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { logo_p } from '../assets';

const footerStyle = css`
  background-color: #00aab2;
  color: white;
  padding: 20px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <LogoContainer>
        <Logo src={logo_p} alt="Logo" />
      </LogoContainer>
      <p>Destiny Book Store</p>
      <p>Contact: +2519000678</p>
      <p>Follow us on social media</p>
    </footer>
  );
};

export default Footer;
