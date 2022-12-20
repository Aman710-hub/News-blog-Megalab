import React from "react";
import styled from "styled-components";

const Coment = () => {
  return (
    <Wrapper>
      <div className="coment_wrapper">
        <h4 className="name">Олег Петров</h4>
        <p className="text_of_coment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <p className="data">30.11.2022</p>
        <a href="" className="relay">
          Ответить
        </a>
      </div>
    </Wrapper>
  );
};

export default Coment;

const Wrapper = styled.section`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  margin-block: 24px;

  .coment_wrapper {
    max-width: 52.813rem;
    margin-inline: 10%;
  }

  p {
    color: #858080;
  }

  a {
    color: #7e5bc2;
    text-decoration: underline;
    display: inline-block;
  }

  .text_of_coment {
    margin-block: 7px;
  }

  .data {
    display: inline-block;
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    .coment_wrapper {
      margin-inline: 5%;
    }
  }
`;
