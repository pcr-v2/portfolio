"use client";

import { motion } from "framer-motion";
import { Eye, X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

/* ---------------------------------------
   📦 프로젝트 데이터(images 배열 포함)
--------------------------------------- */
const projects = [
  {
    id: 1,
    title: "Art-bonbon",
    category: "B2C / Next.js",
    period: "2024.01 ~ Now",
    images: ["/test.png", "/test.png", "/test.png"],
    color: "bg-blue-500",
    description:
      "드로잉 수업 커리큘럼 소개, 결제 및 일정 관리를 제공하는 B2C 사용자 웹사이트.",
    tech: "Next.js (v14 AppRouter), TypeScript, React-Query, Mui, Emotion-Styled, Zod, Prisma",
    role: [
      "주요 페이지 퍼블리싱",
      "영상 품질 개선 구조 구현",
      "MBTI 검사 UI·결과 처리·쿠폰 발급 로직 개발",
      "검색 필터 및 장바구니 기능 설계",
    ],
    achievements: [
      "Framer Motion 기반 인터랙션 정의",
      "ffmpeg 스트리밍으로 초기 로딩 개선",
      "장바구니/검색 필터 SessionStorage + Zod-Search-Params로 상태 정합성 확보",
    ],
  },
  {
    id: 2,
    title: "Ecole-Admin",
    category: "B2B / Admin",
    period: "2024.05 ~ 2024.07",
    images: ["/chat-app.jpg", "/chat-app.jpg", "/chat-app.jpg"],
    color: "bg-indigo-500",
    description: "학원·학생 데이터를 효율적으로 관리하기 위한 B2B 관리자 웹.",
    tech: "Next.js (v14 PageRouter), TypeScript, Server Action, Mui, Emotion-Styled, Zod, Prisma",
    role: [
      "CRUD UI 구현",
      "CSV 대량 등록 기능 구현",
      "콘텐츠 등록 UI 개발",
      "필터/검색 기능",
    ],
    achievements: [
      "CSV 파싱 + Zod 자동 검증 구조",
      "Server Action 기반 대량 처리",
    ],
  },
  {
    id: 3,
    title: "Tool-Manager",
    category: "Backoffice / Migration",
    period: "2024.07 ~ 2024.12",
    images: ["/finance-growth.png", "/finance-growth.png"],
    color: "bg-emerald-500",
    description: "드로잉툴 환경설정을 관리하는 내부 백오피스 리뉴얼 프로젝트.",
    tech: "TypeScript, React(v18), Axios, Zustand, RadixUI, Emotion-Styled, Dnd-Kit",
    role: [
      "Vue 코드 React로 마이그레이션",
      "브러시/배경지/레이어 UI 구현",
      "프리셋 저장·불러오기 기능",
    ],
    achievements: [
      "Dnd-Kit 기반 순서 변경 UI 도입하여 UX 증대",
      "Zustand + TS 타입 정합성 강화",
      "프리셋 기능으로 작업 효율 증가",
    ],
  },
  {
    id: 4,
    title: "School-Student",
    category: "B2G / Interactive",
    period: "2025.05 ~ Now",
    images: ["/interconnected-social-network.png"],
    color: "bg-purple-500",
    description:
      "색채 심리검사·AI 프롬프트 그리기 등 인터랙션을 제공하는 학생용 웹앱.",
    tech: "TypeScript, Next.js (v15), Zustand, React-Query, TailwindCSS, Framer Motion, Zod",
    role: [
      "색채검사 애니메이션 UI",
      "애니메이션 인터랙션",
      "Typewriter UI 컴포넌트",
    ],
    achievements: [
      "Framer Motion 기반 애니메이션 구조를 활용하여 게임같은 몰입감있는 심리검사 개발",
      "결과 화면 퍼블리싱 및 카드 등장·합성·회전 페이지 애니메이션 개발",
      "공통 UI 컴포넌트화",
    ],
  },
  {
    id: 5,
    title: "School-Teacher",
    category: "B2G / Admin",
    period: "2025.08 ~ Now",
    images: ["/diverse-travelers-world-map.png"],
    color: "bg-orange-500",
    description: "수업 이용권 결제·수업 관리를 위한 관리자 웹 유지보수.",
    tech: "TypeScript, Next.js (v15), Zustand, React-Query, Formik, Chart.js, TailwindCSS",
    role: ["UI/UX 개선", "페이지 기반 요청 구조", "네트워크 상태 감지 훅 개발"],
    achievements: [
      "사용자의 불편함을 주도적으로 찾아내어 개선 (이용권,수업관리 등의 UI/UX)",
      "사용자 아이디어 제안 페이지 개발",
      "/alive Ping 기반 네트워크 진단",
    ],
  },
  {
    id: 6,
    title: "Yangchi-King",
    category: "Personal / Full Stack",
    period: "2025.07 ~ Now",
    images: [
      "/creative-portfolio-layout.png",
      "/creative-portfolio-layout.png",
    ],
    color: "bg-pink-500",
    description:
      "학생 양치 기록/통계를 관리하는 교육용 웹 서비스(1인 풀스택 개발).",
    tech: "Next.js, Server Action, React-Query, Mui, Chart.js, AWS EC2, PM2",
    role: [
      "학생용 안드로이드용 웹앱 개발",
      "교사용 어드민 웹 개발",
      "차트 커스텀 시각화",
    ],
    achievements: [
      "Next기반의 웹뷰 형식의 구조로 사용자의 단말 환경에 적합한 설치형 apk 제공",
      "Chart.js를 커스텀하여 선생님의 보고서 제출에 용이한 통합 차트 제공",
      "EC2 + PM2 자동배포 구축",
      "전국 10개 학교 6000명 사용중",
    ],
  },
];

/* ---------------------------------------
   📌 메인 섹션 컴포넌트
--------------------------------------- */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 md:px-12 xl:px-24 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
            Project Index
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full origin-left"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            신규 런칭부터 B2B 관리자, 개인 프로젝트까지 다양한 경험을
            담았습니다.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group relative bg-background rounded-2xl overflow-hidden border border-border cursor-pointer h-full flex flex-col shadow-sm"
                >
                  {/* 🔄 모달 밖 캐러셀 */}
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 ${project.color} z-10 mix-blend-multiply`}
                    />
                    <Carousel
                      opts={{ loop: true }}
                      plugins={[
                        Autoplay({
                          delay: 2500,
                        }),
                      ]}
                      className="w-full h-full"
                    >
                      <CarouselContent>
                        {project.images.map((src, i) => (
                          <CarouselItem key={i}>
                            <div className="relative w-full h-full aspect-[4/3]">
                              <Image
                                src={src}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-black font-bold flex items-center gap-2 shadow-lg">
                        <Eye className="w-5 h-5" />
                        프로젝트 상세보기
                      </div>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 w-1 h-full bg-primary"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>

              {/* ------------------ Dialog ------------------ */}
              <DialogContent className="break-keep max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    {project.title}
                    <span className="text-sm font-normal text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                      {project.category}
                    </span>
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.period}
                  </p>
                </DialogHeader>

                <div className="mt-3 space-y-8">
                  {/* 🔄 모달 내부 캐러셀 */}
                  <div className="aspect-video relative rounded-xl overflow-hidden bg-secondary">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {project.images.map((src, i) => (
                          <CarouselItem key={i}>
                            <div className="relative w-full h-full aspect-video">
                              <Image
                                src={src}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <CarouselPrevious className="left-3" />
                      <CarouselNext className="right-3" />
                    </Carousel>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-bold mb-2">프로젝트 소개</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech */}
                  <div>
                    <h4 className="text-lg font-bold mb-2">사용 기술</h4>
                    <div className="p-4 bg-secondary/50 rounded-lg text-sm font-mono text-primary">
                      {project.tech}
                    </div>
                  </div>

                  {/* Role + Achievements */}
                  <div className="flex flex-col gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3">담당 업무</h4>
                      <ul className="space-y-2">
                        {project.role.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-3">
                        구현 의도 / 성과
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 cursor-pointer">
                  <X className="h-4 w-4" />
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
