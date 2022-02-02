import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Container id="Container">
      <a>
        <img src="/images/logo.svg" alt="문제있냐" />
      </a>
      <Menu id="Menu">
        <p>
          {" "}
          <a href="#">Model S</a>
        </p>
        <p>
          {" "}
          <a href="#">Model Y</a>
        </p>
        <p>
          {" "}
          <a href="#">Model 3</a>
        </p>
        <p>
          {" "}
          <a href="#">Model X</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">TESLA ACCOUNT</a>
        <CustomMenu></CustomMenu>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding 0 20px;
  top:0;
  left:0;
  right:0;
  // 영상 87분 
  justify-content: space-between;
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
