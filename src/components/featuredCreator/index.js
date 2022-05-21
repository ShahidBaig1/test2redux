import React from "react";
import { Box, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../cards";

function FeaturedCreator() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.forHeading}>
          <Typography variant="h5">Featured Creators</Typography>
        </Box>
        <Box>
          <Divider className={classes.forDivider} />
        </Box>

      </Box>
      <Box>
        <Cards/>
      </Box>
    </>
  );
}

export default FeaturedCreator;
const useStyles = makeStyles((theme) => ({
  forHeading: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  forDivider: {
    margin: "auto",
    width: "85%",
  },
}));
