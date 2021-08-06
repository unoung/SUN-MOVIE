import styled from "styled-components";
import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";

// console.log(moviesApi.nowPlaying());
const Main = styled.section`
  width: 100%;
  height: 900px;
  background-color: #333;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [popPlay, setPopPlay] = useState();

  // const movieData = async () => {
  //   // console.log(await moviesApi.nowPlaying());
  //   const {
  //     data: { results },
  //   } = await moviesApi.nowPlaying();
  // };
  // movieData();

  useEffect(() => {
    const movieData = async () => {
      // console.log(await moviesApi.nowPlaying());
      try {
        const {
          data: { results: NowResults },
        } = await moviesApi.nowPlaying();
        setNowPlay(NowResults);

        const {
          data: { results: PopResults },
        } = await moviesApi.popular();
        setPopPlay(PopResults);
      } catch (error) {
        console.log("error");
      }
    };

    movieData();
  }, []);
  console.log("현재상영", nowPlay);
  console.log("인기", popPlay);
  return (
    <div>
      <Main></Main>

      <Section>홈 컨텐츠</Section>
    </div>
  );
};
