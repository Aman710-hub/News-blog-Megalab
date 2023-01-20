import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
  AddNewPost,
  Button,
  ImgUpload,
  ProfileForm,
  ProfilePostItem,
} from "../components";
import Loader from "../components/Loader";
import { getAuthor, getTagList } from "../features/news/newsSlice";
import { editUser, getUser } from "../features/userSllice";
import { getUserFromLocalStorage } from "../utils/localStorage";

const Profile = () => {
  const dispatch = useDispatch();
  const { myPosts, isLoading } = useSelector((store) => store.news);
  const data = getUserFromLocalStorage();
  const [toggleModal, setToggleModal] = useState(false);
  const [img, setImg] = useState(null);

  // prevent scrolling when pop up is open
  toggleModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const [CollectuserInfo, setCollectUserInfo] = useState({
    name: data?.name || "",
    last_name: data?.last_name || "",
    nickname: data?.nickname || "",
    profile_image: data.profile_image,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, nickname, last_name, profile_image } = CollectuserInfo;
    if (!name || !last_name || !nickname) {
      toast.error("Заполните все поля");
      return;
    }
    const userData = new FormData();
    userData.append("name", name);
    userData.append("last_name", last_name);
    userData.append("nickname", nickname);
    userData.append("profile_image", img);
    dispatch(editUser(userData));
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCollectUserInfo({ ...CollectuserInfo, [name]: value });
  };

  useEffect(() => {
    dispatch(getTagList());
    dispatch(getAuthor(data.nickname));
    // dispatch(getAllPosts())
  }, []);

  return (
    <Wrapper>
      <AddNewPost toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <div className="profile_header">
        <ImgUpload setImg={setImg} img={img} />
        <ProfileForm
          data={CollectuserInfo}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex_wrapper">
        <h2 className="profile_title">Мои публикации</h2>
        <Button
          onClick={() => setToggleModal(true)}
          maxWidth="191px"
          name="Новая публикация"
        />
      </div>
      <div className="grid_layout">
        {myPosts?.map((item) => {
          const { id, title, image, is_liked, short_desc } = item;
          return (
            <ProfilePostItem
              key={id}
              image={image}
              title={title}
              short_desc={short_desc}
              id={id}
              is_liked={is_liked}
            />
          );
        })}
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
  min-height: 100vh;

  .wrapper1 {
    width: 1px;
    margin-inline: auto;
    margin-top: 150px;
  }

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
    /* display: grid; */
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
