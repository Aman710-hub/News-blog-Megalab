import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editUser, getUser } from "../features/userSllice";
import { updateProfileImg } from "../features/userSllice";
import { getUserFromLocalStorage } from "../utils/localStorage";

const ImgUpload = ({ setImg, img }) => {
  const baseUrl = `https://megalab.pythonanywhere.com/`;

  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState(null);
  const data = getUserFromLocalStorage();

  const imggg = new Blob([data.profile_image]);

  const onFileSelect = (e) => {
    if (e.target.files.leghth !== 0) {
      setProfileImg(URL.createObjectURL(e.target.files[0]));
      setImg(e.target.files[0]);
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Wrapper>
      {profileImg || data.profile_image ? (
        <img
          src={profileImg || `${baseUrl}${data.profile_image}`}
          className="avatar"
        ></img>
      ) : (
        <div>
          <img src="" className="avatar"></img>
          <svg
            className="defaul_img "
            width="115"
            height="115"
            viewBox="0 0 115 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M91.0417 14.375H23.9583C18.6656 14.375 14.375 18.6656 14.375 23.9583V91.0417C14.375 96.3344 18.6656 100.625 23.9583 100.625H91.0417C96.3344 100.625 100.625 96.3344 100.625 91.0417V23.9583C100.625 18.6656 96.3344 14.375 91.0417 14.375Z"
              stroke="#D8D5D5"
              stroke-width="9.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M40.7295 47.9167C44.699 47.9167 47.917 44.6987 47.917 40.7292C47.917 36.7596 44.699 33.5417 40.7295 33.5417C36.7599 33.5417 33.542 36.7596 33.542 40.7292C33.542 44.6987 36.7599 47.9167 40.7295 47.9167Z"
              stroke="#D8D5D5"
              stroke-width="9.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M100.625 71.875L76.6663 47.9167L23.958 100.625"
              stroke="#D8D5D5"
              stroke-width="9.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}

      {/* deafaul img */}

      <input
        type="file"
        name="file"
        className="input"
        accept="image/*"
        id="file"
        onChange={onFileSelect}
      />
      <div className="flex-wr">
        <label htmlFor="file" className="lable">
          Добавить фото{" "}
          <svg
            className="icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66699 6.66667L8.00033 10L11.3337 6.66667"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 10V2"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <p onClick={() => setProfileImg(null)}>
          Удалить{" "}
          <svg
            className="icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4H3.33333H14"
              stroke="#A01313"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6663 3.99999V13.3333C12.6663 13.6869 12.5259 14.0261 12.2758 14.2761C12.0258 14.5262 11.6866 14.6667 11.333 14.6667H4.66634C4.31272 14.6667 3.97358 14.5262 3.72353 14.2761C3.47348 14.0261 3.33301 13.6869 3.33301 13.3333V3.99999M5.33301 3.99999V2.66666C5.33301 2.31304 5.47348 1.9739 5.72353 1.72385C5.97358 1.4738 6.31272 1.33333 6.66634 1.33333H9.33301C9.68663 1.33333 10.0258 1.4738 10.2758 1.72385C10.5259 1.9739 10.6663 2.31304 10.6663 2.66666V3.99999"
              stroke="#A01313"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66699 7.33333V11.3333"
              stroke="#A01313"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33301 7.33333V11.3333"
              stroke="#A01313"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>

      {/* <ProfileForm /> */}
    </Wrapper>
  );
};

export default ImgUpload;

const Wrapper = styled.section`
  width: 16rem;
  margin-right: 26px;
  position: relative;

  .avatar {
    padding: 0px;
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #e8e8e8;
  }

  .defaul_img {
    position: absolute;
    top: 41px;
    left: 42px;
  }

  .lable {
    margin-right: 7px;
  }

  .input {
    display: none;
  }
  .icon {
    margin-left: 4px;
  }
  .flex-wr {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    margin-top: 14px;
  }

  @media (max-width: 580px) {
    margin-left: 5%;
    width: 10rem;
    margin-right: 0;
    font-size: 14px;

    .avatar {
      padding: 0px;
      object-fit: cover;
      width: 125px;
      height: 125px;
      border-radius: 50%;
      background-color: #e8e8e8;
    }

    .flex-wr {
      flex-direction: column;
    }

    .lable {
      margin-bottom: 14px;
    }
  }
`;
