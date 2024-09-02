/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { comedy, horror, mystry, romance } from "../assets";

const categoriesStyle = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 36px;
  text-align: center;
`;

const categoryStyle = css`
  text-align: center;
`;

const Gradient = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.color1},
    ${(props) => props.color2}
  );
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover; /* Ensures the image covers the entire area */
`;

const Content = styled.div`
  position: relative;
  width: 250px;
  height: 200px;
  z-index: 2;
  text-align: center; /* Centering text */
  padding: 5px;
`;

const Subheading = styled.h3`
  font-family: "Bebas Neue", sans-serif;
  font-size: 36px;
  color: #000;
  margin-top: 120px;
`;
const Cla = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-top: -40px;
`;
const Categories = () => {
  return (
    <section>
      <Title>Categories</Title>
      <div css={categoriesStyle}>
        <div css={categoryStyle}>
          <Gradient color1="#EBEAEA" color2="#999696">
            <Content>
              <Subheading>Mystery Books</Subheading>
              <Cla>Shop Now</Cla>
            </Content>
            <Image src={mystry} alt="Mystery Books" />
          </Gradient>
        </div>
        <div css={categoryStyle}>
          <Gradient color1="#FF8888" color2="#FF0202">
            <Image src={horror} alt="Horror Books" />
            <Content>
              <Subheading>Horror Books</Subheading>
              <Cla>Shop Now</Cla>
            </Content>
          </Gradient>
        </div>
        <div css={categoryStyle}>
          <Gradient color1="#FFD859" color2="#CE6E01">
            <Image src={comedy} alt="Comedy Books" />
            <Content>
              <Subheading>Comedy Books</Subheading>
              <Cla>Shop Now</Cla>
            </Content>
          </Gradient>
        </div>
        <div css={categoryStyle}>
          <Gradient color1="#FFA2C3" color2="#FF0090">
            <Image src={romance} alt="Romance Books" />
            <Content>
              <Subheading>Romance Books</Subheading>
              <Cla>Shop Now</Cla>
            </Content>
          </Gradient>
        </div>
      </div>
    </section>
  );
};

export default Categories;
