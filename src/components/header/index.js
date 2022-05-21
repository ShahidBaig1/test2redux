import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import img1 from "../../assets/boax.png";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainCont}>
        <Box className={classes.logo}>
          <Link to="/home">
            <img className={classes.logo} src={img1} />
          </Link>
          <Box className="search_cont">
            <Toolbar>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search here"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </Toolbar>
          </Box>
        </Box>

        <Box className={classes.forLinksNBtns}>
          <Box className={classes.forLinks}>
            <Link to="/market">Market</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/blog">blog</Link>
            <Link to="/faq">Faqs</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </Box>
          <Box className={classes.btns}>
            <Button className={classes.btn1}>CREATE NFT </Button>
            <Button className={classes.btn2}>CONNECT WALLET </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 80,
    paddingLeft: 10,

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainCont: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    justifyItems: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
  },

  forLinks: {
    marginLeft: 8,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& a": {
      margin: 10,
      fontSize: 20,
      fontWeight: 700,
      textDecoration: "none",
      color: "black",
    },
  },
  search: {
    position: "relative",
    border: " 1px solid #959595",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  search_cont: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    margin: "0 auto",
    margintop: 100,
    padding: 25,
    width: "70vh",
    boxShadow: "3px 8px #888888",
    borderRadius: 10,
  },
  btns: {
    display: "flex",
  },
  btn1: {
    padding: "20 10",

    borderRadius: 15,
    backgroundColor: "#B3A16C",
    fontWeight: "bold",
    color: "white",
    "& :hover": {
      color: "black",
    },
  },
  btn2: {
    padding: "8 0",
    minHeight: 0,
    borderRadius: 15,
    backgroundColor: " #0A1A72",
    fontWeight: "bold",
    color: "white",
    paddingRight: 10,
    marginLeft: 2,
    "& :hover": {
      color: "black",
    },
  },
  forLinksNBtns: {
    display: "flex",
    flexWrap: "wrap",
  },
}));
