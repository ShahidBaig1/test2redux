import React, { useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedArts } from "../../features/featuredArts/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

function FeaturedArt() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNav = (item) => {
    navigate(`/${item}`);
  };

  const {
    getFeatured: { featuredArts, artsLoading },
  } = useSelector((state) => state);
  console.log(featuredArts, "hello");

  useEffect(() => {
    dispatch(getFeaturedArts());
  }, []);
  return (
    <>
      <Box>
        {artsLoading ? (
          <CircularProgress />
        ) : (
          <Box>
            {featuredArts.map((item) => {
              return (
                <>
                  <Box className={classes.mainCont}>
                    <Box className={classes.forImgCong}>
                      <img
                        className={classes.forImg}
                        src={item.creator_img}
                        alt="loii here"
                      />
                    </Box>
                    <Box className={classes.forsecondCond}>
                      <Box className={classes.forCreator}>
                        <span>
                          <img
                            className={classes.forImgOwner}
                            src={item.owner_img}
                            alt="creator"
                          />
                        </span>
                        <span
                          onClick={() => {
                            handleNav(item.username);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          @ {item.owner_name}
                        </span>
                      </Box>
                      <Box>
                        <Typography className={classes.forartName} variant="h4">
                          {item.art_name}
                        </Typography>
                      </Box>
                      <Box className={classes.forPriceNOwned}>
                        <Box>
                          <Box className={classes.forPrice}>Reserve Price</Box>
                          <Box>
                            <Typography variant="h5">
                              {item.art_price}
                            </Typography>
                          </Box>
                        </Box>

                        <Box className={classes.forOwnedBy}>
                          <Typography variant="h5">owned By</Typography>
                          <Box className={classes.forCreator}>
                            <span>
                              <img
                                className={classes.forImgOwner}
                                src={item.owner_img}
                                alt="creator"
                              />
                            </span>
                            <span
                              onClick={() => {
                                handleNav(item.creator_name);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              @ {item.owner_name}
                            </span>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={classes.forArtBtnCont}>
                        <Button className={classes.forArtBtn}>
                          view artwork
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
}

export default FeaturedArt;

const useStyles = makeStyles((theme) => ({
  mainCont: {
    display: "flex",
    // justifyContent: "space-evenly",
    marginTop: 10,
    // border: "1px solid black",
    width: "100%",
    paddingTop: 50,
  },
  forImgCong: {
    width: 550,
    height: 400,
  },
  forImg: {
    width: 400,
    height: 300,
    borderRadius: 15,
  },
  forCreator: {
    display: "flex",

    alignItems: "center",
    height: 50,
    width: 180,
    border: "1px solid black",
    borderRadius: 50,
  },
  forImgOwner: {
    height: 43,
    width: 43,
    borderRadius: 50,
    margin: 5,
  },
  forPriceNOwned: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  forPrice: {
    margin: 10,
    paddingRight: 20,
  },
  forOwnedBy: {
    borderLeft: "1px solid gray",
    height: 60,
    paddingLeft: 20,
  },
  forsecondCond: {
    margin: 0,
  },
  forartName: {
    display: "flex",
    lineHeight: 3,
  },
  forArtBtn: {
    marginTop: 30,
    display: "flex",
    color: "#B3A16C",
    border: "1px solid #B3A16C",
    background: "white",
    fontWeight: "bold",
    borderRadius: 15,
    padding: "10px 26px 10px 26px",
  },
}));
