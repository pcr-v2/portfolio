"use client"

import { motion } from "framer-motion"
import { Eye, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Art-bonbon",
    category: "B2C / Next.js",
    period: "2024.01 ~ Now",
    image: "/general-data-dashboard.png",
    color: "bg-blue-500",
    description:
      "드로잉 수업 커리큘럼 소개, 결제 및 일정 관리를 제공하는 B2C 사용자 웹사이트. 학부모와 아동이 함께 사용하는 서비스로 ‘사용성과 반응성’ 중심으로 설계된 리뉴얼 런칭 프로젝트",
    tech: "Next.js (v14 AppRouter), TypeScript, React-Query, Mui, Emotion-Styled, Zod, Prisma",
    role: [
      "주요 페이지 퍼블리싱(메인·소개·커리큘럼 등)",
      "영상 품질 개선 구조 구현",
      "MBTI 검사 UI·결과 처리·쿠폰 발급 로직 개발",
      "검색 필터 및 장바구니 기능 설계",
    ],
    achievements: [
      "다양한 애니메이션 요구에 따른 Framer Motion 기반 인터랙션 정의 → 복잡한 인터랙션 흐름을 최대한 안정적으로 유지하며 다양한 기기에서 자연스러운 UX 제공",
      "영상 로딩 지연 문제 해결을 위해 ffmpeg 스트리밍 구현 → ffmpeg 세그먼트 인코딩으로 초기 로딩 지연을 개선 및 페이지 진입 안정성 향상",
      "검색/장바구니 구현을 위해 SessionStorage + Zod-Search-Params로 URL/상태 정합성 확보 → 검색/장바구니 상태 유지로 사용자 경험 매끄러움 증가",
    ],
  },
  {
    id: 2,
    title: "Ecole-Admin",
    category: "B2B / Admin",
    period: "2024.05 ~ 2024.07",
    image: "/chat-app.jpg",
    color: "bg-indigo-500",
    description:
      "학원·학생 데이터를 효율적으로 관리하기 위한 B2B 관리자 웹. 기존 엑셀 수동 입력 프로세스의 비효율을 개선하기 위해 기획된 신규 시스템",
    tech: "Next.js (v14 PageRouter), TypeScript, Server Action, Mui, Emotion-Styled, Zod, Prisma",
    role: [
      "학원·학생 CRUD UI 구현 및 Zod 기반 폼 검증",
      "CSV 대량 등록 기능 전체 로직 구현",
      "콘텐츠(커리큘럼/태그) 등록 UI 개발",
      "필터/검색 기능 구성",
    ],
    achievements: [
      "반복 수작업을 줄이기 위해 CSV 파싱 + Zod 검증 자동화 구조 도입 → 관리자가 실수 없이 빠르게 등록할 수 있는 안정 구조 확보",
      "대량 데이터 검증·반영을 서버에서 직접 처리하기 위해 Server Action을 선택 → 응답 즉시 반영되는 흐름으로 관리자 UX를 자연스럽게 개선",
    ],
  },
  {
    id: 3,
    title: "Tool-Manager",
    category: "Backoffice / Migration",
    period: "2024.07 ~ 2024.12",
    image: "/finance-growth.png",
    color: "bg-emerald-500",
    description:
      "드로잉툴 환경설정을 관리하는 내부 백오피스 리뉴얼 프로젝트 (Vue → React). 컬러·브러시·배경지 설정을 직관적으로 다루는 UI를 구현",
    tech: "TypeScript, React(v18), Axios, Zustand, RadixUI, Emotion-Styled, Dnd-Kit",
    role: [
      "브러시/배경지/레이어 UI 구성",
      "Dnd-Kit 기반 Drag & Drop 인터랙션 개발",
      "브러시 프리셋 저장/불러오기 기능 구현",
    ],
    achievements: [
      "Dnd-Kit 기반 Drag & Drop 인터페이스 설계 → 기존 Vue에서는 순서 변경이 어려워, 직관적 관리 UI를 위해 안정성과 재사용성이 높은 Dnd-Kit 선정",
      "Zustand + TypeScript 기반 타입 정합성 강화 → 타입 추론 기반 관리로 브러시·색상 세팅의 일관성 확보하여 레거시에서 반복되던 설정 오류 문제를 구조적으로 해결",
      "프리셋 기능으로 내부 사용자 작업 효율 개선 → 선생님이 자주 쓰는 세팅값을 저장·불러올 수 있는 구조 설계",
    ],
  },
  {
    id: 4,
    title: "School-Student",
    category: "B2G / Interactive",
    period: "2025.05 ~ Now",
    image: "/interconnected-social-network.png",
    color: "bg-purple-500",
    description:
      "해당 학교의 선생님이 생성한 수업을 들을 수 있고, 혼자 그리기, AI 프롬프트 그리기 및 학생의 색채 감각·선호 색 데이터를 기반으로 성향을 분석하는 심리검사 모듈들을 경험할 수 있는 B2G 학생 웹앱",
    tech: "TypeScript, Next.js (v15 PageRouter), Zustand, React-Query, TailwindCSS, Framer Motion, Zod",
    role: [
      "색채심리검사 전체 검사 흐름 UI 개발",
      "카드 합성·Glow·회전 등 인터랙션 구현",
      "Typewriter UI 공통 컴포넌트 제작",
    ],
    achievements: [
      "Framer-Motion 중심 애니메이션 구조 채택 → 단순 검사가 아니라 게임처럼 몰입되는 경험을 제공하는 데 집중. 시각적 “성취감”을 주는 단계형 애니메이션으로 사용자 몰입도 향상",
      "결과 화면 퍼블리싱 및 데이터 시각화",
      "중복된 텍스트 연출을 통합하기 위해 공통 컴포넌트화 → 코드 중복 제거로 유지보수 간결화",
    ],
  },
  {
    id: 5,
    title: "School-Teacher",
    category: "B2G / Admin",
    period: "2025.08 ~ Now",
    image: "/diverse-travelers-world-map.png",
    color: "bg-orange-500",
    description:
      "수업 이용권 결제·수업 관리를 위한 선생님용 B2G 관리자 웹 유지보수. UX 개선 및 네트워크 감지·데이터 조회 구조 최적화 구현",
    tech: "TypeScript, Next.js (v15 PageRouter), Zustand, React-Query, Formik, Chart.js, Zod, TailwindCSS",
    role: [
      "SelectBox·Table·Filter 등 UI/UX 개선",
      "페이지네이션 기반 데이터 요청 구조 개발",
      "네트워크 상태 감지 커스텀 훅 개발",
    ],
    achievements: [
      "학교 Wi-Fi 환경에서 인피니티 스크롤 성능 저하 문제 해결을 위해 페이지 기반 요청 구조로 전환 → 불안정한 네트워크 환경에서도 안정적인 조회 경험 제공",
      "아이디어 제출 페이지 퍼블리싱 및 백엔드 연동",
      "정확한 네트워크 판단을 위해 /alive Ping + Dead Count 기반 복합 구조 설계 → 장애 탐지 속도 향상 및 운영 가시성 증가",
    ],
  },
  {
    id: 6,
    title: "Yangchi-King",
    category: "Personal / Full Stack",
    period: "2025.07 ~ Now",
    image: "/creative-portfolio-layout.png",
    color: "bg-pink-500",
    description:
      "초,중,고 학생의 양치 기록, 통계를 관리하는 교육용 웹 서비스. 교사용 관리자 페이지를 포함해 프론트엔드-백엔드-배포까지 개발한 1인 프로젝트",
    tech: "Next.js (TypeScript), Server Action, React-Query, Mui, Chart.js, AWS EC2, PM2, GitHub Actions",
    role: ["학생용 웹앱 개발 (Expo 기반 React-Native 랩핑)", "교사용 어드민 웹 개발", "차트 시각화 커스텀 구현"],
    achievements: [
      "빠른 개발·단일 인스턴스 운영 필요 → Next.js기반의 웹뷰 형식의 구조 선택",
      "EC2·PM2·GitHub Actions 배포 자동화 구축",
      "React Native Expo로 학교 단말 환경에 맞는 설치형 앱 제공",
      "실제 교육 현장에서 안정적으로 사용하는 상용 서비스로 확장 (전국 10개의 학교 6000명 이상의 학생 실사용 중)",
      "Chart.js 커스텀 기반 대시보드 구현 → 교사들의 실제 업무 흐름에 맞춘 시각화를 목표로 구성",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
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
            신규 런칭 B2C 웹부터 B2B 관리자, 개인 프로젝트까지 다양한 경험을 쌓아왔습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group relative bg-background rounded-2xl overflow-hidden border border-border cursor-pointer h-full flex flex-col shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 ${project.color} z-10 mix-blend-multiply`}
                    />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-black font-bold flex items-center gap-2 shadow-lg">
                        <Eye className="w-5 h-5" />
                        View Detail
                      </div>
                    </motion.div>
                  </div>

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
                      <span className="text-xs text-muted-foreground mt-1">{project.period}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    {project.title}
                    <span className="text-sm font-normal text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                      {project.category}
                    </span>
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                </DialogHeader>

                <div className="mt-6 space-y-8">
                  <div className="aspect-video relative rounded-xl overflow-hidden bg-secondary">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-2">프로젝트 소개</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-2">사용 기술</h4>
                    <div className="p-4 bg-secondary/50 rounded-lg text-sm font-mono text-primary">{project.tech}</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3">담당 업무</h4>
                      <ul className="space-y-2">
                        {project.role.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3">구현 의도 / 성과</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
