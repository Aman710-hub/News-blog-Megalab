import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deletePost, likePost } from "../features/news/newsSlice";
import SharePost from "./SharePost";

const ProfilePostItem = ({ id, image, title, short_desc, is_liked }) => {
  const baseUrl = `https://megalab.pythonanywhere.com/`;
  const dispacth = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);

  const removePost = () => {
    dispacth(deletePost(id));
    //  setState(!state);
  };
  return (
    <>
      <Wrapper>
        <SharePost toggleModal={toggleModal} setToggleModal={setToggleModal} />
        <div className="card">
          <img
            src={`${baseUrl}${image}`}
            alt="product image"
            className="product_img"
          />
          <div className="card_body">
            <div className="inner_wrapper">
              <p className="data">29.11.2022</p>
              <div onClick={() => removePost()}>
                <span className="trash_btn">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 7.5H6.25H26.25"
                      stroke="#A01313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5"
                      stroke="#A01313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 13.75V21.25"
                      stroke="#A01313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 13.75V21.25"
                      stroke="#A01313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <h3 className="title">{title}</h3>
            <p className="card_text">{short_desc}</p>
            <Link to={`/${id}`} className="read_more">
              Читать дальше {">>"}
            </Link>
            <a className="share" onClick={() => setToggleModal(true)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                  stroke="#858080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                  stroke="#858080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                  stroke="#858080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.59009 13.51L15.4201 17.49"
                  stroke="#858080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4101 6.51L8.59009 10.49"
                  stroke="#858080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <hr className="line" />
      </Wrapper>
    </>
  );
};

export default ProfilePostItem;

const Wrapper = styled.section`
  /* width: 100%;
  max-width: (); */
  /* max-width: 843px; */
  margin-bottom: 15px;
  margin-top: 15px;

  .card {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .trash_btn {
    cursor: pointer;
  }
  .product_img {
    margin-right: 40px;
    height: 211px;
    width: 100%;
    max-width: 255px;
    object-fit: cover;
  }

  .data {
    color: #858080;
    font-weight: 400;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
  }

  .inner_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .share {
    display: block;
    width: 24px;
    cursor: pointer;
  }

  .card_text {
    word-wrap: break-word;
    padding-right: 6rem;
  }

  .read_more {
    color: #7e5bc2;
    display: inline-block;
    text-decoration: underline;
    margin: 8px 0 17px 0;
  }

  .line {
    color: #d9d9d9;
  }

  @media (max-width: 870px) {
    .card {
      grid-template-columns: minmax(10rem, 19.813rem);
    }

    .card_text {
      padding-right: 0;
    }
    .product_img {
      margin-right: 0;
      height: 16rem;
      margin-bottom: 16px;
      max-width: 316px;
    }
  }

  @media (max-width: 1132px) {
    margin-bottom: 0;
  }
`;
