import React from "react";
import styled from "styled-components";

const Button = ({ name, maxWidth, height }) => {
  return <Wrapper style={{ maxWidth, height }}>{name}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  background: #7e5bc2;
  text-decoration: none;
  width: 100%;
  /* height: 1.875rem; */
  font-weight: 500;
  padding-block: 3px;
  :hover {
    background: #734ebd;
    text-decoration: none;
    cursor: pointer;
  }
`;
