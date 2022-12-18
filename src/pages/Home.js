import React from "react";
import styled from "styled-components";
import {
  Footre,
  Hero,
  HomeBody,
  NewsList,
  Filter,
  Navbar,
} from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <HomeBody />
      <Footre />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section``;
