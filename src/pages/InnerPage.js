import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { Coment } from "../components";
import { getPostDitails } from "../features/news/newsSlice";
import inner_page_img from "../imges/Inner_page_img.jpg";

const InnerPage = () => {
  const dispacth = useDispatch();
  const { postId } = useParams();
  // Get data
  useEffect(() => {
    dispacth(getPostDitails({ postId }));
  }, []);
  const { postDitails } = useSelector((store) => store.news);
  console.log(postDitails.text);
  const baseUrl = `https://megalab.pythonanywhere.com/`;
  return (
    <>
      <Wrapper>
        <svg
          className="arrow"
          width="41"
          height="30"
          viewBox="0 0 41 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 15H6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 23.75L6.25 15L15 6.25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="inner_wrapper">
          <p className="data">29.11.2022</p>
          <span className="like_btn">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999V3.60999Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="card">
          <div className="card_body">
            <h3 className="title">{postDitails.title}</h3>
            <p className="card_text">{postDitails.short_desc}</p>
            <img
              src={`${baseUrl}${postDitails.image}`}
              alt="product image"
              className="product_img"
            />
            <p>{postDitails.text}</p>
            <a href="" className="share">
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
            <h3 className="title">Комментарии</h3>
          </div>
        </div>
        <Coment />
        <Coment />
      </Wrapper>
    </>
  );
};

export default InnerPage;

const Wrapper = styled.section`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  .card {
    margin-inline: 10%;
  }

  .arrow {
    margin-inline: 10%;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .card_body {
    max-width: 52.813rem;
  }

  .product_img {
    width: 100%;
    max-width: 53.812rem;
    margin-block: 25px;
  }

  .data {
    color: #858080;
    font-weight: 400;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  .inner_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 10%;
  }

  .share {
    display: block;
    width: 24px;
    margin-bottom: 50px;
    margin-top: 24px;
  }

  .card_text {
    word-wrap: break-word;
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

  /* MEDIA QUERY */
  /* 580, 1132 */

  @media (max-width: 600px) {
    .arrow {
      margin-inline: 5%;
      margin-bottom: 16px;
    }

    .inner_wrapper {
      margin-inline: 5%;
    }

    .card {
      margin-inline: 5%;
    }
  }
`;
