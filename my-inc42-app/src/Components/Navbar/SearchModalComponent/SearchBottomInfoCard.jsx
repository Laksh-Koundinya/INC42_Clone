import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "150px",
    wordWrap: "break-word",
    margin: "10px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#f4f4f4",
    },
  },
  head: {
    color: "red",
    fontWeight: "700",
    fontSize: "12px",
  },
  content: {
    fontWeight: "700",
    fontSize: "15px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  foot: {
    color: "grey",
  },
});

const SearchBottomInfoCard = ({ label, item }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.head}>{label}</Typography>
      <Typography className={classes.content} variant="button">
        {item?.title}
      </Typography>
      <br />
      <span className={classes.foot}>
        {item?.author} - {item?.published_at} - {item?.time_taken_read}
      </span>
    </Box>
  );
};

export default SearchBottomInfoCard;
