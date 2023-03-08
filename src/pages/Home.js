import React from "react";
import { useHomeStyles } from "styles/homeStyles";
import Layout from "layout/layout";
import Box from "@mui/material/Box";

function Home() {
  const theme = useHomeStyles();

  return (
    <Layout>
      <Box>Hi</Box>
    </Layout>
  );
}

export default Home;
