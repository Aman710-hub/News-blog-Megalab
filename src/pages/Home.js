import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Footre, Hero, HomeBody } from "../components";
import Favorite from "./Favorite";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  console.log("🚀 ~ Home ~ user", user);
  return (
    <Wrapper>
      {/* <Hero /> */}
      <HomeBody />
      {/* <Footre /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section``;
