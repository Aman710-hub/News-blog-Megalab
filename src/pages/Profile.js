import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
  AddNewPost,
  Button,
  ImgUpload,
  Item,
  ProfileForm,
} from "../components";
import { getTagList } from "../features/news/newsSlice";
import { editUser, getUser } from "../features/userSllice";
import { getUserFromLocalStorage } from "../utils/localStorage";

let width = 0;
window.addEventListener("resize", () => {
  width = window.innerWidth;
  console.log(width);
});

const Profile = () => {
  const { profile_image } = useSelector((store) => store.user);
  const data = getUserFromLocalStorage();
  const [toggleModal, setToggleModal] = useState(false);

  // prevent scrolling when pop up is open
  toggleModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    name: data?.name || "",
    last_name: data?.last_name || "",
    nickname: data?.nickname || "",
    profile_image: profile_image || null,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, nickname, last_name, profile_image } = userInfo;
    if (!name || !last_name || !nickname) {
      toast.error("Заполните все поля");
      return;
    }

    dispatch(
      editUser({
        name: name,
        last_name: last_name,
        nickname: nickname,
        profile_image: profile_image,
      })
    );
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(value);
  };

  useEffect(() => {
    dispatch(getTagList());
  }, []);
  return (
    <Wrapper>
      <AddNewPost toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <div className="profile_header">
        <ImgUpload />
        <ProfileForm data={userInfo} onChange={onChange} onSubmit={onSubmit} />
      </div>
      <div className="flex_wrapper">
        <h2 className="profile_title">Мои публикации</h2>
        <Button
          onClick={() => setToggleModal(true)}
          maxWidth="191px"
          name="Новая публикация"
        />

        {/* {width > 600 ? (
        ) : (
          // <Button maxWidth="91px" name="+" />
          <Button maxWidth="191px" name="Новая публикация" />
        )} */}
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
