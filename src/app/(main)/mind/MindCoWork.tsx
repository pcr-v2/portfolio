import { Box, styled } from "@mui/material";
import React, { forwardRef } from "react";

import useResponsive from "@/hooks/useResponsive";

const MindCoWork = forwardRef<HTMLDivElement>((props, ref) => {
  const isTablet = useResponsive("down", "tablet");

  return (
    <Wrapper ref={ref}>
      <Title>
        소통과 신뢰,{isTablet && <br />} 그 사이에서 더 나은 코드를 만듭니다.
      </Title>

      <Content>
        <p style={{ width: "100%" }}>
          저는 <strong>소통과 신뢰를 중심으로 협업하는 개발자</strong>입니다.
          <br />
          개발자가 되기 전 다양한 직업과 환경에서 사람들과 함께 일하며
          자연스럽게
          <strong> 협력의 중요성과 커뮤니케이션 감각</strong>을 익혔습니다.
        </p>

        <p>
          이 경험은 지금까지도 큰 자산이 되어, 프로젝트를 진행할 때{" "}
          <strong>요구사항을 명확히 이해하고 실행으로 옮기는 과정</strong>을
          가장 중요하게 생각하게 만들었습니다.
        </p>

        <p>
          현재는 2년차 프론트엔드 개발자로서 디자이너, 기획자와의 협업 그리고
          <br />
          외주 프로젝트 <strong>[양치킹]</strong>을 통해{" "}
          <strong>학교의 선생님, 기획자, 사용자(학생 및 학부모)</strong> 등
          다양한 이해관계자와의 소통 경험을 쌓아왔습니다.
        </p>

        <p>
          기획 의도와 사용자 피드백 사이에서 균형을 맞추며{" "}
          <strong>
            “모두가 이해할 수 있는 언어로 개발을 설명하고, 함께 방향을
            만들어가는 과정”
          </strong>
          이야말로 진정한 협업임을 느끼며 성장하고 있습니다.
          <br />
          앞으로도 단순히 기능을 구현하는 개발자가 아니라,{" "}
          <strong>
            팀의 목표를 함께 이해하고 실현하는 파트너로서의 개발자
          </strong>
          가 되고자 합니다.
        </p>
      </Content>
    </Wrapper>
  );
});

export default MindCoWork;

const Wrapper = styled(Box)(({ theme }) => ({
  gap: "32px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  padding: "64px 90px",
  flexDirection: "column",
  textAlign: "start",
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
  // lineHeight: "56px",
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
    color: "#1a5ca1", // 강조 색상 (세련된 블루 계열)
  },
}));
