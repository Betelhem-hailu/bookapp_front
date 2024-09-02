/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { about } from '../assets';

const aboutStyle = css`
  padding: 50px 20px;
  display: flex;
  gap: 20px;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
  padding: 20px;
  width: 30%;
  text-align: left;
  `;

  const Image = styled.img`
  width: 450px;
  height: 350px;
`;

const Title = styled.h2`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
`;
const Para = styled.p`
font-family: 'Playfair Display', serif;
font-size: 16px;
`;
const About = () => {
  return (
    <section css={aboutStyle} id='about'>
         <Image src={about} alt="Bookstore" />
         <Content>
      <Title>About Destiny Book Store</Title>
      <Para>Our ecommerce site offers a vast selection of books in every genre imaginable. From classic literature to the latest bestsellers, we've got it all. And with just a few clicks, you can have your new book delivered right to your doorstep.
We pride ourselves on providing a user-friendly shopping experience that's both secure and efficient. Our website is designed to make it easy for you to find what you're looking for, with helpful search filters and personalized recommendations based on your browsing history. 
<br /><br />
So what are you waiting for? Grab a cup of tea, cozy up in your favourite reading nook, and start exploring our online book store. We can't wait to help you find your next favorite book!</Para>
</Content>
    </section>
  );
};

export default About;
