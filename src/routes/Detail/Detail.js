import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { PageLoading } from "../../components/PageLoading";
import { PageError } from "../Home/PageError";
import { Section } from "../../components/Section";

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
`;

const ConWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const CoverImg = styled.div`
  width: 45%;
  height: 70vh;
  background-color: gray;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Genre = styled.p``;

const RunTime = styled.p``;

const Release = styled.p``;

const Overview = styled.p``;

const Genrewrap = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  letter-spacing: 1px;
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
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

  useEffect(() => {
    try {
      const detailData = async () => {
        const { data: movieDetail } = await moviesApi.detail(movieId);

        setDetails(movieDetail);
      };
      setLoading(false);
      detailData();
    } catch (error) {
      setPageError(true);
    }
  }, []);

  console.log(nowDetail);

  return (
    <div>
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
                  <CoverImg
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${nowDetail.backdrop_path})`,
                    }}
                  />
                  <ConWrap>
                    <Title>{nowDetail.title}</Title>
                    <RunTime>{nowDetail.runtime}분</RunTime>
                    <Genrewrap>
                      장르 :{" "}
                      {nowDetail.genres.map((genre) => (
                        <Genre> &nbsp; {genre.name},</Genre>
                      ))}
                    </Genrewrap>
                    <Release>{nowDetail.release_date}</Release>
                    <Overview>{nowDetail.overview}</Overview>
                    장르,러닝타임,개봉일,오버뷰,
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
