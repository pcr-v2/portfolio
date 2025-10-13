"use client";

import { createContext, useContext, useRef, ReactNode } from "react";

interface ScrollContextType {
  registerSection: (name: string, ref: HTMLDivElement) => void;
  scrollTo: (name: string, onDone?: () => void) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be used within ScrollProvider");
  return ctx;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const sections = useRef<Record<string, HTMLDivElement>>({});

  const registerSection = (name: string, ref: HTMLDivElement) => {
    sections.current[name] = ref;
  };

  const scrollTo = (name: string, onDone?: () => void) => {
    const target = sections.current[name];
    if (!target) return;

    // 스크롤 실행
    target.scrollIntoView({ behavior: "smooth" });

    // ✅ 스크롤 완료 감지
    let lastY = window.scrollY;
    let stillCount = 0;

    const checkScrollEnd = () => {
      const currentY = window.scrollY;

      // 스크롤 위치가 거의 안 변하면 멈춘 걸로 판단
      if (Math.abs(currentY - lastY) < 1) {
        stillCount++;
        if (stillCount > 5) {
          onDone?.(); // 스크롤 완료 시 콜백 실행
          return;
        }
      } else {
        stillCount = 0;
        lastY = currentY;
      }

      requestAnimationFrame(checkScrollEnd);
    };

    requestAnimationFrame(checkScrollEnd);
  };

  return (
    <ScrollContext.Provider value={{ registerSection, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
