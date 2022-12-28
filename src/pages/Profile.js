import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Button, ImgUpload, Item, ProfileForm } from "../components";
import { getUser } from "../features/userSllice";
import { getUserFromLocalStorage } from "../utils/localStorage";

let width = 0;
window.addEventListener("resize", () => {
  width = window.innerWidth;
  console.log(width);
});
const Profile = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getUser());
    toast.success("hiiiii");
    // const user = getUserFromLocalStorage();
  }, []);
  // const userData = useSelector((store) => store.user.userData);

  // console.log("🚀 ~ Profile ~ user", user);
  return (
    <Wrapper>
      <div className="profile_header">
        <ImgUpload />
        <ProfileForm data={getUserFromLocalStorage()} />
      </div>
      <div className="flex_wrapper">
        <h2 className="profile_title">Мои публикации</h2>
        {width > 600 ? (
          <Button maxWidth="191px" name="Новая публикация" />
        ) : (
          // <Button maxWidth="91px" name="+" />
          <Button maxWidth="191px" name="Новая публикация" />
        )}
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
  margin-top: 50px;

  .flex_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 45px;
    margin-inline: 10%;
  }

  .profile_header {
    display: grid;
    grid-auto-flow: column;
    /* justify-content: space-between; */
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 50%;
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
      font-size: 34px;
    }
  }

  @media (max-width: 636px) {
    margin-top: 42px;
    .flex_wrapper {
      margin-inline: 5%;
    }
    .profile_title {
      font-size: 24px;
    }
    .profile_header {
      width: 85%;
    }
  }

  @media (max-width: 600px) {
    .grid_layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 580px) {
    .profile_header {
      margin-inline: 5%;
    }
  }
`;
