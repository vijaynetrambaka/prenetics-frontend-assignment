import { Container, makeStyles, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: "#4F7942 ",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#4F7942 ",
      color: "white",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        {/* <Home className={classes.icon} /> */}
        <Typography className={classes.text}>Patient Management</Typography>
      </div>
      <div className={classes.item}>
        {/* <Home className={classes.icon} /> */}
        <Typography className={classes.text}>Result Upload</Typography>
      </div>
      <div className={classes.item}>
        {/* <Home className={classes.icon} /> */}
        <Typography className={classes.text}>Kit Activation</Typography>
      </div>
      
    </Container>
  );
};

export default Leftbar;