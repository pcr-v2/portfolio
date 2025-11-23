"use client";

import { sendEmail } from "@/app/action/sendMailAction";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (state?.message == null) {
      return;
    }

    if (state.code === "SUCCESS") {
      toast.success("이메일이 성공적으로 전송되었습니다.");
    } else {
      toast.error("이메일 전송에 문제가 생겼습니다.");
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 md:px-12 xl:px-24 flex items-center bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Thank you
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              같이 가치를 만들어 가고 싶습니다.
              <br />제 포트폴리오를 봐주셔서 감사합니다.
              <br />
              새로운 도전을 두려워하지 않고, 더 나은 사용자 경험을 위해 끊임없이
              고민하고 실행하겠습니다.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 cursor-pointer group p-4 rounded-xl hover:bg-background hover:shadow-md transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    frontendtt@gmail.com
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 폼 영역 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="bg-background p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-500"
          >
            <form action={formAction} className="space-y-6">
              {/* 이름 + 이메일 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // ★ 필수
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-2 border-transparent focus:border-primary focus:bg-background transition-all outline-none hover:bg-secondary/80"
                    placeholder="이름을 입력해주세요."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // ★ 필수
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-2 border-transparent focus:border-primary focus:bg-background transition-all outline-none hover:bg-secondary/80"
                    placeholder="이메일을 입력해주세요."
                  />
                </div>
              </div>

              {/* 제목 */}
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  제목
                </label>
                <input
                  type="text"
                  id="title"
                  name="title" // ★ 필수
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-2 border-transparent focus:border-primary focus:bg-background transition-all outline-none hover:bg-secondary/80"
                  placeholder="제목을 입력해주세요."
                />
              </div>

              {/* 내용 */}
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">
                  내용
                </label>
                <textarea
                  id="content"
                  name="content" // ★ 필수
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-2 border-transparent focus:border-primary focus:bg-background transition-all outline-none resize-none hover:bg-secondary/80"
                  placeholder="내용을 입력해주세요."
                />
              </div>

              {/* 버튼 */}
              <motion.button
                disabled={isPending}
                whileHover={
                  isPending
                    ? {}
                    : {
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(49,150,255,0.3)",
                      }
                }
                whileTap={isPending ? {} : { scale: 0.98 }}
                className={`
    w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2
    relative overflow-hidden group
    ${
      isPending
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-primary text-white cursor-pointer"
    }
  `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isPending ? (
                    <>
                      전송 중입니다... 잠시만 기다려주세요
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.span>
                    </>
                  ) : (
                    <>
                      이메일 보내기
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>

                {!isPending && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
