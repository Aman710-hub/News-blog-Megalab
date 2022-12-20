import React from "react";
import styled from "styled-components";
import { Footre, Item, Navbar } from "../components";

const Favorite = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <h2 className="Favorit_page_title">Избранные новости</h2>
      <div className="grid_layout">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      {/* <Footre /> */}
    </Wrapper>
  );
};

export default Favorite;

const Wrapper = styled.section`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;

  .Favorit_page_title {
    margin-block: 45px;
    font-weight: 500;
    font-size: 48px;
    margin-inline: 10%;
  }

  .grid_layout {
    display: grid;
    place-items: center;
    /* grid-template-columns: 1fr; */
    margin-inline: 10%;
  }
  @media (max-width: 870px) {
    /* margin-inline: 5%; */
    .grid_layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      margin-inline: 5%;
    }

    .grid_layout {
      margin-inline: 5%;
    }
  }

  @media (max-width: 600px) {
    .grid_layout {
      grid-template-columns: 1fr;
    }
  }
`;
