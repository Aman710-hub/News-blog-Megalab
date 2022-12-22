import React from "react";
import styled from "styled-components";
import img from "../imges/Proct_img.jpg";
import Button from "./Button";
import ProfileForm from "./ProfileForm";
const ImgUpload = () => {
  return (
    <Wrapper>
      <img src={img} alt="Avatar" className="avatar"></img>
      <input
        type="file"
        name="file"
        className="input"
        accept="image/*"
        id="file"
      />
      <label htmlFor="file" className="lable">
        Добавить фото
      </label>
      <p>Удалить</p>

      {/* <ProfileForm /> */}
    </Wrapper>
  );
};

export default ImgUpload;

const Wrapper = styled.section`
  .avatar {
    vertical-align: middle;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
