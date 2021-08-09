import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 300px;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 100px;
  font-weight: 800;
  max-width: 500px;
  text-align: center;
`;

const Desc = styled.p`
  font-size: 18px;
  margin-top: 30px;
  line-height: 30px;
  font-weight: 300;
  opacity: 0.8;
  a {
    color: crimson;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const PageError = () => {
  return (
    <Wrap>
      <Title>Page Not Found</Title>
      <Desc>
        페이지를 찾을 수 없거나, 오류가 생겼습니다.
        <br /> 뒤로가기 버튼을 클릭하시거나, {""}
        <Link to="/">홈으로</Link> 가주세요.
      </Desc>
    </Wrap>
  );
};
