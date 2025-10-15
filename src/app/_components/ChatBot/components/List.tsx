import { Box, styled } from "@mui/material";

export default function List() {
  return <Wrapper>Contact</Wrapper>;
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    border: "1px solid blue",
  };
});
