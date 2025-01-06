import { Stack, Typography, Box } from "@mui/material";
//import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import WhatsAppIcon from "@mui/icons-material/WhatsApp";
//import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
//import TwitterIcon from "@mui/icons-material/Twitter";
//import { GitHub } from "@mui/icons-material";
//import Instagram from "@mui/icons-material/Instagram";
//import { Link } from "react-router-dom";
import { Navbar } from "./";
import aboutCV from "../Utils/Images/aboutCV.jpg";

// the briefing of the website  nothing much only an overview of the resume@builder

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
              Resume@Builder is a free website where you can quickly create
              a resume. It offers many templates to choose from, and you
              can add a  profile picture. After filling in the information,
              you can  preview your  resume and download it to your computer. 
              You can also update or delete your previous resumes.







           
          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img
              src={aboutCV}
              alt="img"
              // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "20px",
              },
              fontWeight: "10",
              color: "dark",
            }}
          >
            Any Queries For This Application Please Contact :8320474588 
          </Typography>
          
        </Box>
      </Stack>
    </>
  );
}
