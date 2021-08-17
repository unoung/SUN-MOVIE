import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 150px;
  font-size: 50px;
`;

export const Testing = () => {
  const text = () => console.log("텍스트!");
  const [btn, setbtn] = useState("버튼");

  const onClick = () => {
    console.log("click");
    setbtn("바뀜!");
  };

  useEffect(() => {
    text();
  }, [btn]);
  return <Button onClick={onClick}>{btn}</Button>;
};
