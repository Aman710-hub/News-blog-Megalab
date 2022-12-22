import React from "react";
import styled from "styled-components";
import { Button, ImgUpload, Item } from "../components";

const Profile = () => {
  return (
    <Wrapper>
      <ImgUpload />
      <div className="flex_wrapper">
        <h2 className="profile_title">Мои публикации</h2>
        <Button width="330px" name="Новая публикация" />
      </div>
      <div className="grid_layout">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.section`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;

  .flex_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 45px;
    margin-inline: 10%;
  }

  .profile_title {
    font-weight: 500;
    font-size: 48px;
  }

  .grid_layout {
    display: grid;
    place-items: center;
    /* grid-template-columns: 1fr; */
    margin-inline: 10%;
    margin-block: 48px 103px;
  }

  @media (max-width: 870px) {
    .grid_layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      margin-inline: 5%;
    }

    .profile_title {
      margin-inline: 5%;
    }
  }

  @media (max-width: 600px) {
    .grid_layout {
      grid-template-columns: 1fr;
    }
  }
`;
