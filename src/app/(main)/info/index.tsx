import { Box, styled } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React, { forwardRef, useEffect, useMemo, useState } from "react";

import Dot from "@/app/_components/common/Dot";
import useResponsive from "@/hooks/useResponsive";

const MainInfo = forwardRef<HTMLDivElement>((props, ref) => {
  const TEXT =
    "완성도와 실행력을 함께 추구하는\n 프론트엔드 개발자 박철련입니다.";

  const isTablet = useResponsive("down", "tablet");

  const lines = useMemo(
    () => TEXT.split("\n").map((line) => line.split(" ")),
    [],
  );

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 1.2,
        duration: 1,
        ease: "easeOut",
      },
    }),
  };
  const cards = [
    {
      variant: "info",
      title: "기본 정보",
      contents: [
        "포지션: Frontend Developer",
        "경력: 1년 10개월 아이스크림아트 (2024.01 ~ 재직중)",
        "이메일: frontendtt@gmail.com",
      ],
    },
    {
      variant: "skill",
      title: "업무 역량",
      contents: [
        "Next.js 기반 서비스 구조 설계 및 최적화",
        "MUI & Framer Motion을 활용한 인터랙션 구현",
        "SQLD 자격증을 통한 백엔드 쿼리 및 기능 구현",
      ],
    },
    {
      variant: "philosophy",
      title: "개발 철학",
      contents: [
        "완성도와 실행력의 균형을 지향합니다.",
        "사용자 경험을 중심으로 개발합니다.",
        "끈기 있게 문제를 해결합니다.",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3, // 각 단어 등장 간격
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 40,
        damping: 10,
        duration: 0.4,
        ease: "linear",
      },
    },
  };
  return (
    <Wrapper ref={ref}>
      <Title>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            whiteSpace: "pre-line",
            lineHeight: 1.6,
          }}
        >
          {lines.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {line.map((word, wordIndex) => {
                const hasDot = word.includes("추구");

                return (
                  <motion.span
                    key={`${lineIndex}-${wordIndex}`}
                    variants={wordVariants}
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      position: "relative",
                      // zIndex 제거 → 글자보다 Dot이 뒤로 감
                    }}
                  >
                    {word}

                    {/* ✅ Dot 등장 애니메이션 (bounce-in) */}
                    {hasDot && (
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 1.2, // 글자 등장 후 약간의 딜레이 (조정 가능)
                          type: "spring",
                          stiffness: 120,
                          damping: 8,
                        }}
                        style={{
                          position: "absolute",
                          top: isTablet ? -4 : -10,
                          right: isTablet ? 16 : 20,
                          zIndex: -1, // ✅ 글자 뒤로 배치
                        }}
                      >
                        <Dot color="#06C755" />
                      </motion.div>
                    )}
                  </motion.span>
                );
              })}
            </motion.div>
          ))}
        </motion.div>
      </Title>

      <CardWrap>
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ width: "100%" }}
          >
            <Card variant={card.variant as any}>
              <CardTitle>{card.title}</CardTitle>
              <ContentWrap>
                {card.contents.map((text, idx) => (
                  <ContentText key={idx}>{text}</ContentText>
                ))}
              </ContentWrap>
            </Card>
          </motion.div>
        ))}
      </CardWrap>
    </Wrapper>
  );
});

export default MainInfo;

const Wrapper = styled(Box)(({ theme }) => {
  return {
    gap: "64px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "64px 90px",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.down("desktop")]: {
      gap: "40px",
      padding: "48px 24px",
    },
    [theme.breakpoints.down("tablet")]: {
      gap: "32px",
    },
  };
});

const CardWrap = styled(Box)(() => ({
  gap: "24px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  "@media (max-width:1384px)": {
    flexDirection: "column",
    maxWidth: "500px",
    margin: "0 auto",
  },
}));

const Card = styled(Box)<{ variant?: "info" | "skill" | "philosophy" }>(({
  variant,
  theme,
}) => {
  const gradients = {
    info: "linear-gradient(135deg, #ffffff, #E3F2FD)", // 밝은 스카이블루 톤 (정보)
    skill: "linear-gradient(135deg, #ffffff, #D0E1FF)", // 살짝 딥블루 (역량)
    philosophy: "linear-gradient(135deg, #ffffff, #DCE3F5)", // 그레이블루 톤 (철학)
  };

  return {
    gap: "24px",
    width: "100%",
    borderRadius: "16px",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: gradients[variant || "info"],
    boxShadow:
      "0 4px 8px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.4)",
    transition: "all 0.4s ease",
    overflow: "hidden",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06)",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-50%",
      width: "50%",
      height: "100%",
      background:
        "linear-gradient(120deg, rgba(255,255,255,0.01), rgba(255,255,255,0.4), rgba(255,255,255,0.01))",
      transform: "skewX(-50deg)",
      transition: "all 1s ease",
    },
    "&:hover::after": {
      left: "140%",
    },

    [theme.breakpoints.down("tablet")]: {
      gap: "16px",
      padding: "24px 16px",
    },
  };
});

const ContentWrap = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
  };
});

const Title = styled(Box)(({ theme }) => {
  return {
    zIndex: 2,
    width: "100%",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "56px",
    color: "#232323",
    position: "relative",
    letterSpacing: "-0.8px",
    fontFamily: "NanumSquareNeo",
    [theme.breakpoints.down("tablet")]: {
      fontSize: "20px",
    },
  };
});

// const Card = styled(Box)(() => {
//   return {
//     gap: "24px",
//     width: "100%",
//     padding: "24px 16px",
//     display: "flex",
//     borderRadius: "12px",
//     flexDirection: "column",
//     boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.16)",
//     position: "relative",
//     alignItems: "center",
//   };
// });

const CardTitle = styled("span")(({ theme }) => {
  return {
    zIndex: 2,
    fontSize: 24,
    fontWeight: 700,
    color: "#212121",
    position: "relative",
    fontFamily: "NanumSquareNeo",
    [theme.breakpoints.down("tablet")]: {
      fontSize: 20,
    },
  };
});

const ContentText = styled("span")(({ theme }) => {
  return {
    fontWeight: 700,
    fontSize: "16px",
    color: "#424242",
    lineHeight: "160%",
    fontFamily: "NanumSquareNeo",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "12px",
    },
  };
});
