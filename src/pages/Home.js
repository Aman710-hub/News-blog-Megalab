import React from "react";
import styled from "styled-components";
import { Footre, Hero, HomeBody } from "../components";
import Favorite from "./Favorite";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <HomeBody />
      <Footre />
      <Favorite />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section``;
