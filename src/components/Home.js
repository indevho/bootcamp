import React from "react";
import styled from "styled-components";
import Section from "./Section";
// 동일 폴더 내이므로  ./Section 이면 잘 가져와 준다.
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online S for"
        description2="Touchless Delivery"
        leftBtnText="Custom Order S"
        rightBtnText="Existing Inventory 1 "
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online Y for"
        description2="Touchless Delivery"
        leftBtnText="Custom Order Y"
        rightBtnText="Existing Inventory 2 "
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online 3 for"
        description2="Touchless Delivery"
        leftBtnText="Custom Order 3"
        rightBtnText="Existing Inventory 3 "
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online S for"
        description2="Touchless Delivery"
        leftBtnText="Custom Order X"
        rightBtnText="Existing Inventory 4 "
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Solar panels"
        description="Order Online S for"
        description2="Touchless Delivery"
        leftBtnText="Custom Order X"
        rightBtnText="Existing Inventory 4 "
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="solar-roof"
        description="Order Online S for"
        description2="Touchless Delivery"
        leftBtnText="Custom Order X"
        rightBtnText="Existing Inventory 4 "
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accesories"
        description="Order Online S for"
        description2="Touchless Delivery"
        leftBtnText="SHOP NOW"
        rightBtnText=""
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  color: red;
  //영상 98분 
  z-index 10;
`;
