"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { MindSection } from "@/components/mind-section";
import { ContactSection } from "@/components/contact-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User, Briefcase, Brain, Mail, DownloadIcon } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "mind", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsSheetOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "mind", label: "Mind", icon: Brain },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col xl:flex-row overflow-x-hidden">
      <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border p-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">
          PORTFOLIO<span className="text-primary">.</span>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <motion.button
              className="p-2 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu />
            </motion.button>
          </SheetTrigger>
          <SheetContent side="left" className="min-h-full">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold tracking-tighter text-left">
                PORTFOLIO<span className="text-primary">.</span>
              </SheetTitle>
              <SheetDescription className="text-left">
                Frontend Developer Park Cheol Ryeon
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <item.icon
                    className={`w-4 h-4 ${
                      activeSection === item.id
                        ? "text-primary"
                        : "group-hover:text-primary"
                    }`}
                  />
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-20 flex gap-1 justify-center items-start flex-wrap"
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
                className="px-1 py-1.5 rounded-[4px] border border-primary/30 text-primary 
               text-[10px] font-medium flex items-center gap-1.5 cursor-pointer 
               transition-all"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xs leading-none"
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
                className="px-1 py-1.5 rounded-[4px] border border-yellow-500/30 text-yellow-600
               text-[10px] font-medium flex items-center gap-1.5 cursor-pointer 
               transition-all"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="text-xs leading-none"
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
                className="px-1 py-1.5 rounded-[4px] border border-emerald-500/30 text-emerald-600
               text-[10px] font-medium flex items-center gap-1.5 cursor-pointer 
               transition-all"
              >
                <motion.span
                  animate={{ rotate: [0, -12, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xs leading-none"
                >
                  🚀
                </motion.span>
                포트폴리오
                <DownloadIcon className="w-3 h-3" />
              </motion.a>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>

      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="flex-1 xl:ml-80 w-full transition-all duration-300">
        <AboutSection />
        <ProjectsSection />
        <MindSection />
        <ContactSection />

        <footer className="py-8 px-6 md:px-12 border-t border-border text-sm text-muted-foreground">
          <p>© 2025 Park Cheol Ryeon. All rights reserved.</p>
        </footer>
      </main>
      <ScrollToTop />
    </div>
  );
}
