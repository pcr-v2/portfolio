"use client";

import { Box, styled } from "@mui/material";
import { forwardRef } from "react";

import ProjectAccordion from "@/app/_components/common/ProjectAccordion";

const ProjectPersonal = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapepr ref={ref}>
      <Card>
        <TitleWrap>
          <Title>개인(외주) 프로젝트</Title>
          <Dot />
        </TitleWrap>

        <ProjectAccordion
          title="양치킹 (Yangchi-King)"
          projectSummary={[
            "학생들의 양치 현황을 갤럭시 탭을 이용해 기록하고",
            "조퇴, 결석, 체험학습 등의 후처리를 할 수 있는 웹앱입니다.(apk 파일로 빌드하여 설치 후 사용)",
            "개인별 통계 반별 순위등 선생님들이 확인할 수 있고, 학교의 일정을 등록할 수 있는 관리자용 어드민 웹입니다.",
            "현재는 전국 9개의 학교와 계약을 맺은 상태고, 5521명의 학생이 실제로 사용중입니다.",
          ]}
          myRoll={[
            "사용자용 apk 형태의 웹앱 개발",
            "관리자용 어드민 웹 개발",
            "AWS 배포",
          ]}
          projectStack={[
            "NextJs",
            "TypeScript",
            "ServerAction",
            "React-Query",
            "Zustand",
            "Mui",
            "Mui/styled",
          ]}
          projectDeploy={["AWS EC2", "Pm2", "GitAction", "ACM", "Route53"]}
        />
      </Card>
    </Wrapepr>
  );
});

export default ProjectPersonal;

const Wrapepr = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "32px 90px",
    justifyContent: "center",
    [theme.breakpoints.down("desktop")]: {
      padding: "32px 24px",
    },
  };
});

const Card = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    padding: "24px",
    display: "flex",
    borderRadius: "12px",
    flexDirection: "column",
    boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.16)",
  };
});

const TitleWrap = styled(Box)(() => {
  return {
    display: "flex",
    position: "relative",
    width: "fit-content",
    justifyContent: "start",
  };
});

const Title = styled("span")(() => {
  return {
    zIndex: 2,
    fontSize: 24,
    fontWeight: 700,
    color: "#212121",
    position: "relative",
  };
});

const Dot = styled(Box)(() => {
  return {
    top: 0,
    right: -6,
    width: "16px",
    height: "16px",
    position: "absolute",
    borderRadius: "100%",
    backgroundColor: "#3196ff",
  };
});
