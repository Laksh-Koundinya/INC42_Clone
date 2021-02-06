import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserDetails } from "../../Redux/profile/actionCreators";
import { CustomizedTabs } from "./Tabs";
import { logoutUser } from "../../Redux/LoginRedux/actionCreator";

import { Box, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        minHeight: 600,
        marginTop:"2em"
    },
    paper: {
        borderRadius: 25,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    title: {
        fontSize: "2.5rem",
        // position:"absolute"
    },
    logoutIcon: {
        height: 12,
        width: 11,
    },
    logoutLabel: {
        color: "#fe2d5b",
        marginLeft: 4,
    },
    header: {
        display: "flex",
    },
    logoutRightSide: {
        marginTop: "1.2rem",
        marginRight: "0%",
        '&:hover':{
            cursor:"pointer"
        }
    },
    flexgrow: {
        display: "flex",
        flex: 1,
    },
}));
export const UserAccount = () => {
    const classes = useStyles();
    const profileData = useSelector((state) => state.profile.profileData);
    const token = useSelector((state) => state.login.token);
    const username = useSelector((state) => state.login.username);
    const isAuth = useSelector((state) => state.login.isAuth);
    const google = useSelector((state) => state.login.google);
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

    const logOut = () => {
        dispatch(logoutUser());
    };

    return (
        <Container className={classes.root}>
            

            <Paper variant="outlined" className={classes.paper}>
                <heading className={classes.header}>
                    <Box className={classes.title}>My account</Box>
                    <div className={classes.flexgrow}></div>
                    {
                        google && (<Box
                        component="div"
                        className={classes.logoutRightSide}
                        onClick={logOut}
                    >
                        <img
                            className={classes.logoutIcon}
                            src="https://cdn-stage-inc42-ext.rt.gw/wp-content/uploads/2019/10/Logout-Icon.png"
                        />
                        <Box component="span" className={classes.logoutLabel}>
                            Logout
                        </Box>
                    </Box>)

                    }
                   
                </heading>
                { (!google) && <h1>Please login to view your account information.</h1>}

                {/* materail-ui tab */}
                {
                    google && (
                        <CustomizedTabs
                            profileData={profileData.user}
                            error={error}
                            loading={loading}
                        />
                    )}

                {isAuth && (
                    <CustomizedTabs
                        profileData={profileData}
                        error={error}
                        loading={loading}
                    />
                )}
            </Paper>
        </Container>
    );
};
