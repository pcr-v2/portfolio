import { Box, styled } from "@mui/material";
import React, { forwardRef } from "react";

const MindDeveloper = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Title>생각을 현실로, 경험을 가치로 만듭니다.</Title>

      <Content>
        <p style={{ width: "100%" }}>
          저는 개발자란 <strong>가치를 만들어내는 사람</strong>이라고
          생각합니다.
          <br />
          사용자에게 필요한 기능을 단순히 구현하는 것을 넘어,{" "}
          <strong>그들의 경험을 개선하는 일</strong>에 집중하려 하고 있습니다.
        </p>

        <p>
          2년차 프론트엔드 개발자로서 빠르게 프로토타입을 제작하고 기능을
          검증하며, <br />
          아이디어를 현실로 구현해온 경험을 가지고 있습니다.
          <br /> <strong>완벽함을 향해 나아가되, 실행력과의 조화</strong>를
          중요하게 생각합니다.
        </p>

        <p>
          사용자 중심의 사고를 바탕으로{" "}
          <strong>“나는 만드는 사람이자 사용하는 사람이다”</strong>라는 마음으로
          개발합니다.
          <br />
          불편함을 발견하고, 개선된 경험으로 되돌려주는 것이 개발자의 역할이라고
          믿습니다.
          <br />
          앞으로도 꾸준히 배우고 도전하며,{" "}
          <strong>사용자 중심의 가치를 만드는 개발자</strong>로 나아가겠습니다.
        </p>
      </Content>
    </Wrapper>
  );
});

export default MindDeveloper;

const Wrapper = styled(Box)(({ theme }) => ({
  gap: "32px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "end", // ✅ 오른쪽 정렬
  padding: "64px 90px",
  flexDirection: "column",
  textAlign: "end", // ✅ 오른쪽 텍스트 정렬
  [theme.breakpoints.down("desktop")]: {
    gap: "40px",
    padding: "48px 24px",
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
  textAlign: "end", // ✅ 오른쪽 정렬
  [theme.breakpoints.down("tablet")]: {
    fontSize: "14px",
    lineHeight: 1.7,
  },
  "& strong": {
    fontWeight: 800,
    color: "#0f7bce", // ✅ 세련된 블루 계열 (일관성 유지)
  },
}));
