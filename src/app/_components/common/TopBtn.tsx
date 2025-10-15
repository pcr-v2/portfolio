"use client";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const arrowVariants = {
    animate: (i: number) => ({
      y: [6, 0, -6],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    showButton && (
      <Wrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 30 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: "linear" }}
        onClick={scrollToTop}
      >
        {[0, 1].map((i) => (
          <ArrowIcon
            key={i}
            custom={i}
            variants={arrowVariants}
            animate="animate"
          >
            <KeyboardArrowUpRoundedIcon
              sx={{ fontSize: 28, color: "#1a5ca1" }}
            />
          </ArrowIcon>
        ))}
      </Wrapper>
    )
  );
}

const Wrapper = styled(motion.div)(() => ({
  zIndex: 50,
  right: "16px",
  bottom: "48px",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  position: "fixed",
  borderRadius: "100%",
  backgroundColor: "#f0f6ff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f0f6ff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
}));

const ArrowIcon = styled(motion.div)(() => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
