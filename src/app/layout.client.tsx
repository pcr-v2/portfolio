"use client";

import { Box, styled, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { throttle } from "lodash";
import { ReactNode, useEffect, useRef, useState } from "react";

import Header from "@/app/_components/Layout/Header";
import { RootToast } from "@/app/_components/RootToast";
import { Dialogs } from "@/store/dialog/Dialogs";
import theme from "@/theme";

interface IProps {
  children: ReactNode;
}

export default function ClientLayout(props: IProps) {
  const { children } = props;

  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );
  const lastScrollY = useRef(0);

  const THRESHOLD = 20; // 작은 스크롤은 무시

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) < THRESHOLD) return; // 임계값 이하 무시

      setScrollDirection(diff > 0 ? "down" : "up");
      lastScrollY.current = currentScrollY;
    }, 100); // 100ms마다 처리

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false, prepend: false }}>
      <ThemeProvider theme={theme}>
        <Dialogs />
        <ChildrenWrap>
          <Header scrollDirection={scrollDirection} />
          {children}
        </ChildrenWrap>
        <CssBaseline />
        <RootToast />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

const ChildrenWrap = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100dvh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
