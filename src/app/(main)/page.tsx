"use client";

import { Box, styled } from "@mui/material";
import { useEffect, useRef } from "react";

import MainInfo from "@/app/(main)/info";
import MindAttitude from "@/app/(main)/mind/MindAttitude";
import MindCoWork from "@/app/(main)/mind/MindCoWork";
import MindDeveloper from "@/app/(main)/mind/MindDeveloper";
import ProjectInCompany from "@/app/(main)/projects/ProjectInCompany";
import ProjectPersonal from "@/app/(main)/projects/ProjectPersonal";
import { useScroll } from "@/app/_components/ScrollProvider";

export default function Main() {
  const { registerSection } = useScroll();

  // ✅ 섹션 정의 (순서, 컴포넌트, 이름)
  const sections = [
    { name: "info", Component: MainInfo },
    { name: "projectCompany", Component: ProjectInCompany },
    { name: "projectPersonal", Component: ProjectPersonal },
    { name: "mindCoWork", Component: MindCoWork },
    { name: "mindDeveloper", Component: MindDeveloper },
    { name: "mindAttitude", Component: MindAttitude },
  ];

  // ✅ 각 섹션별 ref 저장소
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  // ✅ 섹션 등록
  useEffect(() => {
    sections.forEach(({ name }) => {
      const el = refs.current[name];
      if (el) registerSection(name, el);
    });
  }, []);

  return (
    <Wrapper>
      {sections.map(({ name, Component }) => (
        <div
          key={name}
          style={{ scrollMarginTop: "100px" }}
          ref={(el) => {
            refs.current[name] = el;
          }}
        >
          <Component />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: "1920px",
    display: "flex",
    flexDirection: "column",
  };
});
