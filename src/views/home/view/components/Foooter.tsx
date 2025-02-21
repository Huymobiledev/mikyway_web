import { Box, Typography } from "@mui/material";

export default function Footer() {
  const dataContact = [
    "/assets/icons/ic_fb.png",
    "/assets/icons/ic_zalo.png",
    "/assets/icons/ic_insta.png",
  ];
  const viewContact = () => {
    return (
      <Box
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "50vw",
            lg: "50vw",
            xl: "50vw",
          },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          img: {
            width: {
              xs: "100vw",
              sm: "100vw",
              md: "50vw",
              lg: "50vw",
              xl: "50vw",
            },
            height: "auto",
            objectFit: "cover",
          },
        }}
      >
        <Typography
          sx={{
            font: "Montserrat",
            color: "white",
            fontWeight: 800,
            letterSpacing: 1,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            fontSize: {
              xs: "14px",
              sm: "14px",
              md: "14px",
              lg: "16px",
              xl: "18px",
            },
            span: {
              font: "Montserrat",
              color: "white",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "30px",
                lg: "36px",
                xl: "44px",
              },
            },
          }}
        >
          {"Greate choice for your pet".toUpperCase()}
          <span>{"Preminum Pet Foods"}</span>
        </Typography>
        <img src={`/assets/background/best_food.png`} />
      </Box>
    );
  };
  const viewQuestion = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "80%",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            font: "Montserrat",
            color: "#fce219",
            fontWeight: 800,
            letterSpacing: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "24px",
              xl: "26px",
            },
            span: {
              font: "Montserrat",
              color: "white",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "16px",
                xl: "18px",
              },
            },
          }}
        >
          {"Have a Question?".toUpperCase()}
          <span>{"Contact Us"}</span>
        </Typography>
        <Box
          sx={{
            py: "10px",
            px: "20px",
            backgroundColor: "#fce219",
            borderRadius: "10px",
            color: "#54453C",
            font: "Montserrat",
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: {
              xs: "14px",
              sm: "14px",
              md: "14px",
              lg: "16px",
              xl: "18px",
            },
            "&:hover": {
              transition: "transform 0.3s ease-in-out",
              transform: "scale(1.3)",
            },
          }}
        >
          {"(01) 123 456 789"}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            mt: "10px",

            img: {
              width: "40px",
              height: "40px",
              objectFit: "cover",
              "&:hover": {
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1.3)",
              },
            },
          }}
        >
          {dataContact.map((item, index) => (
            <img src={item} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            mt: "10px",
            font: "Montserrat",
            color: "white",
            fontWeight: 500,
            fontSize: "12px",
            img: {
              width: "25px",
              height: "25px",
              objectFit: "cover",
              "&:hover": {
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1.3)",
              },
            },
          }}
        >
          <img src={"/assets/icons/ic_location.png"} />
          <span>{"123 Street Name, City, Vietnam"}</span>
        </Box>
      </Box>
    );
  };
  const viewTimeOpen = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "80%",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            font: "Montserrat",
            color: "#fce219",
            fontWeight: 800,
            letterSpacing: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "24px",
              xl: "26px",
            },
          }}
        >
          {"Opening Hours".toUpperCase()}
        </Typography>
        <Typography
          sx={{
            font: "Montserrat",
            color: "#d2d6d4",
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "10px",
            span: {
              color: "white",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: "14px",
            },
          }}
        >
          MON to FRI
          <span>8:00 AM - 05:00 PM</span>
        </Typography>
        <Typography
          sx={{
            font: "Montserrat",
            color: "#d2d6d4",
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "10px",
            span: {
              color: "white",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: "14px",
            },
          }}
        >
          Saturday
          <span>8:00 AM - 12:00 AM</span>
        </Typography>
        <Typography
          sx={{
            font: "Montserrat",
            color: "#d2d6d4",
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "10px",
            span: {
              color: "white",
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: "14px",
            },
          }}
        >
          SunDay
          <span>Close</span>
        </Typography>
      </Box>
    );
  };
  const viewOpenIng = () => {
    return (
      <Box
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "50vw",
            lg: "50vw",
            xl: "50vw",
          },
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          px: "20px",
          py: "10px",
        }}
      >
        {viewQuestion()}
        <Box
          sx={{
            height: "80%",
            width: "1px",
            borderRight: "2px dotted #deaf02",
          }}
        />
        {viewTimeOpen()}
        <Box
          sx={{
            height: "80%",
            width: "1px",
            borderRight: "2px dotted #deaf02",
          }}
        />
      </Box>
    );
  };
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: {
          xs: "center",
          sm: "center",
          md: "flex-start",
          lg: "flex-start",
          xl: "flex-start",
        },
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        backgroundColor: "#54453C",
        mt: "50px",
      }}
    >
      {viewOpenIng()}
      {viewContact()}
    </Box>
  );
}
