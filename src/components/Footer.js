import styled from "styled-components";

const SFooter = styled.footer`
  height: 80px;
  margin-top: 200px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  @media screen and (max-width: 500px) {
    margin-top: 100px;
    height: 80px;
  }
`;

export const Footer = () => {
  return <SFooter>&copy; unoung</SFooter>;
};
