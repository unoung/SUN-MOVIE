import styled from "styled-components";
import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";
import { PageLoading } from "../../components/PageLoading";
import { Main } from "./Main";
import { PageError } from "./PageError";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/swiper.css";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Contents } from "./Contents";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [popPlay, setPopPlay] = useState();
  const [upPlay, setUpPlay] = useState();
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: NowResults },
        } = await moviesApi.nowPlaying();
        setNowPlay(NowResults);

        const {
          data: { results: PopResults },
        } = await moviesApi.popular();
        setPopPlay(PopResults);

        const {
          data: { results: UpResults },
        } = await moviesApi.upcoming();
        setUpPlay(UpResults);

        setLoading(false);
      } catch (error) {
        setPageError(true);
        console.log(error);
        //debug
      }
    };

    movieData();
  }, []);
  // console.log("현재상영", nowPlay);
  console.log("인기", popPlay);
  // console.log("상영예정", upPlay);

  return (
    <div>
      {loading ? (
        <PageLoading />
      ) : (
        <div>
          {pageError ? (
            <PageError></PageError>
          ) : (
            <div>{popPlay ? <Main aaa={popPlay[7]} /> : null}</div>
          )}
        </div>
      )}

      <Section>
        <Contents movietitle="현재 상영 영화" Playing={nowPlay} />
        <Contents movietitle="상영 예정" Playing={upPlay} />
        <Contents movietitle="인기 영화" Playing={popPlay} />
      </Section>

      <Footer />
    </div>
  );
};
