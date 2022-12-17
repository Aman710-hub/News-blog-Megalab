import React, { useState } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import NewsList from "./NewsList";

const HomeBody = () => {
  const [toggleModal, setToggleModal] = useState(true);
  return (
    <Wrapper className="container">
      <span onClick={() => setToggleModal(!toggleModal)} className="slider">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_355_1586)">
            <path
              d="M21 20L14 20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 20L3 20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12L12 12"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12L3 12"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 4L16 4"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 4L3 4"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 23L14 17"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 15L8 9"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 7L16 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_355_1586">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 24) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      <div className="iner_wrapper">
        <div className="wrapper">
          <Filter toggleModal={toggleModal} />
        </div>
        <span className="for_spacing"></span>
        <NewsList />
      </div>
    </Wrapper>
  );
};

export default HomeBody;

const Wrapper = styled.section`
  position: relative;
  margin-top: 46px;

  .iner_wrapper {
    margin-inline: 10%;
    display: grid;
    /* grid-template-columns: 222px 100px auto; */
    grid-template-columns: 222px 8.8% auto;
  }

  .slider {
    position: absolute;
    right: 10%;
    margin-top: -33px;
    cursor: pointer;
  }

  .showSlider {
    display: block;
  }

  @media (max-width: 900px) {
    margin-top: 56px;
  }

  @media (max-width: 1132px) {
    .iner_wrapper {
      margin-inline: 5%;
    }
  }
  @media (max-width: 1026px) {
    .wrapper {
      display: none;
    }

    .for_spacing {
      display: none;
    }
    .iner_wrapper {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  @media (min-width: 1026px) {
    .slider {
      display: none;
    }
  }
`;
