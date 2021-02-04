import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "auto",
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
  },
  foot: {
    color: "grey",
  },
});

const SearchBottomInfoCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.head}>NEWS</Typography>
      <Typography className={classes.content} variant="button">
        ContentContentContentContentContentContentContentContentContentContent
      </Typography>
      <br />
      <span className={classes.foot}>By Author - date - Time to read</span>
    </Box>
  );
};

export default SearchBottomInfoCard;
