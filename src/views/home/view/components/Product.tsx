import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Product() {
  const dataProductDog = [
    "/assets/images/food_dog/food_dog_1.png",
    "/assets/images/food_dog/food_dog_2.png",
    "/assets/images/food_dog/food_dog_3.png",
    "/assets/images/food_dog/food_dog_5.png",
    "/assets/images/food_dog/food_dog_6.png",
    "/assets/images/food_dog/food_dog_5.png",
    "/assets/images/food_dog/food_dog_6.png",
    "/assets/images/food_dog/food_dog_5.png",
    "/assets/images/food_dog/food_dog_1.png",
    "/assets/images/food_dog/food_dog_2.png",
    "/assets/images/food_dog/food_dog_3.png",
    "/assets/images/food_dog/food_dog_5.png",
  ];
  const viewProdDog = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          px: "5%",
          overflow: "hidden",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Marquee className="hide-scroll" speed={100}>
          {dataProductDog.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  mr: "20px",
                  width: "14vw",
                  minWidth: "200px",
                }}
              >
                <Box
                  sx={{
                    px: "5px",
                    py: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#f0ede4",
                    "&:hover": {
                      img: {
                        transition: "transform 0.3s ease-in-out",
                        transform: "scale(1.3)",
                      },
                    },
                    img: {
                      width: "14vw",
                      minWidth: "200px",
                      height: "auto",
                    },
                  }}
                >
                  <img src={item} />
                </Box>
                <Typography
                  sx={{
                    font: "Montserrat",
                    color: "#54453C",
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    fontSize: "14px",
                  }}
                >
                  Product Name
                </Typography>
                <Typography
                  sx={{
                    font: "Montserrat",
                    color: "#fcba03",
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "12px",
                      lg: "12px",
                      xl: "14px",
                    },
                  }}
                >
                  $29.99
                </Typography>
                <Typography
                  sx={{
                    font: "Montserrat",
                    color: "black",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                    textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                    fontSize: "12px",
                  }}
                >
                  Thức ăn cho chó trưởng thành Nutri ...
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Marquee>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: "50px",
        gap: "10px",
        span: {
          font: "Montserrat",
          color: "#54453C",
          fontWeight: 800,
          letterSpacing: 0.2,
          gap: "5px",
          textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          px: "5%",
          fontSize: {
            xs: "12px",
            sm: "12px",
            md: "16px",
            lg: "20px",
            xl: "24px",
          },
        },
      }}
    >
      <Typography
        sx={{
          mt: "50px",
          mb: "10px",
          font: "Montserrat",
          color: "#54453C",
          fontWeight: 800,
          letterSpacing: 0.2,
          gap: "5px",
          textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
          fontSize: {
            xs: "20px",
            sm: "22px",
            md: "26px",
            lg: "28px",
            xl: "32px",
          },
        }}
      >
        Featured Products
      </Typography>
      <span>For Dogs</span>
      {viewProdDog()}
      <Box
        sx={{
          height: "50px",
        }}
      />
      <span>For Cats</span>
      {viewProdDog()}
      <Box
        sx={{
          height: "50px",
        }}
      />
      <span>For Rodents</span>
      {viewProdDog()}
    </Box>
  );
}
