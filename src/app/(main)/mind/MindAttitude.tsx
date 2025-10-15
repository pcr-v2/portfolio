import { Box, styled } from "@mui/material";
import React, { forwardRef } from "react";

const MindAttitude = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Title>기술로 경험을, 태도로 신뢰를 쌓아갑니다.</Title>

      <Content>
        <p>
          저는 새로운 기술의 트렌드를 좇기보다,
          <br /> 그 <strong>변화의 이유를 이해하고 적용하려는 태도</strong>로
          일합니다.
          <br />
          기술은 단순한 유행이 아니라,{" "}
          <strong>더 나은 사용자 경험을 위한 도구</strong>라고 생각하기
          때문입니다.
        </p>

        <p>
          또한 정해진 답을 강요하기보다 <strong>함께 답을 찾아가는 과정</strong>
          을 중요하게 생각하며,
          <br /> 열린 대화 속에서 방향을 만들어가는 협업을 지향합니다.
        </p>

        <p>
          프론트엔드는 사용자가 회사를 처음 마주하는 창구라고 생각합니다.
          <br />
          그렇기에 언제나 <strong>좋은 첫인상을 남길 수 있는 경험</strong>을
          만들기 위해 집중하고 있습니다.
        </p>
        <p>
          앞으로도 <strong>기술을 통해 가치 있는 경험을 구현하는 개발자</strong>
          로서 성장하며,
          <br /> 함께 <strong>좋은 첫인상을 만들어가는 팀의 일원</strong>이 되고
          싶습니다.
          <br />
          <br />
          감사합니다.
        </p>
      </Content>
    </Wrapper>
  );
});

export default MindAttitude;

const Wrapper = styled(Box)(({ theme }) => ({
  gap: "32px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  padding: "64px 90px 120px",
  flexDirection: "column",
  textAlign: "start",
  [theme.breakpoints.down("desktop")]: {
    gap: "40px",
    padding: "48px 24px 64px",
  },
  [theme.breakpoints.down("tablet")]: {
    gap: "32px",
  },
}));

const Title = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: "100%",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "56px",
  color: "#232323",
  position: "relative",
  letterSpacing: "-0.8px",
  [theme.breakpoints.down("tablet")]: {
    fontSize: "20px",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "16px",
  fontSize: "20px",
  lineHeight: 1.8,
  color: "#424242",
  fontWeight: 500,
  wordBreak: "keep-all", // ✅ 단어 단위 유지
  whiteSpace: "pre-line", // ✅ 줄바꿈 유지
  [theme.breakpoints.down("tablet")]: {
    fontSize: "14px",
    lineHeight: 1.7,
  },
  "& strong": {
    fontWeight: 800,
    color: "#3b82f6", // 강조 색상 (세련된 블루 계열)
  },
}));
