import React from "react";
import styled from "styled-components";
import Button from "./Button";
import {
  TelegramShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import { toast } from "react-toastify";

const SharePost = ({ toggleModal, setToggleModal }) => {
  const url = encodeURI(document.location.href);
  return (
    <Wrapper>
      {toggleModal && (
        <div className="modal" onClick={() => setToggleModal(false)}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <div className="header">
              <p>Поделиться</p>
              <span className="close_btn" onClick={() => setToggleModal(false)}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7696 5.88374L5.84717 15.8062"
                    stroke="black"
                    stroke-width="1.65375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.84717 5.88374L15.7696 15.8062"
                    stroke="black"
                    stroke-width="1.65375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="social_icons">
              <TelegramShareButton url={url} quote="Check this out">
                <span className="icon">
                  <svg
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25.0362"
                      cy="25.4186"
                      r="24.8062"
                      fill="#FBF9FB"
                    />
                    <g clipPath="url(#clip0_1036_175)">
                      <path
                        d="M32.9977 19.2639C32.7449 19.0324 32.3857 18.9552 32.0601 19.0625L18.2462 23.6161C17.8697 23.7402 17.6144 24.0763 17.5958 24.4722C17.5772 24.8682 17.7998 25.2267 18.163 25.3856L21.5792 26.8804C21.5959 26.9577 22.5766 31.5063 22.61 31.6609C22.6528 31.8595 22.7536 32.0364 22.9671 32.0908C23.1831 32.1458 23.3357 32.0278 23.4969 31.9071C23.5865 31.84 26.032 30.0088 26.032 30.0088L28.9958 32.4341C29.1685 32.5754 29.3795 32.6491 29.5946 32.6491C29.697 32.6491 29.8004 32.6324 29.901 32.5983C30.2129 32.4925 30.4442 32.2379 30.5196 31.9173L33.2802 20.1803C33.3586 19.8466 33.2504 19.4955 32.9977 19.2639ZM23.7177 27.7369C23.716 27.7409 23.7143 27.7454 23.7128 27.7508L23.1413 29.7474L22.5036 26.7895L26.8889 24.353L23.8229 27.5589C23.7746 27.6094 23.739 27.6704 23.7177 27.7369ZM23.8991 30.4532L24.1586 29.5463L24.4069 28.6789L25.2965 29.4069L23.8991 30.4532ZM32.382 19.969L29.6214 31.706C29.62 31.7118 29.6182 31.7199 29.6047 31.7244C29.5913 31.729 29.5848 31.7238 29.5802 31.72L26.3371 29.0661C26.337 29.0661 26.3369 29.066 26.3368 29.0659L24.8342 27.8363L29.6617 22.7887C29.8193 22.6239 29.8328 22.3685 29.6934 22.188C29.554 22.0073 29.3035 21.9558 29.1042 22.0666L21.9561 26.0381L18.5328 24.5403C18.5224 24.5357 18.5167 24.5332 18.5175 24.5156C18.5183 24.498 18.5243 24.496 18.5351 24.4924L32.349 19.9388C32.3557 19.9366 32.3632 19.9341 32.3743 19.9442C32.3854 19.9544 32.3836 19.9621 32.382 19.969Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1036_175">
                        <rect
                          width="15.7106"
                          height="15.7106"
                          fill="white"
                          transform="translate(17.5947 17.9768)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </TelegramShareButton>
              <TwitterShareButton url={url} quote="Check this out">
                <span className="icon">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25.628"
                      cy="25.4186"
                      r="24.8062"
                      fill="#FBF9FB"
                    />
                    <g clipPath="url(#clip0_1036_167)">
                      <path
                        d="M33.2417 19.9406C32.6149 20.3827 31.9208 20.7209 31.1862 20.9421C30.792 20.4888 30.268 20.1675 29.6852 20.0217C29.1025 19.8759 28.4889 19.9126 27.9277 20.1268C27.3664 20.341 26.8844 20.7224 26.547 21.2195C26.2096 21.7165 26.033 22.3052 26.041 22.9059V23.5606C24.8906 23.5904 23.7507 23.3352 22.7228 22.8179C21.6949 22.3005 20.8109 21.5369 20.1495 20.5952C20.1495 20.5952 17.5311 26.4867 23.4226 29.1051C22.0744 30.0202 20.4684 30.4791 18.8403 30.4143C24.7318 33.6873 31.9325 30.4143 31.9325 22.8863C31.9319 22.704 31.9144 22.5221 31.8801 22.343C32.5482 21.6841 33.0197 20.8523 33.2417 19.9406V19.9406Z"
                        stroke="black"
                        stroke-width="1.24031"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1036_167">
                        <rect
                          width="15.7106"
                          height="15.7106"
                          fill="white"
                          transform="translate(18.186 17.9768)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </TwitterShareButton>
              <FacebookShareButton url={url} quote="Check this out">
                <span className="icon">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="30" cy="30" r="30" fill="#FBF9FB" />
                    <path
                      d="M35.2501 22.5833H32.8751C31.8253 22.5833 30.8184 23.0004 30.0761 23.7427C29.3338 24.485 28.9167 25.4919 28.9167 26.5417V28.9167H26.5417V32.0833H28.9167V38.4167H32.0834V32.0833H34.4584L35.2501 28.9167H32.0834V26.5417C32.0834 26.3317 32.1668 26.1303 32.3153 25.9819C32.4638 25.8334 32.6651 25.75 32.8751 25.75H35.2501V22.5833Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </FacebookShareButton>
              <WhatsappShareButton url={url} quote="Check this out">
                <span className="icon">
                  <svg
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="24.8116"
                      cy="25.4186"
                      r="24.8062"
                      fill="#FBF9FB"
                    />
                    <g clip-path="url(#clip0_1036_182)">
                      <path
                        d="M28.8297 27.3422L28.8239 27.3913C27.3844 26.6739 27.2338 26.5783 27.0479 26.8572C26.9189 27.0503 26.5432 27.4882 26.43 27.6178C26.3154 27.7455 26.2015 27.7553 26.0071 27.6669C25.8107 27.5687 25.1803 27.3625 24.4341 26.6948C23.8528 26.1744 23.4626 25.5362 23.3474 25.3398C23.1556 25.0086 23.5569 24.9614 23.9221 24.2702C23.9876 24.1327 23.9542 24.0247 23.9058 23.9271C23.8567 23.829 23.4659 22.8667 23.3022 22.4831C23.1451 22.1008 22.9834 22.1492 22.8623 22.1492C22.4853 22.1165 22.2097 22.1217 21.9668 22.3744C20.9103 23.5357 21.1767 24.7336 22.0807 26.0075C23.8573 28.3327 24.8039 28.7608 26.5347 29.3552C27.0021 29.5037 27.4282 29.4828 27.7654 29.4344C28.1411 29.3748 28.922 28.9624 29.085 28.5009C29.252 28.0394 29.252 27.6564 29.2029 27.5681C29.1544 27.4797 29.0261 27.4306 28.8297 27.3422Z"
                        fill="black"
                      />
                      <path
                        d="M30.8017 20.2344C25.7684 15.3687 17.4385 18.8976 17.4353 25.7619C17.4353 27.1339 17.7946 28.4719 18.4794 29.6535L17.3691 33.6872L21.5161 32.6058C26.6908 35.401 33.0771 31.6893 33.0797 25.7658C33.0797 23.6868 32.268 21.7301 30.7919 20.2599L30.8017 20.2344ZM31.7718 25.7442C31.7679 30.7408 26.2829 33.8613 21.9449 31.311L21.7092 31.1709L19.2544 31.8091L19.9123 29.4231L19.7558 29.1776C17.0562 24.8801 20.1578 19.2636 25.2716 19.2636C27.0089 19.2636 28.6395 19.9411 29.8676 21.1685C31.095 22.3854 31.7718 24.016 31.7718 25.7442Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1036_182">
                        <rect
                          width="15.7106"
                          height="15.7106"
                          fill="white"
                          transform="translate(17.3691 17.9768)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </WhatsappShareButton>
            </div>
            <div className="copy_to_board">
              <p>Короткая ссылка</p>
              <div className="input_wrapper">
                <input type="text" value={url} />
                <span
                  className="copy_icon"
                  onClick={() => {
                    navigator.clipboard.writeText(url);
                    toast.success("Ссылка скопировано");
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1036_192)">
                      <path
                        d="M12.9072 5.86049H7.32576C6.64075 5.86049 6.08545 6.41579 6.08545 7.1008V12.6822C6.08545 13.3672 6.64075 13.9225 7.32576 13.9225H12.9072C13.5922 13.9225 14.1475 13.3672 14.1475 12.6822V7.1008C14.1475 6.41579 13.5922 5.86049 12.9072 5.86049Z"
                        stroke="black"
                        stroke-width="1.24031"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.60461 9.58141H2.98445C2.6555 9.58141 2.34002 9.45073 2.10742 9.21813C1.87482 8.98553 1.74414 8.67005 1.74414 8.3411V2.7597C1.74414 2.43075 1.87482 2.11528 2.10742 1.88267C2.34002 1.65007 2.6555 1.51939 2.98445 1.51939H8.56585C8.8948 1.51939 9.21027 1.65007 9.44288 1.88267C9.67548 2.11528 9.80616 2.43075 9.80616 2.7597V3.37986"
                        stroke="black"
                        stroke-width="1.24031"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1036_192">
                        <rect
                          width="14.8837"
                          height="14.8837"
                          fill="white"
                          transform="translate(0.503906 0.279083)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SharePost;

const Wrapper = styled.section`
  .modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;

    .close_btn {
      position: absolute;
      right: 10px;
      top: 12px;
      cursor: pointer;
    }
    .input_wrapper {
      position: relative;
    }
    .input_wrapper .copy_icon {
      position: absolute;
      bottom: 1px;
      right: 41px;
      cursor: pointer;
    }
    .copy_to_board p {
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 17px;
    }
    .copy_to_board input {
      width: 100%;
      max-width: 327px;
      height: 40px;
      border-radius: 10px;
      background: #fbf9fb;
      border: none;
      padding-left: 20px;
    }
    .social_icons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      margin-bottom: 9px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header p {
      font-weight: 500;
      font-size: 16px;
    }
    a {
      color: black;
      display: block;
    }

    .content {
      background-color: #ffffff;
      width: 387px;
      height: 240px;
      border-radius: 10px;
      padding: 16px 16px 21px 16px;
      position: relative;

      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10%;

      .title {
        margin-bottom: 10px;
        font-size: 18px;
      }

      /* ------------------------------- */
    }
  }
`;
