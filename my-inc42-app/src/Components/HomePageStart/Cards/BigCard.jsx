import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import { Description } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        maxWidth: 800,
        margin:20
    },
    details: {
        // display: "flex",
        // flexDirection: "column"
    },
    content: {
        // flex: "1 0 auto"
        width: 300,
    },

    cover: {
        width: 500,
    },
    title: {
        color: "crimson",
        fontSize: "15px",
        textTransform:"uppercase"

    },
    avatar: {},
    subTitle: {},
    hiddenText: {
        maxHeight: 24,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
}));

function BigCard( { data , goToDisplayNews } ) {
    const classes = useStyles();
    //   const theme = useTheme();
    console.log(data, "Dataaa");

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={data.image}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
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
                        className={styles.subTitle}
                        onClick = { () => goToDisplayNews(data.id, data)}
                    >
                        {data.title}
                    </Typography>

                    <Typography
                        className={classes.shortDesc}
                        color="textSecondary"
                        className={classes.hiddenText}
                    >
                        {data.description}
                    </Typography>
                </CardContent>
                <div className={styles.cardBottom}>
                    <CardHeader
                        avatar={
                            <Avatar
                                alt={data.author}
                                src={data.author_image}
                                aria-label="recipe"
                                className={classes.avatar}
                            />
                        }
                    />
                    <div>
                        <span className={styles.author}>{data.author}</span>
                        {/* three elements with full stop */}
                        <Date published = {data.published_at} timeTakenToRead = {data.time_taken_read} />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export { BigCard };
