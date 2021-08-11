import styled from "styled-components";

const SMain = styled.section`
  width: 100%;
  height: 900px;
  background-color: #333;
  background-size: cover;
  background-position: top;
  padding: 300px 0 0 80px;
  @media screen and (max-width: 500px) {
    height: 60vh;
    padding: 200px 0 0 15px;
  }
`;

const TitleWrap = styled.div`
  text-shadow: 0 0 10px rgba(0 0 0 / 70%);
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  max-width: 600px;
  width: 100%;
  line-height: 30px;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 22px;
    width: 90%;
  }
`;

export const Main = ({ aaa }) => {
  return (
    <SMain
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${aaa.backdrop_path})`,
      }}
    >
      <TitleWrap>
        <Title> {aaa.title} </Title>
        <Desc> {aaa.overview.slice(0, 70) + "..."}</Desc>
      </TitleWrap>
    </SMain>
  );
};
