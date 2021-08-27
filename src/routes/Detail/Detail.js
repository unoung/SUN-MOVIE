import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { PageLoading } from "../../components/PageLoading";
import { PageError } from "../Home/PageError";
import { Section } from "../../components/Section";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
  }
`;

const ConWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  @media screen and (max-width: 500px) {
    width: 90%;
    padding-top: 25px;
  }
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 18px;
  }
`;

const CoverImg = styled.div`
  width: 45%;
  height: 70vh;
  background-color: gray;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 350px;
  }
`;

const Genre = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const RunTime = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 15px;
  @media screen and (max-width: 500px) {
    font-weight: 300;
  }
`;

const Release = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 15px;
`;

const Overview = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  margin-bottom: 15px;
`;

const Genrewrap = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  letter-spacing: 1px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 8px;
  }
`;

const Video = styled.iframe`
  width: 45%;
  height: 70vh;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 350px;
  }
`;

// export const Detail = () => {
//   const [nowDetails, setDetails] = useState();
//   const [loading, setLoading] = useState(true);
//   const [pageError, setPageError] = useState(false);

//   const { movieId } = useParams();

//   useEffect(() => {
//     try {
//       const detailData = async () => {
//         const { data: details } = await moviesApi.detail(movieId);

//         setDetails(details);
//       };
//       detailData();
//       setLoading(false);
//     } catch (error) {
//       setPageError(true);
//     }
//   }, []);

//   console.log(nowDetails);
//   return (
//     <div>
//       {loading ? (
//         <PageLoading />
//       ) : (
//         <div>
//           {pageError ? (
//             <PageError></PageError>
//           ) : (
//             <Section>
//               {nowDetails ? (
//                 <Container>
//                   <CoverImg
//                     style={{
//                       backgroundImage: `url(https://image.tmdb.org/t/p/original/${nowDetails.backdrop_path})`,
//                     }}
//                   />
//                   <ConWrap>
//                     <Title>{nowDetails.title}</Title>
//                     장르,러닝타임,개봉일,오버뷰,
//                   </ConWrap>
//                 </Container>
//               ) : null}
//             </Section>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

export const Detail = () => {
  const { movieId } = useParams();
  const [nowDetail, setDetails] = useState();
  const [nowvideo, setVideo] = useState();
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

  useEffect(() => {
    try {
      const detailData = async () => {
        const { data: movieDetail } = await moviesApi.detail(movieId);

        setDetails(movieDetail);

        const {
          data: { results: videoData },
        } = await moviesApi.video(movieId);
        // console.log(videoData);
        videoData.length > 0 ? setVideo(videoData[0].key) : setVideo("");
      };
      setLoading(false);
      detailData();
    } catch (error) {
      setPageError(true);
    }
  }, []);

  console.log(nowvideo);
  // console.log(nowDetail);

  return (
    <div>
      <Helmet>
        <title>{`Sun movie | ${nowDetail && nowDetail.title}`}</title>
      </Helmet>
      {loading ? (
        <PageLoading />
      ) : (
        <div>
          {pageError ? (
            <PageError></PageError>
          ) : (
            <Section>
              {nowDetail ? (
                <Container>
                  {/* <CoverImg
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${nowDetail.backdrop_path})`,
                    }}
                  /> */}
                  {nowvideo ? (
                    <Video
                      src={`https://www.youtube.com/embed/${nowvideo}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  ) : (
                    <CoverImg
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${nowDetail.backdrop_path})`,
                      }}
                    />
                  )}

                  <ConWrap>
                    <Title>{nowDetail.title}</Title>
                    <RunTime>{nowDetail.runtime}분</RunTime>
                    <Genrewrap>
                      장르 :{" "}
                      {nowDetail.genres.map((genre, index) => (
                        <Genre key={index}> &nbsp; {genre.name},</Genre>
                      ))}
                    </Genrewrap>
                    <Release>{nowDetail.release_date}</Release>
                    <Overview>{nowDetail.overview}</Overview>
                  </ConWrap>
                </Container>
              ) : null}
            </Section>
          )}
        </div>
      )}
    </div>
  );
};
