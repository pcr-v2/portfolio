"use client";

import { Box, styled } from "@mui/material";

interface IProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color: string;
}

export default function Dot(props: IProps) {
  return <Wrapper {...props} />;
}

const Wrapper = styled(Box)<IProps>(({
  theme,
  left,
  right,
  color,
  top,
  bottom,
}) => {
  return {
    zIndex: 1,
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    position: "absolute",
    backgroundColor: color,
    top: top ? top : undefined,
    left: left ? left : undefined,
    right: right ? right : undefined,
    bottom: bottom ? bottom : undefined,

    [theme.breakpoints.down("tablet")]: {
      width: "24px",
      height: "24px",
    },
  };
});
