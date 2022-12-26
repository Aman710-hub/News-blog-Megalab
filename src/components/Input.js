import React from "react";
import styled from "styled-components";

const Input = ({ lable, type, name, value, handleChange }) => {
  return (
    <Wrapper>
      <div className="form">
        <div className="inputs">
          <label className="lablel">{lable}</label>
          <div className="wrapper">
            <input
              className="input"
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
            />
            {lable === "Пароль" ? (
              <p className="uderInput">Лимит на символы</p>
            ) : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.section`
  margin-bottom: 20px;
  .form {
    width: 100%;
  }
  .lablel {
    vertical-align: center;
    font-weight: 400;
    /* display: block; */
  }

  .inputs {
    /* grid */
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    /* width: 100%; */
    width: 14.438rem;
    height: 39px;
  }
  .input:focus {
    outline: none;
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
`;
