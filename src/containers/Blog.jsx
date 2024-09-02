/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { blog1 } from "../assets";
import { MdComment } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const blogStyle = css`
  width: 10ovw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 20px;
`;

const blogItemStyle = css`
  display: flex;
  align-items: center;
  width: 45%;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Content = styled.div`
  margin-left: 20px;
  border-radius: 10px;
  width: 50%;
  text-align: left;
`;

const Title = styled.h2`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    text-align: center;
`;
const Topic = styled.h3`
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
`;
const Desc = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 12px;
`;

const Date = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 16px;
  color: #00aab2;
`;

const Action = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 30px;
`;

const Action1 = styled.div`
font-family: "Playfair Display", serif;
font-size: 12px;
`;

const Blog = () => {
  return (
    <section>
      <Title>Blog</Title>
      <div css={blogStyle}>
      <div css={blogItemStyle}>
        <Image src={blog1} alt={"blog_img"} />
        <Content>
          <Date>Jan 27, 2020</Date>
          <Topic>
            The Great Book Debate: Reading for Knowledge or Reading for
            Pleasure?
          </Topic>
          <Desc>
            Books serve a multitude of purposes, catering to our diverse needs
            and desires. At their core, they are vessels of knowledge, allowing
            us to explore new realms, acquire valuable information, and expand
            our understanding of the world.
          </Desc>
          <Action>
            <Action1>
            <p><MdComment color="#00aab2"/> Comment</p>
            </Action1>
            <Action1><p><FaBookReader color="#00aab2"/> Read More</p></Action1>
          </Action>
        </Content>
      </div>
      <div css={blogItemStyle}>
        <Image src={blog1} alt={"blog_img"} />
        <Content>
          <Date>Jan 27, 2020</Date>
          <Topic>
            The Great Book Debate: Reading for Knowledge or Reading for
            Pleasure?
          </Topic>
          <Desc>
            Books serve a multitude of purposes, catering to our diverse needs
            and desires. At their core, they are vessels of knowledge, allowing
            us to explore new realms, acquire valuable information, and expand
            our understanding of the world.
          </Desc>
          <Action>
            <Action1>
            <p><MdComment color="#00aab2"/> Comment</p>
            </Action1>
            <Action1><p><FaBookReader color="#00aab2"/> Read More</p></Action1>
          </Action>
        </Content>
      </div>
      </div>
    </section>
  );
};

export default Blog;
