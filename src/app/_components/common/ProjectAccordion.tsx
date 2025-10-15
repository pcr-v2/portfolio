import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
} from "@mui/material";

interface IProps {
  title: string;
  projectSummary: string[];
  projectStack: string[];
  projectDeploy?: string[];
  projectHighlight?: string[];
  myRoll: string[];
}

export default function ProjectAccordion(props: IProps) {
  const {
    title,
    projectSummary,
    projectStack,
    projectDeploy,
    myRoll,
    projectHighlight,
  } = props;

  return (
    <AccordionST square disableGutters defaultExpanded>
      <AccordionSummary expandIcon={<Arrow />}>
        <Title>{title}</Title>
      </AccordionSummary>

      <AccordionDetails>
        <Box>
          <IosDeviceTitle>[개요]</IosDeviceTitle>
          {projectSummary.map((el, idx) => {
            return <DeviceDetail key={idx}>{el}</DeviceDetail>;
          })}
        </Box>

        <Box>
          <IosDeviceTitle>[사용기술]</IosDeviceTitle>
          <Box
            sx={{
              width: "100%",
              gap: "6px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {projectStack.map((el, idx) => {
              return (
                <DeviceDetail key={idx}>
                  {`${el}`}
                  {projectStack.length - 1 !== idx && ","}
                </DeviceDetail>
              );
            })}
          </Box>
        </Box>

        {projectDeploy && (
          <Box>
            <IosDeviceTitle>[배포]</IosDeviceTitle>
            <Box sx={{ width: "100%", gap: "6px", display: "flex" }}>
              {projectDeploy.map((el, idx) => {
                return (
                  <DeviceDetail key={idx}>
                    {el}
                    {projectDeploy.length - 1 !== idx && ","}
                  </DeviceDetail>
                );
              })}
            </Box>
          </Box>
        )}
        <Box>
          <IosDeviceTitle>[담당업무]</IosDeviceTitle>
          {myRoll.map((el, idx) => {
            return <DeviceDetail key={idx}>{el}</DeviceDetail>;
          })}
        </Box>

        {projectHighlight && (
          <Box>
            <IosDeviceTitle>[하이라이트]</IosDeviceTitle>
            {projectHighlight.map((el, idx) => {
              return <DeviceDetail key={idx}>{el}</DeviceDetail>;
            })}
          </Box>
        )}
      </AccordionDetails>
    </AccordionST>
  );
}

const Title = styled("span")(({ theme }) => {
  return {
    fontWeight: 700,
    fontSize: "20px",
    color: "#424242",
    lineHeight: "160%",
    fontFamily: "NanumSquareNeo",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "16px",
    },
  };
});

const DeviceDetail = styled(Box)(({ theme }) => {
  return {
    fontWeight: 400,
    fontSize: "16px",
    color: "#616161",
    fontFamily: "NanumSquareNeo",
    [theme.breakpoints.down("tablet")]: {
      fontSize: "14px",
    },
  };
});

const AccordionST = styled(Accordion)(({ theme }) => ({
  width: "100%",
  "&.MuiAccordion-root": {
    width: "100%",
    maxWidth: "unset",
    borderRadius: "8px",
    padding: "24px",
    backgroundColor: "#fff",
    border: `1px solid #eee`,
  },
  "& .MuiButtonBase-root": {
    alignItems: "center",
  },
  "& .MuiCollapse-wrapperInner": {
    border: "none",
    marginTop: "10px",
    paddingTop: "10px",
  },

  [theme.breakpoints.down("tablet")]: {
    "&.MuiAccordion-root": {
      padding: "14px 16px",
    },
  },
}));

const IosDeviceTitle = styled(DeviceDetail)(({ theme }) => {
  return {
    fontSize: 16,
    fontWeight: 700,
    marginTop: "10px",
    color: "#424242",
    [theme.breakpoints.down("tablet")]: {
      fontSize: 14,
    },
  };
});

const Arrow = styled(ExpandMore)(({ theme }) => {
  return {
    width: "22px",
    height: "22px",
    alignItems: "flex-start",
  };
});
