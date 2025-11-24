"use client";

import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Brain,
  Mail,
  Github,
  DownloadIcon,
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export function Sidebar({ activeSection, scrollToSection }: SidebarProps) {
  const navItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "mind", label: "Mind", icon: Brain },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-64 xl:w-80 flex-col justify-between border-r border-border bg-background p-8 z-40">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="mb-12"
        >
          <motion.h1
            className="text-3xl font-bold tracking-tighter cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            PORTFOLIO<span className="text-primary">.</span>
          </motion.h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Frontend Developer <br /> Park Cheol Ryeon
          </p>
        </motion.div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{
                scale: 1.05,
                x: 10,
                backgroundColor: "rgba(49, 150, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeSection === item.id
                    ? "text-primary scale-110"
                    : "group-hover:text-primary group-hover:rotate-12 group-hover:scale-110"
                }`}
              />
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex gap-1 justify-center items-start"
      >
        {/* 이력서 */}
        <motion.a
          href="/parkcheolryeon_resume.pdf"
          download
          whileHover={{
            scale: 1.06,
            backgroundColor: "rgba(49, 150, 255, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-2.5 py-1.5 rounded-[4px] border border-primary/30 text-primary 
               text-[10px] font-medium flex items-center gap-1.5 cursor-pointer 
               transition-all"
        >
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm leading-none"
          >
            📄
          </motion.span>
          이력서
          <DownloadIcon className="w-3 h-3" />
        </motion.a>

        {/* 자소서 */}
        <motion.a
          href="/parkcheolryeon_self_introduce.pdf"
          download
          whileHover={{
            scale: 1.06,
            backgroundColor: "rgba(255, 180, 0, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-2.5 py-1.5 rounded-[4px] border border-yellow-500/30 text-yellow-600
               text-[10px] font-medium flex items-center gap-1.5 cursor-pointer 
               transition-all"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="text-sm leading-none"
          >
            ✏️
          </motion.span>
          자기소개서
          <DownloadIcon className="w-3 h-3" />
        </motion.a>

        {/* 포트폴리오 */}
        <motion.a
          href="/parkcheolryeon_portfolio.pdf"
          download
          whileHover={{
            scale: 1.06,
            backgroundColor: "rgba(0, 200, 150, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-2.5 py-1.5 rounded-[4px] border border-emerald-500/30 text-emerald-600
               text-[10px] font-medium flex items-center gap-1.5 cursor-pointer 
               transition-all"
        >
          <motion.span
            animate={{ rotate: [0, -12, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm leading-none"
          >
            🚀
          </motion.span>
          포트폴리오
          <DownloadIcon className="w-3 h-3" />
        </motion.a>
      </motion.div>
    </aside>
  );
}
