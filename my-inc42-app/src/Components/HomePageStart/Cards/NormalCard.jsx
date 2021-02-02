import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Avatar,
    CardHeader,
} from "@material-ui/core";
import styles from "./Card.module.css";
import { Date } from "./Date";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 250,
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
}));
export const NormalCard = ({ data }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image= {data.image}
                title="Paella dish"
            />
            <CardContent>
                <Typography
                    component="h6"
                    variant="h5"
                    className={classes.title}
                >
                    {data.category}
                </Typography>
                <Typography
                    variant="subtitle1"
                    variant="h5"
                    component="h6"
                    className={styles.subTitle}
                >
                    {data.title}
                </Typography>

                <Typography className={classes.bottom} component="div">
                    <Typography className={classes.toUpper}>
                        By {data.author}
                    </Typography>
                    <Typography className={classes.bottomRight}></Typography>
                    <Typography component="div">
                        <Date />
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    );
};
