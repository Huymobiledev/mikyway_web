import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function ViewCategories() {
  const dataCategories = [
    {
      img: "/assets/images/cate_Rodents.png",
      name: "For Rodents",
    },
    { img: "/assets/images/cate_cat.png", name: "For Cats" },
    { img: "/assets/images/cate_dog.png", name: "For Dogs" },
  ];
  const ViewCategories = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        {dataCategories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="h-[100%]"
          >
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                gap: "10px",
                "&:hover": {
                  img: {
                    transition: "transform 0.3s ease-in-out",
                    transform: "scale(1.3)",
                  },
                },
                img: {
                  width: "15vw",
                  height: "auto",
                },
                span: {
                  font: "Montserrat",
                  color: "#54453C",
                  fontWeight: 800,
                  letterSpacing: 0.2,
                  gap: "5px",
                  textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                    lg: "20px",
                    xl: "22px",
                  },
                },
              }}
            >
              <Box />
              <img src={item?.img} />
              <span>{item?.name}</span>
            </Box>
          </motion.div>
        ))}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: "30px",
      }}
    >
      {ViewCategories()}
    </Box>
  );
}
