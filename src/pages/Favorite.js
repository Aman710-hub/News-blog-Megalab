import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Footre, Item, Navbar } from "../components";
import { getLikedPosts } from "../features/news/newsSlice";

const Favorite = () => {
  const dispacth = useDispatch();
  const { likedPostList } = useSelector((store) => store.news);
  useEffect(() => {
    dispacth(getLikedPosts());
  }, []);
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <h2 className="Favorit_page_title">Избранные новости</h2>
      <div className="grid_layout">
        {likedPostList.map((item) => {
          const { id, title, image, is_liked, short_desc } = item;
          return (
            <Item
              key={id}
              image={image}
              title={title}
              short_desc={short_desc}
              id={id}
              is_liked={is_liked}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Favorite;

const Wrapper = styled.section`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;

  .Favorit_page_title {
    margin-block: 45px;
    font-weight: 500;
    font-size: 48px;
    margin-inline: 10%;
  }

  .grid_layout {
    /* display: grid; */
    place-items: center;
    /* grid-template-columns: 1fr; */
    margin-inline: 10%;
  }
  @media (max-width: 870px) {
    .grid_layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      margin-inline: 5%;
    }
  }

  @media (max-width: 600px) {
    .grid_layout {
      grid-template-columns: 1fr;
    }
  }
`;
