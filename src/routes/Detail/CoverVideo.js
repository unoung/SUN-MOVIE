import styled from "styled-components";

const CoverImg = styled.iframe`
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

const Video = styled.iframe`
  width: 45%;
  height: 70vh;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 350px;
  }
`;

export const CoverVideo = ({ covervideo, Img }) => {
  return (
    <>
      {covervideo ? (
        <Video
          src={`https://www.youtube.com/embed/${covervideo}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ) : (
        <CoverImg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${Img})`,
          }}
        />
      )}
    </>
  );
};
