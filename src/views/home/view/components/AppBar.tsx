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
          background: "linear-gradient(90deg,rgb(250, 61, 14),rgb(161, 72, 4))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MILKY WAY
      </Typography>
      <Box
        sx={{
          display: "flex",
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
    </Box>
  );
}
