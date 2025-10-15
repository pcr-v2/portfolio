"use client";

import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import MenuBtn from "@/app/_components/Layout/Header/MenuBtn";
import MobileMenu from "@/app/_components/Layout/Header/MobileMenu";
import SubMenus from "@/app/_components/Layout/Header/SubMenus";
import { useScroll } from "@/app/_components/ScrollProvider";
import { MENUS } from "@/config/Menus";

interface IProps {
  isScrolled: boolean;
  scrollDirection: "up" | "down" | null;
}

export default function Header(props: IProps) {
  const { scrollDirection, isScrolled = false } = props;

  const { scrollTo } = useScroll();

  const [btnHover, setBtnHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState({ hover: false, name: "" });

  const handleHover = (type: "In" | "Out", value: string) => {
    if (type === "In") {
      setIsHover({ hover: true, name: value });
      return;
    }
    if (type === "Out") {
      setIsHover({ hover: false, name: "" });
      return;
    }
  };

  return (
    <Wrapper
      style={{
        boxShadow:
          isScrolled && !isHover
            ? "0px 3px 6px 1px rgba(90, 97, 105, 0.12)"
            : "",
      }}
      onMouseEnter={() => handleHover("In", "Info")}
      onMouseLeave={() => handleHover("Out", "")}
    >
      <Contents>
        <TitleText>PARK CHEOL RYEON</TitleText>
        <MenusBox>
          {MENUS.map((menu) => {
            const singleMenuHover = isHover.hover && menu.name === isHover.name;

            return (
              <Menu
                key={menu.name}
                onClick={() => {
                  scrollTo(menu.refName, () => {
                    setIsHover({ hover: false, name: "" });
                  });
                }}
              >
                <Title
                  onMouseEnter={() => handleHover("In", menu.name)}
                  hovername={(isHover.name === menu.name).toString()}
                >
                  {menu.name}
                </Title>

                <AnimateLine
                  animate={{ width: singleMenuHover ? "58%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ left: "50%" }}
                />
                <AnimateLine
                  animate={{ width: singleMenuHover ? "55%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ right: "50%" }}
                />
              </Menu>
            );
          })}
        </MenusBox>
      </Contents>

      {/* <ContactBtn
        onHoverStart={() => setBtnHover(true)}
        onHoverEnd={() => setBtnHover(false)}
        onMouseEnter={() => handleHover("In", "Info")}
      >
        <BtnText
          initial={{ color: "#3196ff" }}
          animate={{ color: btnHover ? "#fff" : "#3196ff" }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          Contact
        </BtnText>
        <HoverBackground
          initial={{ scaleX: 0 }}
          animate={{ scaleX: btnHover ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </ContactBtn> */}

      <MenuBtn
        open={menuOpen}
        onClick={() => {
          setMenuOpen(!menuOpen);
          setIsHover({ hover: true, name: "" });
        }}
      />

      {/* <SubMenus
        {...isHover}
        isScrolled={isScrolled}
        scrollDirection={scrollDirection}
        hoverOff={() => setIsHover({ hover: false, name: "" })}
      /> */}

      <MobileMenu menuOpen={menuOpen} menuOff={() => setMenuOpen(false)} />
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)(({ theme }) => {
  return {
    top: 0,
    zIndex: 99999,
    width: "100%",
    height: "80px",
    display: "flex",
    margin: "0 auto",
    maxWidth: "1920px",
    position: "sticky",
    alignItems: "center",
    // backdropFilter: "blur(2px)",
    justifyContent: "space-between",
    // transition: "background-color 0.4s ease",
    backgroundColor: "#fff",

    [theme.breakpoints.down("tablet")]: {
      height: "60px",
    },
  };
});

const Contents = styled(Box)(({ theme }) => {
  return {
    gap: "100px",
    width: "100%",
    height: "100%",
    display: "flex",
    marginLeft: "90px",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.down("desktop")]: {
      gap: "60px",
      marginLeft: "24px",
    },
  };
});

const TitleText = styled(Box)(({ theme }) => {
  return {
    fontSize: 28,
    fontFamily: "SchoolSafetyConstellation",
    [theme.breakpoints.down("desktop")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: 20,
    },
  };
});

const MenusBox = styled(Box)(({ theme }) => {
  return {
    gap: "90px",
    height: "100%",
    display: "flex",
    [theme.breakpoints.down("desktop")]: {
      gap: "60px",
    },
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  };
});

const Menu = styled(motion.div)(() => {
  return {
    height: "100%",
    display: "flex",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    alignItems: "center",
    position: "relative",
    letterSpacing: "0.2px",
  };
});

const Title = styled(Box)<{ hovername: string }>(({ hovername }) => {
  return {
    cursor: "pointer",
    color: hovername === "true" ? "#3196ff" : "#212121",
  };
});

const AnimateLine = styled(motion.div)(() => {
  return {
    bottom: 0,
    height: "3px",
    display: "flex",
    position: "absolute",
    backgroundColor: "#3196ff",
  };
});

const ContactBtn = styled(motion.div)(({ theme }) => {
  return {
    display: "flex",
    fontWeight: 500,
    fontSize: "18px",
    cursor: "pointer",
    color: "#3196ff",
    lineHeight: "24px",
    overflow: "hidden",
    borderRadius: "8px",
    textAlign: "center",
    marginRight: "90px",
    padding: "10px 24px",
    position: "relative",
    justifyContent: "center",
    border: "2px solid #3196ff",
    backgroundColor: "transparent",

    [theme.breakpoints.down("desktop")]: {
      marginRight: "24px",
    },
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  };
});

const BtnText = styled(motion.span)(() => {
  return {
    zIndex: 2,
    position: "relative",
  };
});

const HoverBackground = styled(motion.div)(() => {
  return {
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    transformOrigin: "left",
    backgroundColor: "#3196ff",
  };
});
