import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addPost } from "../features/news/newsSlice";
import Button from "./Button";

const AddNewPost = ({ toggleModal, setToggleModal }) => {
  const { tagList } = useSelector((store) => store.news);
  // STATE FOR SELECTED TAG

  const dispatch = useDispatch();
  // STATE FOR COLLECTING POST INFO
  const [postData, setPostData] = useState({
    title: "",
    text: "",
    image: "",
    short_desc: "",
    tag: "Не выбрано",
  });

  // ON CHANGE
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPostData({ ...postData, [name]: value });
  };

  const onPhotSelect = (e) => {
    const selectedImg = e.target.files[0];
    if (selectedImg) {
      setPostData({ ...postData, image: selectedImg });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("text", postData.text);
    data.append("title", postData.title);
    data.append("image", postData.image);
    data.append("short_desc", postData.short_desc);
    data.append("tag", postData.tag);

    dispatch(addPost(data));
  };
  return (
    <Wrapper>
      {toggleModal && (
        <div className="modal" onClick={() => setToggleModal(false)}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <div className="closeModal" onClick={() => setToggleModal(false)}>
              <svg
                // onClick={setToggleModal(false)}
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_498)">
                  <path
                    d="M22.5 7.5L7.5 22.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 7.5L22.5 22.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_498"
                    x="-4"
                    y="0"
                    width="38"
                    height="38"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_498"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_498"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="uploadImg input_wrapper">
              <p className="lablel">Обложка новости</p>
              <input
                type="file"
                className="input "
                name="image"
                onChange={onPhotSelect}
              />
            </div>
            <div className="input_wrapper">
              <label className="lablel" htmlFor="">
                Заголовок
              </label>
              <input
                type="text"
                className="input"
                name="title"
                value={postData.title}
                onChange={handleChange}
              />
            </div>
            <div className="input_wrapper">
              <label className="lablel" htmlFor="">
                Краткое описание
              </label>
              <input
                type="text"
                className="input"
                name="short_desc"
                value={postData.short_desc}
                onChange={handleChange}
              />
            </div>
            <div className="input_wrapper">
              <label className="lablel" htmlFor="">
                Текст новости
              </label>
              <textarea
                type="text"
                className="input text_input"
                name="text"
                value={postData.text}
                onChange={handleChange}
                size="50"
              />
            </div>
            <div class="input_wrapper">
              <label className="lablel">Выбрать категорию</label>
              <select
                className="input"
                name="slct"
                id="slct"
                value={postData.tag}
                onChange={(e) =>
                  setPostData({ ...postData, tag: e.target.value })
                }
              >
                {tagList?.map((item) => {
                  return <option key={item.id}>{item.name}</option>;
                })}
              </select>
            </div>
            <button className="tagBtn">#{postData.tag}</button>
            <div className="saveBtn">
              <Button
                onClick={onSubmit}
                name="Сохранить"
                maxWidth="191px"
                height="30px"
              />
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default AddNewPost;

const Wrapper = styled.section`
  .modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .content {
      background-color: #ffffff;
      width: 537px;
      height: 541px;
      border-radius: 10px;
      padding: 13px 50px 33px 49px;
      position: relative;

      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10%;
    }

    .input {
      padding: 5px;
      font-size: 16px;
      border-width: 1px;
      border-color: #e4dfdc;
      background-color: #ffffff;
      color: #000000;
      border-style: solid;
      border-radius: 5px;
      /* width: 100%; */
      /* width: 14.438rem; */
      width: 263px;
      height: 35px;
    }
    .input:focus {
      outline: none;
    }
    .imgUploadLablel {
      padding: 5px 9px;
      border: 1px #5a5a5a;
    }
    .closeModal {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
    .saveBtn {
      position: absolute;
      bottom: 33px;
      left: 30%;
      width: 100%;
    }
    .tagBtn {
      border: none;
      border-radius: 10px;
      background-color: #ffffff;
      box-shadow: 0px 0px 3px -1px #5a5a5a;
      padding: 5px 10px;
      margin-top: 15px;
    }

    .imgInput {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;

      z-index: -1;
    }

    .text_input {
      padding-bottom: 80px;
      padding-top: 10px;
      overflow: hidden;
    }
    .lablel {
      vertical-align: center;
      font-weight: 400;
    }

    .inputs {
      /* grid */
      display: grid;
      /* grid-template-columns: 1fr 1fr; */
    }
    .input_wrapper {
      display: grid;
      grid-template-columns: 174px 1fr;
      margin-top: 28px;
    }

    .imgUploadInput {
      width: 94px;
      justify-items: start;
    }
    .uderInput {
      font-size: 12px;
      color: #5a5a5a;
      /* position: absolute; */
    }

    @media (max-width: 460px) {
      .inputs {
        grid-template-columns: 1fr;
      }

      .lablel {
        width: 100%;
        position: relative;
        text-align: left;
      }
    }
  }
`;
