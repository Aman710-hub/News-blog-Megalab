import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTagList, searchByTag } from "../features/news/newsSlice";
import Button from "./Button";

const Filter = ({ toggleModal }) => {
  const [tagName, setTagName] = useState("");
  const [clicked, setClicked] = useState(false);
  console.log("🚀 ~ Filter ~ clicked", clicked);

  const { tagList } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTagList());
  }, []);

  const searchTag = (e) => {
    dispatch(searchByTag(tagName));
  };

  return (
    <Wrapper className={`${toggleModal ? "filter" : "showFilter"}`}>
      <div className="inner_wrapper">
        <h4 className="title">Фильтрация</h4>
        <div class="control-group">
          {tagList?.map((item) => {
            return (
              <div onClick={() => setClicked(!clicked)}>
                <label className="control control-checkbox">
                  {item.name}
                  <input
                    type="checkbox"
                    value={item.name}
                    onClick={(e) => setTagName(e.target.value)}
                    // disabled={clicked}
                  />
                  <div
                    // className={`${clicked ? "control_indicator" : "ci1"}`}
                    className="control_indicator"
                  ></div>
                </label>
              </div>
            );
          })}
        </div>
        <Button onClick={searchTag} name="Приминить" />
      </div>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.section`
  width: 222px;
  height: 310px;
  border-radius: 10px;
  padding: 20px 0 27px 27px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    display: none;
    /* position: absolute; */
    z-index: 10;
    left: 25%;
  }

  .title {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .control-group {
    height: 300px;
    /* overflow: scroll; */
    overflow-x: scroll;
    /* overflow: hidden; */
    margin-bottom: 10px;
  }

  .control-group::-webkit-scrollbar {
    display: none;
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

  .ci1 {
    position: absolute;
    top: 5px;
    left: 0;
    height: 21px;
    width: 21px;
    background: #ffffff;
    border: 6px solid #000000;
    border-radius: 5px;
  }
  .control:hover input ~ .control_indicator,
  .control input:focus ~ .control_indicator {
    background: #cccccc;
  }

  .control input:checked ~ .control_indicator {
    /* background: red; */
    /* background: #7e5bc2; */
    /* background: #ffffff; */
  }
  .control:hover input:not([disabled]):checked ~ .control_indicator,
  .control input:checked:focus ~ .control_indicator {
    background: #7757b5;
  }
  .control input:disabled ~ .control_indicator {
    /* background: #e6e6e6; */
    /* opacity: 0.6;
    pointer-events: none; */
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
`;
