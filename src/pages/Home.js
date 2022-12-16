import React from "react";
import styled from "styled-components";
import { Footre, Navbar, HomeBody, NewsList, Filter } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />

      <HomeBody />
      <Footre />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section``;
