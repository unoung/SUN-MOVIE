import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Headers = styled.div`
  width: 100%;
  height: 60px;
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @media screen and (max-width: 500px) {
    padding: 0 10px;
  }
`;

const InHeader = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 600;
  a {
    color: crimson;
  }
  /* text-align: center; */
`;

const MenuWrap = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-left: 50px;
`;

export const Header = () => {
  const [bg, setBg] = useState();
  const scrollHandler = () => {
    const sct = window.pageYOffset;

    if (sct >= 100) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <Headers style={{ backgroundColor: bg }}>
      <InHeader>
        <Logo>
          <Link to="/">SUN</Link>
        </Logo>
        <MenuWrap>
          <Menu>
            <Link to="/">Home</Link>
          </Menu>

          <Menu>
            <Link to="/Search">Search</Link>
          </Menu>
        </MenuWrap>
      </InHeader>
    </Headers>
  );
};
