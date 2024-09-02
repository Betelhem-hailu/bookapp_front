/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from "@emotion/styled";
import {Button} from '../components/index';
import { hero } from '../assets';
import { FaArrowRightLong } from "react-icons/fa6";

const heroStyle = css`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  height: 50vh;
  color: white;
  text-align: center;
  padding: 80px 20px;
`;

const Content = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  text-align: left;
  `;

  const Title = styled.h1`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
`
const Subheading = styled.p`
font-family: 'Playfair Display', serif;
font-size: 20px;
`;

const Hero = () => {
  return (
    <section css={heroStyle} id='home'>
        <Content>
      <Title>Destiny Book Store</Title>
      <Subheading>Welcome book lovers! Are you tired of scouring the shelves at your local 
book store for your next read? Look no further! Our online book store 
has everything you need to satisfy your literary cravings.</Subheading>
    <div style={{'width': '200px'}}>
      <Button>Explore <FaArrowRightLong /> </Button>
      </div>
        </Content>
    </section>
  );
};

export default Hero;
