import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
// https://github.com/indevho/react_tesla.git
//function Section(poops) {  : packed 된 형태  poops.name 으로 불러서 씀.
function Section({
  title,
  description,
  description2,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  // : unpacked 된 형태.
  //console.log("hi");
  setTimeout(() => {
    console.log({ title });
  }, 50000);
  return (
    <Wrap id="wrap" bgImage={backgroundImg} title={title}>
      <Fade up>
        <ItemText>
          <h1>{title}</h1>
          <span>{description} </span>
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            {description2}
          </a>
          {/* 실제로는 touchless delivery안내 페이지 연동됨.
        https://www.tesla.com/support/taking-delivery?redirect=no */}
        </ItemText>
      </Fade>
      <Buttons>
        <Fade up>
          <ButtonGroup id="btGroup">
            <LeftButton id="leftbutton">{leftBtnText}</LeftButton>
            {
              //   if rightBtnText exists
              rightBtnText && (
                <RightButton hasText={rightBtnText}>{rightBtnText}</RightButton>
              )
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Buttons = styled.div``;
const DownArrow = styled.img`
  height: 40px; // img, svg 는 이 height 값이 있으니까 눈에 보이기 시작한다.
  overflow-x: hidden;
  animation: animateDown infinite 2s;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    // 768 max값이다치고. 즉 ,그미만값이면 아래 속성 적용해라.
    flex-direction: column;
  }
  @media (min-width: 500px) {
    // 500을 최소값이다 치자. 그이상은 row해라. (즉 이게 maxwidth 아래에 있다면 ,위의 max-width를(767.9999~500) 덮어버림.)
    flex-direction: row;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase; // 기만형 css 속성
  font-size: 12px;
  //34분 추가
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
  //   display: ${(props) => `url("/images/${props.hasText}")`};
  //   display: ${(props) => `none`};
`; // 반드시 뒤에있어야함.

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  //영상 97분
  z-index: -1;
`;

const Wrap = styled.div`
  width: 100vw; // 왜 100vw이면 horizontal scroll 생기는가?
  //   full view-width
  height: 100vh;
  //background: orange;
  background-image: url("/images/model-s.jpg");
  background-position: center;
  background-size: cover;

  // 현위치 components . > src > tesla-clone 올라가서.  public/images/로 내려와야함.
  // 왜 가능하냐? 기준 url 은  public이었다.-- 이걸 설정하는 설정코드도 어딘가에 있을 것.
  background-repeat: no-repeat;

  ///
  ///
  //영상 34분 추가
  display: flex;
  flex-direction: column;
  justify-content: space-between; // verical align
  align-items: center;
  //
  // 미시적 props 쓰기
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  // 영상 97분
  //z-index: 10;
`;
