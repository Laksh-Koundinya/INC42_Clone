import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUserDetails } from "../../Redux/profile/actionCreators";
import { useDispatch } from "react-redux";
import { Box, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CustomizedTabs } from "./Tabs";

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 800,
        minHeight:600
        
    },
    paper: {
        borderRadius: 25,
        paddingLeft:theme.spacing(4),
        paddingRight:theme.spacing(4),
        paddingBottom:theme.spacing(4)
    },
    title:{
        fontSize:"2.5rem",
        // position:"absolute"
    },
    logoutIcon:{
        height:12,
        width:11,
    },
    logoutLabel:{
        color: "#fe2d5b",
        marginLeft:4
    },
    header:{
        display:"flex",
    },
    logoutRightSide:{
        marginTop:"1.2rem",
        marginRight: "0%"

    },
    flexgrow:{
        display:"flex",
        flex:1
    }
}));
export const UserAccount = () => {
    const classes = useStyles();
    const profileData = useSelector((state) => state.profile.profileData);
    const token = useSelector((state) => state.login.token);
    const username = useSelector((state) => state.login.username);
    const isAuth = useSelector((state) => state.login.isAuth);

    const error = useSelector((state) => state.profile.error);
    const loading = useSelector((state) => state.profile.loading);

    const dispatch = useDispatch();

    const payload = {
        username,
        token,
    };
    useEffect(() => {
        dispatch(fetchUserDetails(payload));
    }, []);

    const logOut = () =>{
        // dispatch( logOutUser() )
    }

    console.log(profileData);
    return (
        <Container className={classes.root}>
            {!isAuth && <h1>Please login to view your account information.</h1>}

            <Paper variant="outlined" className={classes.paper}>
                <heading className = {classes.header}>
                    <Box className={classes.title}>
                        My account
                    </Box>
                    <div className = {classes.flexgrow}></div>
                    <Box  component = "div" className = {classes.logoutRightSide} onClick = {logOut}>
                       <img className = {classes.logoutIcon} src="https://cdn-stage-inc42-ext.rt.gw/wp-content/uploads/2019/10/Logout-Icon.png" />
                       <Box component = "span" className = {classes.logoutLabel}>Logout</Box>
                    </Box>
                </heading>

                {/* materail-ui tab */}
                {
                    isAuth && <CustomizedTabs profileData = {profileData} error = {error} loading = {loading} />
                }
                
            </Paper>
        </Container>
    );
};

// color: rgb(254, 45, 91);
// position: absolute;
// font-size: 13px;
// font-weight: normal;
// top: 1.2rem;
// right: 0px;
// }
