import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedCreators } from "../../features/featuredCreators/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import background from "../../assets/bg.png";

function Cards() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    getCreator: { featuredCreators, featureLoading },
  } = useSelector((state) => state);
  console.log(featuredCreators, "ioyugkjhglkj");

  useEffect(() => {
    dispatch(getFeaturedCreators());
  }, []);
  return (
    <>
      <Box>
        <Box className={classes.formain}>
          {featuredCreators.map((item) => {
            return (
              <>
                <Box className={classes.forCard}>
                  <Box className={classes.forUpper}></Box>
                  <Box></Box>
                  {/* <Typography>{item.username}</Typography> */}
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Cards;

const useStyles = makeStyles((theme) => ({
  formain: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-around",
  },
  forCard: {
    width: 350,
    height: 300,
    border: "1px solid black",
  },
  forUpper: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    background: `url("${background}")`,
    backgroundImage: `url(${background})`,
  },
}));
