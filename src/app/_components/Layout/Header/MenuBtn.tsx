"use client";

import { Box, styled } from "@mui/material";
import { easeInOut, motion } from "framer-motion";

interface IProps {
  open: boolean;
  onClick: () => void;
}

export default function MenuBtn(props: IProps) {
  const { open, onClick } = props;

  const variant = open ? "open" : "close";

  const top = {
    close: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 2 },
  };
  const center = {
    close: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottom = {
    close: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -2 },
  };

  const SvgLineValue = {
    initial: "close",
    animate: variant,
    transition: { duration: 0.3, ease: easeInOut },
  };

  return (
    <Box
      onClick={onClick}
      sx={(theme) => ({
        padding: "10px",
        cursor: "pointer",
        marginRight: "24px",
        [theme.breakpoints.up("tablet")]: {
          display: "none",
        },
      })}
    >
      <Wrapper preserveAspectRatio="none" viewBox="0 0 6 4.5">
        <Line x1="0" x2="6" y1="0" y2="0" variants={top} {...SvgLineValue} />
        <Line x1="0" x2="6" y1="2" y2="2" variants={center} {...SvgLineValue} />
        <Line x1="0" x2="6" y1="4" y2="4" variants={bottom} {...SvgLineValue} />
      </Wrapper>
    </Box>
  );
}

const Wrapper = styled(motion.svg)(({ theme }) => ({
  width: "16px",
  height: "12px",
  cursor: "pointer",
  color: "#424242",
  strokeWidth: "2px",
  overflow: "visible",
  transition: "all 0.3s ease-in-out",
}));

const Line = styled(motion.line)(() => ({
  strokeWidth: 2,
  stroke: "#424242",
  strokeLinecap: "round",
  vectorEffect: "non-scaling-stroke",
}));
