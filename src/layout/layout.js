import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLayoutStyles } from "styles/layoutStyles";

function Layout({ children }) {
  const theme = useLayoutStyles();
  return (
    <Grid container>
      <Grid xs={2}>abcd</Grid>
      <Grid container item xs={10} sx={theme.header}>
        <Box>Header</Box>
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
