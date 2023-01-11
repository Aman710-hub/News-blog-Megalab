import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllPosts, searchByText } from "../features/news/newsSlice";
import HomePageItem from "./HomePageItem";

const NewsList = () => {
  const { postList, isLoading } = useSelector((store) => store.news);
  const dispacth = useDispatch();
  // const {  } = useSelector((store) => store.news);
  useEffect(() => {
    dispacth(getAllPosts());
  }, []);

  if (isLoading) {
    return <h1>"Loading..."</h1>;
  }
  if (postList.length < 1) {
    return <h2>"Ничего не найдено"</h2>;
  }

  if (postList.length >= 1) {
    return (
      <Wrapper>
        {postList?.map((item) => {
          const {
            id,
            tag,
            title,
            text,
            image,
            is_liked,
            comment,
            short_desc,
            author,
          } = item;
          return (
            <HomePageItem
              key={id}
              image={image}
              title={title}
              short_desc={short_desc}
              id={id}
              is_liked={is_liked}
            />
          );
        })}
      </Wrapper>
    );
  }

  // if (searchPosts.length >= 1) {
  //   return (
  //     <Wrapper>
  //       {searchPosts?.map((item) => {
  //         const {
  //           id,
  //           tag,
  //           title,
  //           text,
  //           image,
  //           is_liked,
  //           comment,
  //           short_desc,
  //           author,
  //         } = item;
  //         return (
  //           <HomePageItem
  //             key={id}
  //             image={image}
  //             title={title}
  //             short_desc={short_desc}
  //             id={id}
  //             is_liked={is_liked}
  //           />
  //         );
  //       })}
  //     </Wrapper>
  //   );
  // }
};

export default NewsList;

const Wrapper = styled.section`
  @media (max-width: 1132px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
