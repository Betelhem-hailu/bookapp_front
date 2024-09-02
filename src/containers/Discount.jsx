/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { studpic } from '../assets';
import styled from '@emotion/styled/macro';

const discountStyle = css`
  background-color: #00aab2;
  color: white;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  gap: 50px;
`;

const Image = styled.img`
  width: 400px;
  height: 200px;
`;

const Content = styled.div`
  margin-left: 20px;
  border-radius: 10px;
  width: 50%;
  text-align: center;
`;

const Topic = styled.h3`
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  color: #fff;
`;
const Desc = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 24px;
    color: #fff;

`;

const Discount = () => {
  return (
    <section css={discountStyle}>
      <Content>
      <Topic>20% Discount for Students</Topic>
      <Desc>Books are powerful tools for continuous learning and personal growth..</Desc>
      </Content>
      <Image src={studpic} alt={"stud_pic_img"} />
    </section>
  );
};

export default Discount;
