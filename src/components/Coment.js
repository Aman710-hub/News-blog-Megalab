import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { commentReplay } from "../features/news/newsSlice";
import Button from "./Button";
import CommentReply from "./CommentReply";

const Coment = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const [showReplay, setShowReplay] = useState({
    parentComment: false,
    child: false,
  });
  const [replayData, setReplayData] = useState({
    comment: "",
    commentChild: "",
    post: postId,
    parent: comment.id,
  });
  const [s, setS] = useState(false);
  const submitReplay = (e) => {
    e.preventDefault();
    const data1 = new FormData();
    data1.append("text", replayData.comment);
    data1.append("post", replayData.post);
    data1.append("parent", replayData.parent);
    dispatch(commentReplay(data1));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setReplayData({ ...replayData, [name]: value });
  };

  return (
    <Wrapper>
      <div className="coment_wrapper">
        <h4 className="name">
          {comment.user.name} {comment.user.last_name}
        </h4>
        <p className="text_of_coment">{comment.text}</p>
        <p className="data">30.11.2022</p>
        <p
          className="replay_btn"
          onClick={() =>
            setShowReplay({
              ...showReplay,
              parentComment: !showReplay.parentComment,
            })
          }
        >
          Ответить
        </p>
        {showReplay.parentComment && (
          <div style={{ marginTop: "7px" }}>
            <label className="replayLable">Вы</label>
            <input
              className="replayInput"
              type="text"
              value={replayData.comment}
              name="comment"
              onChange={handleChange}
            />
            <Button name="Ответить" maxWidth="128px" onClick={submitReplay} />
          </div>
        )}
        {comment.child.map((item) => {
          return <CommentReply data={item} />;
        })}
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
