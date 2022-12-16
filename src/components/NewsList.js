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
    gap: 3rem;
  }

  @media (max-width: 900px) {
    /* grid-template-columns: 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(317px, 1fr));
    gap: 1rem;

    justify-content: center;
    justify-items: center;
  }
`;
