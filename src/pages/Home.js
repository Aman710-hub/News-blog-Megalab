import React from "react";
import styled from "styled-components";
import { Footre, Navbar } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <div>Home</div>
      <Footre />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section``;
