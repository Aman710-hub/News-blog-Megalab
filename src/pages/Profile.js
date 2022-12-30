import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Button, ImgUpload, Item, ProfileForm } from "../components";
import { editUser, getUser } from "../features/userSllice";
import { getUserFromLocalStorage } from "../utils/localStorage";

let width = 0;
window.addEventListener("resize", () => {
  width = window.innerWidth;
  console.log(width);
});

const Profile = () => {
  // const data = useSelector((store) => store.user.isLoading);
  const data = getUserFromLocalStorage();
  console.log("🚀 ~ Profile ~ data", data);

  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: data?.name || "",
    last_name: data?.last_name || "",
    nickname: data?.nickname || "",
  });
  // const [name, setName] = useState({ name: data?.name || "" });
  // const [last_name, setLast_Name] = useState({
  //   last_name: data?.last_name || "",
  // });
  // const [nickname, setNickname] = useState({ nickname: data?.nickname || "" });

  const onSubmit = (e) => {
    e.preventDefault();
    // const { name, nickname, last_name } = value;
    // if (!name || !last_name || !nickname) {
    //   toast.error("Заполните все поля");
    //   return;
    // }
    dispatch(
      editUser({
        name: name.name,
        last_name: last_name.last_name,
        nickname: nickname.nickname,
      })
    );
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setValue({ ...value, [name]: value });
    console.log(value);
  };
  return (
    <Wrapper>
      <div className="profile_header">
        <ImgUpload />
        <ProfileForm data={data} onChange={onChange} onSubmit={onSubmit} />
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
