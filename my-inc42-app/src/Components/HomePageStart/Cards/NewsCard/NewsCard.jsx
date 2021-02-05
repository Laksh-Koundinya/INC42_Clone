import {
    CardContent,
    Card,
    Typography,
    Avatar,
    CardHeader,
    Divider,
    CardMedia
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { TopCard } from "./TopCard";

import styles from "../Card.module.css";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        backgroundColor: "white",
        marginTop:30,
        marginBottom:30,
        margin: "auto"
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    category: {
        color: "crimson",
        textAlign:"start"
    },
    title: {
        textAlign:"start"
    },
    whatsAppIcon: {
        backgroundColor: "green",
    },
    facebookIcon: {
        backgroundColor: "#3b5999",
    },
    twitterIcon: {
        backgroundColor: "#55acee",
    },
    linkedInIcon: {
        backgroundColor: "#0077B5",
    },
    iconColor: {
        color: "white",
    },
    icons: {
        display: "flex",
        flexDirection: "column",
        marginRight: "10%",
    },
    allIcons: {
        display: "flex",
        gap: 10,
    },
    socialMediaIconsContainer: {
        display: "flex",
    },
    newsImage: {
        width: 680,
        height: 510,
        borderRadius:10,
        margin: "auto"
    },
}));

export const NewsCard = ({ data }) => {
    const classes = useStyles();
   console.log(data.image,"imageee")
   

    return (
        <Card className={classes.root}>
            <TopCard classes={classes} data={data} />
            <CardContent>
                <Divider />

                <div className={styles.contentPointers}>
                    {data.content?.map((item) => {
                        return <p> {item}</p>;
                    })}
                </div>
                <Divider />
            </CardContent>
            <CardMedia
                className={classes.newsImage}
                image={data.image}
                title="Paella dish"
            />
            <CardContent>
                {data.description}
            </CardContent>
        </Card>
    );
};
