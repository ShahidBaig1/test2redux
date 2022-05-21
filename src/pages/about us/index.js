import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import coverImg from "../../assets/cv.png";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCreatedArts } from "../../features/createdArts/action";

function AboutUs() {
  const classes = useStyles();
  const param = useParams();
  const dispatch = useDispatch();

  const {
    getArtsCreated: { createdArts },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCreatedArts(param.creatorName));
  }, []);
  return (
    <>
      <Box className={classes.forCover}></Box>

      <Box className={classes.sideBar}>
        <Box>{<img className={classes.forAvatar} src={createdArts.img} />}</Box>
        <br />
        <Box>
         
          <Box>{<h1>{createdArts.username}</h1>}</Box>
          <Box>{<h3>{createdArts.bio}</h3>}</Box>
          <Box>{<h6>{createdArts.walletAddress}</h6>}</Box>
        </Box>
      </Box>
    </>
  );
}

{
}
export default AboutUs;
const useStyles = makeStyles((theme) => ({
  forCover: {
    background: `url("${coverImg}")`,
    width: "100%",
    height: 350,
    position: "relative",
  },
  sideBar: {
    position: "relative",
    marginLeft: 10,
    width: 300,
    // border: "1px solid black",
    height: 400,
    boxShadow:
      " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  forAvatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    border: "1px solid black",
    position: "absolute",
    top: -50,
    left: 90,
  },
}));
