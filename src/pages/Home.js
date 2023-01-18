import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Footre, Hero, HomeBody } from "../components";
import { getUser } from "../features/userSllice";
import Favorite from "./Favorite";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getUser());
  }, []);
  return (
    <Wrapper>
      {/* <Hero /> */}
      <HomeBody />
      {/* <Footre /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  /* height: 100vh; */
  min-height: 100vh;
`;
