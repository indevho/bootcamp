import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

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
        <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav id="BurgerNav" show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          {" "}
          <a href="">Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Used Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Trade-in</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">CyberTruck</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Roadaster</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Existing Inventory</a>{" "}
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  // 시원하게 오른쪽으로 붙어준다.
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  --justify-content: flex-start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 500;
    }
  }
  // 버거네브 움직임 활성화
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
`;

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
