import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedCreators } from "../../features/featuredCreators/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import background from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";

function Cards() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNav = (item) => {
     navigate(`/${item}`);
  };
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
                  <Box className={classes.forUpper} onClick={() => {
                            handleNav(item.username);
                          }}>
                    <img

                      className={classes.forUpper}
                      src={item.creator_cover}
                      alt="cov"
                    />
                  </Box>
                  <Box className={classes.fordown}>
                    <Typography variant="h4" className={classes.forName}>
                      {item.username}
                    </Typography>
                    <Typography className={classes.froFullName}>
                      @ {item.fullName}
                    </Typography>
                    <Typography className={classes.forBio}>
                      {item.bio}
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      className={classes.forCreator}
                      src={item.creator_img}
                      alt="creator"
                    />
                  </Box>
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
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-around",
  },
  forCard: {
    width: 300,
    height: 400,
    borderRadius: 20,
    boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    position: "relative",
    transition: "0.3s all ease-in-out",
    cursor: "pointer",
    " &:hover": {
      marginTop: "-10px",
    },
  },
  forUpper: {
    width: 300,
    height: 200,
  },
  fordown: {
    backgroundColor: "#B5B5B5",
    height: 200,
    borderRadius: "78% 0% 10% 38% / 28% 54% 0% 0%   ",
  },
  forName: {
    display: "flex",

    paddingLeft: 20,
    color: "white",
    fontSize: 18,
    paddingTop: 80,
  },
  froFullName: {
    display: "flex",
    paddingLeft: 20,
    color: "#666666",
    fontWeight: 600,
    fontSize: "1.25rem",
  },
  forBio: {
    display: "flex",
    paddingLeft: 20,
    color: "white",
  },
  forCreator: {
    position: "absolute",
    bottom: "155px",
    left: 20,
    height: 80,
    width: 80,
    borderRadius: 50,
  },
}));
