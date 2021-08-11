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

const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;

const CoverImg = styled.div`
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Container = styled.div`
  margin-top: 100px;
`;

SwiperCore.use([Navigation]);

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [popPlay, setPopPlay] = useState();
  const [upPlay, setUpPlay] = useState();
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

  const params = {
    spaceBetween: 20,
    slidesPerView: 5.3,
  };
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
            <div>{popPlay ? <Main aaa={popPlay[1]} /> : null}</div>
          )}
        </div>
      )}

      <Section>
        <Container>
          <Title>현재 상영 영화</Title>
          <Swiper {...params} navigation>
            {nowPlay &&
              nowPlay.map((play) => (
                <SwiperSlide key={play.id}>
                  <Link to={{ pathname: "#" }}>
                    <CoverImg
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                      }}
                    />
                    <MovieTitle>{play.title}</MovieTitle>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </Container>
      </Section>
    </div>
  );
};
