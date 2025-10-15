import { Box, Button, TextField, styled } from "@mui/material";
import { useState } from "react";

export default function List() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!title || !message) return alert("제목과 내용을 모두 입력해주세요.");

    // 실제 메일 전송 로직 (서버 액션 or API 라우트로 변경 가능)
    console.log("메일 전송:", { title, message });

    alert("메일이 전송되었습니다!");
    setTitle("");
    setMessage("");
  };

  return (
    <Wrapper>
      <Box className="contact-box">
        <h2>Contact</h2>

        <TextField
          label="제목"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="내용"
          variant="outlined"
          fullWidth
          multiline
          minRows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button variant="contained" onClick={handleSubmit}>
          전송
        </Button>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "80px 20px",
  backgroundColor: "#f9fbff",
  borderTop: "1px solid #e0e0e0",

  ".contact-box": {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  h2: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#1a5ca1",
    textAlign: "center",
    marginBottom: "10px",
  },

  button: {
    alignSelf: "flex-end",
    backgroundColor: "#1a5ca1",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#194f90",
    },
  },
}));
