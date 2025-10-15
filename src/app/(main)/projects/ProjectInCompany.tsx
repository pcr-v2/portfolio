"use client";

import { Box, styled } from "@mui/material";
import { forwardRef } from "react";

import ProjectAccordion from "@/app/_components/common/ProjectAccordion";

const ProjectCompany = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapepr ref={ref}>
      <Card>
        <TitleWrap>
          <Title>아이스크림아트 프로젝트</Title>
          <Dot />
        </TitleWrap>

        <ProjectAccordion
          title="아트봉봉 유저웹 (Art-bonbon.com)"
          projectSummary={[
            "아이스크림아트의 B2C 상품을 소개하고 수업결재를 할 수 있는 유저용 웹입니다.",
            "아트봉봉의 드로잉툴에 대한 전반적인 소개 및 대표 커리큘럼과 그동안 학생들이 그렸던 작품에 대해서 알아볼 수 있고,",
            "유저가 로그인을 하여 해당상품을 결재, 일정연기, 프로모션 쿠폰 등록등의 다양한 수업 관련 동작을 할 수 있습니다.",
          ]}
          myRoll={[
            "art-bonbon.com 전반적인 웹사이트 퍼블리싱",
            "학생별 그림 MBTI 검사 구현",
            "Ai-Report PDF 발행 구현",
            "결재 시 콘텐츠 장바구니 화면 Ui 및 로직 구현",
            "프로모션 쿠폰 등록 화면 Ui 및 로직 구현",
            "보유 쿠폰별 커리큘럼 추천 로직 및 학생의 나이에 맞는 커리큘럼 추천 로직 구현",
          ]}
          projectStack={[
            "NextJs",
            "TypeScript",
            "React-Query",
            "Recoil",
            "zod",
            "Mui",
            "Mui/styled",
            "React-hook-form",
          ]}
        />

        <ProjectAccordion
          title="에꼴 어드민 (Ecole-Admin)"
          projectSummary={[
            "아이스크림아트의 B2B 상품으로써 제휴 학원을 관리하는 Back-Office 관리자용 웹입니다.",
            "학원의 등록, 원생등록, 해당학원에서 사용하는 커리큘럼의 통계를 내고 데이터를 취합하여",
            "B2B시장 속 콘텐츠에 대한 니즈를 파악하는데 목적이 있습니다.",
          ]}
          myRoll={[
            "가맹점 관리 화면 Ui 및 로직 구현",
            "수강생 관리 화면 Ui 및 CSV 벌크 등록 구현",
            "컨텐츠 등록 및 콘텐츠 태그 모달 구현",
          ]}
          projectStack={[
            "NextJs",
            "TypeScript",
            "ServerAction",
            "zod",
            "Zustand",
            "Mui",
            "Mui/styled",
            "Formik",
          ]}
        />

        <ProjectAccordion
          title="드로잉툴 매니져 (Tool-Manager)"
          projectSummary={[
            "아트봉봉의 수업을 진행하는 드로잉툴의 초기 컨피그 값을 컨트롤하는 컨피그 데이터 세팅 전용 웹입니다.",
            "기존의 툴매니저는 vue로 제작되어있어서 React로 마이그레이션을 진행했습니다.",
            "브러시 추가제거, drag-and-drop, 배경지, 가이드영상 등록 등의 ux개선을 위한 기능들을 추가 개발했습니다.",
          ]}
          myRoll={[
            "툴매니저 내부 Drag-and-Drop 관련 컴포넌트 구현",
            "컬러픽커 팔레트 및 색상환 구현",
            "브러시 추가 및 프리셋(세팅값 저장) 설정 기능 구현",
            "배경지 등록 구현",
          ]}
          projectStack={[
            "React",
            "TypeScript",
            "Axios",
            "zod",
            "Zustand",
            "Radix",
            "Emotion/styled",
            "Dnd-kit",
          ]}
        />

        <ProjectAccordion
          title="B2G 학생 웹뷰 (School-Student)"
          projectSummary={[
            "B2G 드로잉 수업 및 심리검사를 진행할 수 있는 웹뷰입니다.",
            "i-frame으로 앱에서 구동되는 환경이기에 반응형을 고려하여 작업하였고",
            "해당 프로젝트 내에서 색채검사 파트를 담당해서 구현했습니다.",
          ]}
          myRoll={[
            "색채검사 중간 결과 페이지 Ui 및 애니메이션 작업",
            "최종 결과페이지 결과 저장 및 결과 데이터 파싱 로직 구현",
          ]}
          projectStack={[
            "NextJs",
            "TypeScript",
            "ServerAction",
            "zod",
            "Zustand",
            "IndexDB",
            "Tailwind",
            "FramerMotion",
          ]}
        />

        <ProjectAccordion
          title="B2G 선생님 관리웹 (School-Teacher)"
          projectSummary={[
            "B2G 선생님용 어드민 웹입니다.",
            "선생님은 수강권을 구매하고 학급생성, 수업생성, 수업결과 확인 및 학기별 리포트를 발급받을 수 있습니다.",
          ]}
          myRoll={[
            "기존 학급관리 단일 등록에서 벌크 등록으로 개선",
            "Tailwind v3에서 v4로 업데이트",
            "배경지 등록시 가로형 세로형 분리로직 추가",
            "공지사항/FAQ 페이지 Ux개선 (검색 기능 추가, 인피니티스크롤에서 페이지네이션 구조로 변환 등)",
            "상품 아이디어 제안 페이지 신설",
          ]}
          projectHighlight={["", "asdfasdfasdfasdf"]}
          projectStack={[
            "NextJs",
            "TypeScript",
            "ServerAction",
            "ReactQuery",
            "zod",
            "Zustand",
            "Tailwind",
          ]}
        />
      </Card>
    </Wrapepr>
  );
});

export default ProjectCompany;

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
