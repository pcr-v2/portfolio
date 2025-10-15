"use client";

import { Box, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { useScroll } from "@/app/_components/ScrollProvider";
import { MENUS } from "@/config/Menus";

interface IProps {
  menuOpen: boolean;
  menuOff: () => void;
}

export default function MobileMenu({ menuOpen, menuOff }: IProps) {
  const [hoverChild, setHoverChild] = useState({ hover: true, childName: "" });
  const [btnHover, setBtnHover] = useState(false);
  const { scrollTo } = useScroll();
  return (
    <AnimatePresence>
      {menuOpen && (
        <Drawer
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {MENUS.map((menu) => (
              <Box key={menu.name}>
                <MenuItem
                  onClick={() => {
                    menuOff(); // 드로워 닫기 먼저 실행
                    setTimeout(() => {
                      scrollTo(menu.refName);
                    }, 350); // 드로워 transition 0.3초 이후에 스크롤
                  }}
                >
                  {menu.name}
                </MenuItem>
              </Box>
            ))}
            {/* <ContactBtn
              onHoverStart={() => setBtnHover(true)}
              onHoverEnd={() => setBtnHover(false)}
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
          </Box>
        </Drawer>
      )}
    </AnimatePresence>
  );
}

// 드로워
const Drawer = styled(motion.div)(() => ({
  position: "fixed",
  top: 60,
  right: 0,
  width: "100%", // 화면 전체 너비
  height: "calc(100vh - 60px)",
  backgroundColor: "#fff",
  zIndex: 1300,
  padding: "24px",
  display: "flex",
  flexDirection: "column",
}));

const MenuItem = styled(Box)(() => ({
  fontWeight: 600,
  fontSize: "24px",
  marginBottom: "8px",
  //   cursor: "pointer",
  //   ":hover": {
  //     color: "#06c755",
  //   },
}));

const SubMenuWrapper = styled(motion.div)(() => ({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "12px",
}));

const SubMenuItem = styled(Box)(() => ({
  fontSize: "16px",
  width: "fit-content",
  fontWeight: 400,
  padding: "4px 0",
  cursor: "pointer",
  position: "relative",
  ":hover": {
    color: "#3196ff",
  },
}));

const ContactBtn = styled(motion.div)(({ theme }) => {
  return {
    width: "100%",
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
  };
});

const UnderLine = styled(motion.div)(() => {
  return {
    left: 0,
    bottom: 0,
    height: "1px",
    width: "100%",
    display: "flex",
    position: "absolute",
    backgroundColor: "#212121",
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
