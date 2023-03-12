import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How many years of organisational experience do you have?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have approximately one and a half years of professional experience
            as a Frontend Developer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are your expertise?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a frontend developer, my expertise lies in creating and
            implementing visually appealing and user-friendly interfaces for
            websites and applications. Specifically, I have strong proficiency
            in JavaScript and its frameworks and libraries such as React,
            Typescript and NextJS. I am well-versed in various CSS frameworks
            and libraries such as Bootstrap, SASS, TailwindCSS and MUI. I also
            have experience in optimizing website performance, ensuring
            cross-browser compatibility, and implementing responsive design for
            mobile devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I have a look at your past work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes you can check my past work by visiting my github at
            https://github.com/MuhammadFahadAkbar and my portfolio at
            https://www.behance.net/muhammadfahadakbar
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I contact you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can contact me through Email (fahadakbar200@gmail.com) or
            Linkedin (https://www.linkedin.com/in/muhammadfahadakbar/)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
