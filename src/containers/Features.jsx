/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const featuresStyles = css`
  padding: 50px 20px;
  text-align: center;
  justify-content: space-around;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const featureStyle = css`
  text-align: center;
  display: flex;
`;

const Content = styled.div`
  margin-left: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Topic = styled.h3`
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  color: #000;
`;
const Desc = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 16px;
  color: #000;
`;

const Features = () => {
  return (
    <section css={featuresStyles}>
      <div css={featureStyle}>
      <Content>
      <TbTruckDelivery size={50} color='#00aab2'/>
      <Topic>Fast Delivery</Topic>
      <Desc>Orders over 100 ETB</Desc>
      </Content>
      </div>

      <div css={featureStyle}>
      <Content>
      <RiSecurePaymentFill size={50} color='#00aab2'/>
      <Topic>Secure payment</Topic>
      <Desc>100% secure payment</Desc>
      </Content>
      </div>

      <div css={featureStyle}>
      <Content>
      <BiSupport size={50} color='#00aab2'/>
      <Topic>24/7 support</Topic>
      <Desc>Within business days</Desc>
      </Content>
      </div>

      <div css={featureStyle}>
      <Content>
      <IoCheckmarkCircleOutline size={50} color='#00aab2'/>
      <Topic>Money back guarantee</Topic>
      <Desc>Within 30 days</Desc>
      </Content>
      </div>
    </section>
  );
};

export default Features;
