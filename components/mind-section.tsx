"use client"

import { motion } from "framer-motion"

export function MindSection() {
  return (
    <section id="mind" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-20 h-20 border-4 border-primary/10 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-32 h-32 border-2 border-primary/5 rounded-lg"
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">The Mind Behind Code</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full mb-8"
          />
        </motion.div>

        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          {[
            "2년간의 경험 속에서 저는 단순히 코드를 작성하는 개발자가 아니라, 상황을 해석하고 판단하는 개발자로 성장해 왔습니다.",
            "협업 프로젝트에서는 개인의 스타일보다 팀이 합의할 수 있는 구조와 일관성이 더 중요하다는 것을 배웠습니다. PR 리뷰를 통해 문제를 정의하고 해결 방향을 조율하면서 “혼자 이해하는 코드”보다 “함께 납득되는 결과물”의 가치를 더 깊게 이해했습니다.",
            "레거시 마이그레이션 과정에서는 과거의 맥락을 정확히 읽고, 미래의 유지보수를 함께 설계하는 사고방식을 익혔습니다. 또한 사용자 경험 중심 프로젝트를 통해 재밌고 자연스러운 흐름이 서비스의 본질을 결정한다는 점을 체감했습니다.",
            "Yangchi-King 프로젝트에서는 기능을 마음대로 설계할 수 있는 환경에서도 운영 비용, 장애 대응, 배포 구조 같은 현실적 제약을 함께 고려해야 한다는 사실을 배웠습니다. 기술적 자유도보다 실제 운영 가능성이 제품의 수명을 결정한다는 점을 깊이 이해한 경험이었습니다.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="bg-gradient-to-r from-secondary/80 to-secondary/30 p-8 rounded-2xl border-l-4 border-primary mt-8 shadow-lg backdrop-blur-sm"
          >
            <p className="text-xl font-medium text-foreground italic">
              “문제 해결은 코드가 아니라 기준에서 시작되며, 그 기준은 맥락과 상황을 깊게 이해하는 데서 만들어진다.”
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 font-medium text-foreground"
          >
            앞으로도 단순한 기능 구현을 넘어, 비즈니스와 기술 사이의 접점을 이해하고 올바르게 선택할 줄 아는 개발자로
            성장해 나가겠습니다.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
