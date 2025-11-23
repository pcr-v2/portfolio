"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Server, PenTool } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-25 xl:py-20 px-6 md:px-12 xl:px-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 cursor-default"
          >
            Frontend Developer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            가치를 만들어가는 <br />
            <motion.span
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 inline-block"
            >
              프론트엔드 개발자
            </motion.span>{" "}
            박철련입니다.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
          >
            여러 프로젝트를 통해{" "}
            <span className="font-[800]">‘사용자가 겪는 순간’</span>을 중심으로
            개발해왔습니다.
            <br />
            기술은 화려하지 않아도,{" "}
            <span className="font-[800]">쓰임새가 분명한 선택</span>을 하고자
            합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(49, 150, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 xl:px-8 xl:py-4 bg-primary text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 xl:px-8 xl:py-4  bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              About Me
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-10 h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full origin-left"
              />
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                저는 기능보다 경험을, 속도보다 방향을 먼저 고민하는 프론트엔드
                개발자입니다. 프로젝트마다 다른 제약과 환경을 경험하며, 기술
                선택은 유행이 아니라 맥락과 문제 구조에 따라 달라지는 판단임을
                배웠습니다.
              </p>
              <p>
                여러 B2C·B2B·외주 프로젝트를 거치며 사용자가 실제로 무엇을
                느끼고, 어떤 흐름에서 불편함을 겪는지 관찰하는 태도를
                길렀습니다. 그래서 단순 구현보다 “왜 이 기능이 필요한가”를 먼저
                정의하고, 가장 현실적인 해법을 선택하는 개발을 지향합니다.
              </p>
              <p>
                협업에서는 소통과 명확성을 중심에 두며, 기획자·디자이너·운영자와
                함께 문제를 정의하고 모두가 합의할 수 있는 방향을 만드는 과정을
                무엇보다 가치 있게 여깁니다.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm font-medium">
              <p>Park Cheol Ryeon</p>
              <p>1991.05.28</p>
              <p>frontendtt@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Skills
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-10 h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full origin-left"
              />
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: Code,
                  title: "Frontend",
                  desc: "JavaScript, TypeScript, React, Next.js, React-Query, Zustand, Redux",
                },
                {
                  icon: PenTool,
                  title: "CSS & Styling",
                  desc: "MUI, Styled-Components, TailwindCSS, Emotion-Styled, Framer-Motion",
                },
                { icon: Database, title: "Database", desc: "MySQL, Prisma" },
                {
                  icon: Server,
                  title: "Infra & Tools",
                  desc: "AWS, Git, GitHub, GitHubAction, Jira, Slack, Notion",
                },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
