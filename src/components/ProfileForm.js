import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const ProfileForm = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <div className="inputs">
          <label className="lablel">Фамилия</label>
          <div className="wrapper">
            <input className="input" type="text" />
            <svg
              className="edit_icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_319_899)">
                <path
                  d="M7.33301 2.66666H2.66634C2.31272 2.66666 1.97358 2.80713 1.72353 3.05718C1.47348 3.30723 1.33301 3.64637 1.33301 3.99999V13.3333C1.33301 13.6869 1.47348 14.0261 1.72353 14.2761C1.97358 14.5262 2.31272 14.6667 2.66634 14.6667H11.9997C12.3533 14.6667 12.6924 14.5262 12.9425 14.2761C13.1925 14.0261 13.333 13.6869 13.333 13.3333V8.66666"
                  stroke="#5A5A5A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z"
                  stroke="#5A5A5A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_319_899">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </form>
      <form action="" className="form midle">
        <div className="inputs">
          <label className="lablel">Имя</label>
          <div className="wrapper">
            <input className="input" type="text" />
            <svg
              className="edit_icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_319_899)">
                <path
                  d="M7.33301 2.66666H2.66634C2.31272 2.66666 1.97358 2.80713 1.72353 3.05718C1.47348 3.30723 1.33301 3.64637 1.33301 3.99999V13.3333C1.33301 13.6869 1.47348 14.0261 1.72353 14.2761C1.97358 14.5262 2.31272 14.6667 2.66634 14.6667H11.9997C12.3533 14.6667 12.6924 14.5262 12.9425 14.2761C13.1925 14.0261 13.333 13.6869 13.333 13.3333V8.66666"
                  stroke="#5A5A5A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z"
                  stroke="#5A5A5A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_319_899">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </form>
      <form action="" className="form">
        <div className="inputs">
          <label className="lablel">Никнейм</label>
          <div className="wrapper">
            <input className="input" type="text" />
            <svg
              className="edit_icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_319_899)">
                <path
                  d="M7.33301 2.66666H2.66634C2.31272 2.66666 1.97358 2.80713 1.72353 3.05718C1.47348 3.30723 1.33301 3.64637 1.33301 3.99999V13.3333C1.33301 13.6869 1.47348 14.0261 1.72353 14.2761C1.97358 14.5262 2.31272 14.6667 2.66634 14.6667H11.9997C12.3533 14.6667 12.6924 14.5262 12.9425 14.2761C13.1925 14.0261 13.333 13.6869 13.333 13.3333V8.66666"
                  stroke="#5A5A5A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z"
                  stroke="#5A5A5A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_319_899">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </form>
      <div className="btn_wrapper">
        <Button name="Сохранить" maxWidth="128px" height="38px" />
      </div>
    </Wrapper>
  );
};

export default ProfileForm;

const Wrapper = styled.section`
  width: 100%;

  .btn_wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }

  .midle {
    margin-block: 16px;
  }
  .wrapper {
    position: relative;
  }
  .edit_icon {
    position: absolute;
    right: 8px;
    top: 13px;
  }
  .form {
    width: 100%;
  }
  .lablel {
    /* vertical-align: center; */
    font-weight: 400;
    display: block;
    font-size: 16px;
  }

  .inputs {
    /* grid */
    display: grid;
    grid-template-columns: 90px 1fr;
    /* grid-template-columns: 1fr; */
    align-items: center;
  }

  .input {
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
    border-color: #e4dfdc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 10px;
    width: 100%;
    max-width: 272px;
    min-width: 170px;
    height: 39px;
    padding-inline: 10px;
  }
  .input:focus {
    outline: none;
  }

  .uderInput {
    font-size: 12px;
    color: #5a5a5a;
    /* position: absolute; */
  }

  @media (max-width: 636px) {
    margin-right: 5%;

    .btn_wrapper {
      margin-top: 16px;
    }
    .midle {
      margin-block: 40px;
    }
    .inputs {
      grid-template-columns: 1fr;
    }

    .lablel {
      width: 100%;
      position: relative;
      text-align: left;
      font-size: 14px;
      font-weight: 400;
    }

    .input {
      margin-left: 0;
    }

    .edit_icon {
      right: 8px;
    }
  }
`;
