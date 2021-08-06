import styled from "styled-components";

const SSection = styled.section`
  padding: 0 80px;
  background-color: red;
`;

export const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};
