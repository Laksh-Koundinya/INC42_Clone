import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#211d1d",
    paddingTop: "50px",
  },
  img: {
    height: "30px",
    width: "auto",
    margin: "10px",
  },
  iconStyle: {
    margin: "10px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <img
          src="https://cdn.inc42.com/wp-content/uploads/2018/07/inc42-footer-logo-1-1.svg"
          alt="Logo"
          className={classes.img}
        />
        <Typography variant="caption" style={{ color: "#908e8e" }}>
          ©2021 Inc42 All Rights Reserved
        </Typography>
        <Box justifyContent="center" m={1}>
          <FacebookIcon className={classes.iconStyle} />
          <TwitterIcon className={classes.iconStyle} />
          <LinkedInIcon className={classes.iconStyle} />
          <TelegramIcon className={classes.iconStyle} />
          <YouTubeIcon className={classes.iconStyle} />
        </Box>
      </AppBar>
    </>
  );
};

export default Footer;
