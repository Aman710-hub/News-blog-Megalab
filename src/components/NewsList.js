import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllPosts } from "../features/news/newsSlice";
import HomePageItem from "./HomePageItem";

const NewsList = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getAllPosts());
  }, []);
  return (
    <Wrapper>
      <HomePageItem />
      <HomePageItem />
      <HomePageItem />
      <HomePageItem />
      <HomePageItem />
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
