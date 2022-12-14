import React from "react";
import styled from "styled-components";

const Button = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  border-radius: 10px;
  border: none;
  /* font-family: "Ubuntu", sans-serif; */
  color: #ffffff;
  font-size: 16px;
  background: #7e5bc2;
  text-decoration: none;
  width: 100%;
  max-width: 10.5rem;
  height: 1.875rem;
  font-weight: 500;

  :hover {
    background: #734ebd;
    text-decoration: none;
    cursor: pointer;
  }
`;
