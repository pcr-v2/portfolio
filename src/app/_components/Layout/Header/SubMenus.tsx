import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { easeInOut, Variants } from "framer-motion";
import { useEffect, useState } from "react";

import { useScroll } from "@/app/_components/ScrollProvider";
import { MENUS } from "@/config/Menus";

const variants: Variants = {
  open: {
    height: "auto",
    transition: { duration: 0.3, ease: easeInOut },
  },
  closed: {
    height: 0,
    transition: { duration: 0.2, ease: easeInOut },
  },
};

interface IProps {
  hover: boolean;
  name: string;
  isScrolled: boolean;
  scrollDirection: "up" | "down" | null;
  hoverOff: () => void;
}

export default function SubMenus(props: IProps) {
  const { hover, name = "Info", hoverOff, scrollDirection, isScrolled } = props;
  const { scrollTo } = useScroll();
  const [hoverChild, setHoverChild] = useState({ hover: true, childName: "" });

  useEffect(() => {
    if (scrollDirection != null) {
      setHoverChild({ hover: false, childName: "" });
    }
  }, [scrollDirection]);

  return (
    <AnimatePresence initial={false}>
      <Wrapper
        variants={variants}
        animate={hover ? "open" : "closed"}
        initial="closed"
        style={{
          backgroundColor: "#fff",
          boxShadow:
            hover || isScrolled
              ? "0px 3px 6px rgba(90, 97, 105, 0.12), 0px -1px 0px rgba(255,255,255,1) inset"
              : "",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Contents hovername={name}>
          <Box sx={{ display: "flex", width: "100%" }}>
            {MENUS.map((menu) => (
              <SubMenusGroup key={menu.name}>
                {menu?.children &&
                  menu?.children.map((child) => {
                    if (menu.name !== name) return;
                    return (
                      <SubMenuItem
                        key={child.name}
                        onClick={() => {
                          scrollTo(child.refName, () => {
                            hoverOff();
                            setHoverChild({ hover: false, childName: "" });
                          });
                        }}
                        onMouseEnter={() =>
                          setHoverChild({ hover: true, childName: child.name })
                        }
                        onMouseLeave={() =>
                          setHoverChild({ hover: false, childName: "" })
                        }
                        initial={{ opacity: 0 }}
                        animate={{ opacity: menu.name === name ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {child.name}

                        <UnderLine
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              child.name === hoverChild.childName ? "100%" : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </SubMenuItem>
                    );
                  })}
              </SubMenusGroup>
            ))}
          </Box>
        </Contents>
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.div)(({ theme }) => {
  return {
    top: 80,
    zIndex: 9999,
    width: "100%",
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    justifyContent: "start",
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  };
});

const Contents = styled(Box)<{ hovername: string }>(({ hovername, theme }) => {
  return {
    width: "100%",
    display: "flex",
    padding:
      hovername === "Info"
        ? "24px 0px 29px 420.25px"
        : hovername === "Projects"
          ? "24px 0px 29px 542.05px"
          : "24px 0px 29px 700.51px",

    [theme.breakpoints.down("desktop")]: {
      padding:
        hovername === "Info"
          ? "24px 0px 29px 281.36px"
          : hovername === "Projects"
            ? "24px 0px 29px 373.16px"
            : "24px 0px 29px 501.62px",
    },
  };
});

const SubMenusGroup = styled(Box)(() => ({
  gap: "12px",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  justifyContent: "start",
}));

const SubMenuItem = styled(motion.div)(() => ({
  fontWeight: 400,
  color: "#333",
  fontSize: "14px",
  cursor: "pointer",
  lineHeight: "17px",
  position: "relative",
}));

const UnderLine = styled(motion.div)(() => {
  return {
    left: 0,
    bottom: -4,
    height: "1px",
    width: "100%",
    display: "flex",
    position: "absolute",
    backgroundColor: "#212121",
  };
});
