import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ViewAppBar(props: any) {
  const dataAppBar = ["Home", "Category", "Product", "About", "Contact"];
  return (
    <Box
      width={"100vw"}
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "10px",
        px: "5%",
      }}
    >
      <Typography
        sx={{
          font: "Montserrat",
          color: "white",
          fontWeight: 900,
          fontSize: "28px",
          background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MILKY WAY
      </Typography>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dataAppBar.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mr: "10px",
              transition: "all 0.3s",
              gap: "10px",
              "&:hover": {
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1.3)",
              },
            }}
          >
            <Typography
              sx={{
                font: "Montserrat",
                cursor: "pointer",
                color: "white",
                fontWeight: 800,
                fontSize: "16px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

              }}
            >
              {item}
            </Typography>
            {index < dataAppBar.length - 1 && (
              <Box
                sx={{
                  height: "10px",
                  width: "1px",
                  backgroundColor: "white",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <Box
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        cursor: "pointer",
        img:{
          width: "25px",
          height: "25px",
          objectFit: "cover",
        }
      }}
      >
        <img src={'/assets/icons/ic_more.png'}/>
      </Box>
    </Box>
  );
}
