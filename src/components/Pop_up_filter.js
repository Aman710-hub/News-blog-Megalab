import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Pop_up_filter = ({ toggleModal, setToggleModal }) => {
  console.log(toggleModal);
  return (
    <Wrapper>
      {toggleModal && (
        <div className="modal" onClick={() => setToggleModal(false)}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <h4 className="title">Фильтрация</h4>
            <div class="control-group">
              <label class="control control-checkbox">
                Спорт
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                Политика
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                Звезды
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                Искусство
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                Мода
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
            </div>
            <div onClick={() => setToggleModal(false)}>
              <Button name="Приминить" />
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Pop_up_filter;

const Wrapper = styled.section`
  .modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;

    .content {
      background-color: #ffffff;
      width: 222px;
      height: 310px;
      border-radius: 10px;
      padding: 20px 0 27px 27px;

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

      .control {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 11px;
        padding-top: 3px;
        cursor: pointer;
        font-size: 16px;
      }

      .control:last-child {
        margin-bottom: 24px;
      }
      .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
      .control_indicator {
        position: absolute;
        top: 5px;
        left: 0;
        height: 21px;
        width: 21px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 5px;
      }
      .control:hover input ~ .control_indicator,
      .control input:focus ~ .control_indicator {
        background: #cccccc;
      }

      .control input:checked ~ .control_indicator {
        background: #7e5bc2;
      }
      .control:hover input:not([disabled]):checked ~ .control_indicator,
      .control input:checked:focus ~ .control_indicator {
        background: #7757b5;
      }
      .control input:disabled ~ .control_indicator {
        background: #e6e6e6;
        opacity: 0.6;
        pointer-events: none;
      }
      .control_indicator:after {
        box-sizing: unset;
        content: "";
        position: absolute;
        display: none;
      }
      .control input:checked ~ .control_indicator:after {
        display: block;
      }
      .control-checkbox .control_indicator:after {
        left: 8px;
        top: 3px;
        width: 3px;
        height: 8px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
      .control-checkbox input:disabled ~ .control_indicator:after {
        border-color: #7b7b7b;
      }
      .control-checkbox .control_indicator::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 4.5rem;
        height: 4.5rem;
        margin-left: -1.3rem;
        margin-top: -1.3rem;
        background: #2aa1c0;
        border-radius: 3rem;
        opacity: 0.6;
        z-index: 99999;
        transform: scale(0);
      }
      @keyframes s-ripple {
        0% {
          transform: scale(0);
        }
        20% {
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(1);
        }
      }
      @keyframes s-ripple-dup {
        0% {
          transform: scale(0);
        }
        30% {
          transform: scale(1);
        }
        60% {
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(1);
        }
      }
      .control-checkbox input + .control_indicator::before {
        animation: s-ripple 250ms ease-out;
      }
      .control-checkbox input:checked + .control_indicator::before {
        animation-name: s-ripple-dup;
      }
    }
  }
`;
