import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <Wrapper>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Wrapper>
  );
};

export default NewsList;

const Wrapper = styled.section`
  @media (max-width: 1132px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
