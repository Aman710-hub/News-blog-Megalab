import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="shapes-6"></div>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.section`
  .shapes-6 {
    width: 40px;
    height: 40px;
    display: grid;
    animation: sh6-0 1.5s infinite linear;
  }
  .shapes-6:before,
  .shapes-6:after {
    content: "";
    grid-area: 1/1;
    background: #514b82;
    animation: sh6-1 1.5s infinite linear, sh6-2 1.5s infinite linear;
  }
  .shapes-6:after {
    --s: -1;
    animation-direction: reverse;
  }

  @keyframes sh6-0 {
    0%,
    9%,
    91%,
    100% {
      background: #514b82;
    }
    10%,
    90% {
      background: #0000;
    }
  }
  @keyframes sh6-1 {
    0%,
    33% {
      clip-path: polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%);
    }
    66%,
    100% {
      clip-path: polygon(50% 0, 50% 100%, 50% 0, 100% 100%, 0 100%);
    }
  }
  @keyframes sh6-2 {
    0%,
    10%,
    90%,
    100% {
      transform: scale(var(--s, 1)) translateY(0);
    }
    33%,
    66% {
      transform: scale(var(--s, 1)) translateY(50%);
    }
  }
`;
