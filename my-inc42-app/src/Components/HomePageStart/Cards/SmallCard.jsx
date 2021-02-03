import React from 'react';
import { Card ,CardContent,Divider,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Date} from "./Date"
import styles from "./Card.module.css"


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        border:"none" 
    },
    
    title: {
        color: "crimson",
    },
    bottom: {
        display: "flex",
        marginTop: 15,
    },
    bottomRight: {
        display: "flex",
        flexGrow: 1,
    },
    toUpper: {
        textTransform: "Capitalize",
    },
    line:{
        marginLeft:"4px",
        marginRight:"4px"
    },
    subTitle:{
        fontSize: "bold",
        color: "black"
    }
}));
export const SmallCard = ({data}) => {
    const classes = useStyles()
    return (
        <>
        <Card variant = "outlined" className = {classes.root}>
            <CardContent>
                <Typography
                    component="h6"
                    variant="h5"
                    className={classes.title}
                >
                    {data.category}
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    className={styles.subTitle}
                >
                    {data.title}
                </Typography>

                <Typography className={classes.bottom} component="div">
                    <Typography className={classes.toUpper} color = "textSecondary">
                        By {data.author}
                    </Typography>
                   <Typography className = {classes.line} color = "textSecondary">|</Typography>
                    <Typography component="div" color = "textSecondary">
                        <Date />
                    </Typography>
                </Typography>
            </CardContent>
            {/* <Divider/> */}
        </Card>
        <Divider/>
        </>
    )
}
