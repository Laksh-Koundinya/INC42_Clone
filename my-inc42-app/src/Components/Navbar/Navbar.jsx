import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Bar from "./Bar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LoginModal from "../Login_Signup/LoginModal";
import {useSelector} from "react-redux";
import {useHistory,Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 100,
  },
  title: {
    flexGrow: 1,
  },
  buttonStyle: {
    borderRadius: "2px",
    backgroundColor: "#f2abac",
    color: "red",
    height: "20px",
    marginRight: "10px",
  },
  iconStyle: {
    color: "#f2abac",
    fontSize: "25px",
    height: "auto",
    marginRight: "10px",
  },
  bar: {
    marginTop: "-25px",
    marginLeft: "15%",
    maxWidth: "70%",
    minHeight: "65px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory()
  const isAuth = useSelector(state => state.login.isAuth)

  const goToAccountPage = () => {
    history.push("/my-account")
  }
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        className={classes.root}
        style={{ backgroundColor: "#df2b33" }}
      >
        <Box display="flex" justifyContent="space-evenly" m={1} p={1}>
          <Link to ="/">
            <Box>
              <img
                alt="Logo"
                src="https://cdn.inc42.com/wp-content/uploads/2018/07/inc42-logo.svg"
              />
            </Box>
          </Link>
          <Box display="flex" justifyContent="space-evenly">
            <Box>
            
            {isAuth ? <Button  className={classes.buttonStyle} color="inherit" onClick = {goToAccountPage}> MY ACCOUNT </Button> : <LoginModal />}
              
            </Box>
            <Box>
              <Button className={classes.buttonStyle} color="inherit">
                BECOME A MEMBER
              </Button>
            </Box>
            <Box>
              <FacebookIcon className={classes.iconStyle} />
            </Box>
            <Box>
              <TwitterIcon className={classes.iconStyle} />
            </Box>
            <Box>
              <LinkedInIcon className={classes.iconStyle} />
            </Box>
            <Box>
              <MoreHorizIcon className={classes.iconStyle} />
            </Box>
          </Box>
        </Box>
      </AppBar>

      {/* Component for Navbar Tabs */}
      <Bar />
    </div>
  );
};

export default Navbar;
