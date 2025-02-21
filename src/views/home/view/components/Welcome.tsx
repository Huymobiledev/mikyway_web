import { Box, Typography } from "@mui/material";
import ViewAppBar from "./AppBar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function WelCome() {
  const des =
    "We not only provide food but also provide nutritious, safe and loving meals, so that every cat is healthy, happy and a companion for the long haul.";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < des.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + des[index]);
        setIndex((prev) => prev + 1);
      }, 30); // Điều chỉnh tốc độ hiển thị chữ

      return () => clearTimeout(timeout);
    }
  }, [index]);
  const viewWelcome = () => {
    return (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xl: "flex-start",
          },
          flexDirection: "column",
          pl: {
            xs: "0%",
            sm: "0%",
            md: "2%",
            lg: "10%",
            xl: "10%",
          },
          pr: {
            xs: "0%",
            sm: "0%",
            md: "2%",
            lg: "10%",
            xl: "10%",
          },
          position: "relative",
          "& #img_welcome": {
            "&:hover": {
              transition: "transform 0.3s ease-in-out",
              transform: "scale(1.1)",
            },
            position: "absolute",
            width: {
              xs: "120%",
              sm: "120%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            height: "auto",
            objectFit: "cover",
            right: {
              xs: "0%",
              sm: "0%",
              md: "5%",
              lg: "5%",
              xl: "5%",
            },
          },
        }}
      >
        <Typography
          sx={{
            zIndex: 10,
            fontFamily: "Montserrat",
            background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 900,
            letterSpacing: 1,
            gap: "5px",
            "&:hover": {
              transition: "transform 0.3s ease-in-out",
              transform: "scale(1.1)",
            },
            fontSize: {
              xs: "38px",
              sm: "38px",
              md: "36px",
              lg: "38px",
              xl: "40px",
            },
            lineHeight: {
              xs: "28px",
              sm: "30px",
              md: "36px",
              lg: "38px",
              xl: "40px",
            },
          }}
        >
          {"Milky Way".toUpperCase()}
        </Typography>
        <Typography
          sx={{
            font: "Montserrat",
            color: "#fce219",
            fontWeight: 800,
            letterSpacing: 1,
            gap: "5px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            zIndex: 10,
            "&:hover": {
              transition: "transform 0.3s ease-in-out",
              transform: "scale(1.1)",
            },
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "26px",
              xl: "28px",
            },
          }}
        >
          {'Thức ăn ngon, Boss vui trọn ngày'}
        </Typography>
        <Typography
          sx={{
            mt: "10px",
            zIndex: 10,
            font: "Montserrat",
            color: "white",
            fontWeight: 800,
            letterSpacing: 0.2,
            textAlign:'center',
            gap: "5px",
            "&:hover": {
              transition: "transform 0.3s ease-in-out",
              transform: "scale(1.1)",
            },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            fontSize: {
              xs: "56px",
              sm: "56px",
              md: "45px",
              lg: "50px",
              xl: "72px",
            },
            lineHeight:{
                xs: "56px",
                sm: "56px",
                md: "45px",
                lg: "50px",
                xl: "72px",
            }
          }}
        >
          Food For Dogs
        </Typography>
        <Box
          sx={{
            zIndex: 10,
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            span: {
              font: "Montserrat",
              color: "white",
              fontWeight: 600,
              letterSpacing: 0.1,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              whiteSpace: "pre-line",
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start",       
              },
              alignItems: "center",
              "&:hover": {
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1.1)",
              },
              flexDirection: "row",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
              my: "40px",
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "22px",
                xl: "24px",
              },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span id={"span_des"}>{displayedText}</span>
          </motion.div>
        </Box>
       
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          id={"img_welcome"}
          src={`/assets/background/bg_welcome.png`}
        />
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
        height: "100vh",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <ViewAppBar />
      {viewWelcome()}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FCE219",
          py: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            font: "Montserrat",
            color: "black",
            fontWeight: 800,
            letterSpacing: 0.2,
            gap: "5px",
            textShadow: "2px 2px 4px white",
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
            },
          }}
        >
          {"Real Recipes, Real Ingredients. Real Good".toUpperCase()}
        </Typography>
      </Box>
    </Box>
  );
}
