import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const CommentReply = ({ data }) => {
  const [showInput, setInput] = useState(false);
  return (
    <Wrapper>
      <div className="comment_replay">
        <h4 className="name">
          {data.user.name} {data.user.last_name}
        </h4>
        <p className="text_of_coment">{data.text}</p>
        <p className="data">30.11.2022</p>
        <p className="replay_btn" onClick={() => setInput(!showInput)}>
          Ответить
        </p>
        {showInput && (
          <div style={{ marginTop: "7px" }}>
            <label className="replayLable">Вы</label>
            <input type="text" className="replayInput" name="commentChild" />
            <Button name="Ответить" maxWidth="128px" />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CommentReply;
const Wrapper = styled.section`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  margin-block: 24px;

  .comment_replay {
    margin-left: 56px;
    margin-top: 25px;
  }
  .replayLable {
    font-size: 18px;
    font-weight: 500;
  }
  .replayInput {
    width: 100%;
    max-width: 247px;
    border-radius: 10px;
    border-color: #d9d9d9;
    border-width: 1px;
    border-style: solid;
    margin-inline: 14px;
    padding-left: 5px;
  }
  p {
    color: #858080;
  }

  .replay_btn {
    color: #7e5bc2;
    text-decoration: underline;
    display: inline-block;
    cursor: pointer;
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
