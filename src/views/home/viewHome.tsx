/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/material";
import ViewAppBar from "./view/components/AppBar";
import WelCome from "./view/components/Welcome";
import ViewCategories from "./view/components/Categories";
import Product from "./view/components/Product";
import Footer from "./view/components/Foooter";

export default function ViewHomePage(props: any) {
  const { t } = useTranslation();
  const [data, setData] = useState<any>(null);
  return (
    <Fragment>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          display: "flex",
          overflowY: "scroll",
          overflowX: "hidden",
          flexDirection: "column",
        }}
      >
        <WelCome />
        <ViewCategories />
        <Product />
     
        <Footer />
      </Box>
    </Fragment>
  );
}
