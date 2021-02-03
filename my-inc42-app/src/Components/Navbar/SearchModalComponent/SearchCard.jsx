import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    borderRadius: "7px",
    backgroundColor: "white",
    marginLeft: "25%",
    margin: "10px",
    padding: "5px",
    width: "55%",
    height: "100px",
  },
  img: {
    height: "75px",
    width: "75px",
    margin: "10px",
  },
  content: {
    marginTop: "10px",
  },
});

const SearchCard = ({ img, title, author, date }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box>
          <img className={classes.img} src={img} alt="imageCard" />
        </Box>
        <Box flexGrow={1} className={classes.content}>
          <Typography variant="subtitle2">{title}</Typography>
          <span>
            <Typography variant="caption">{author}</Typography>
          </span>
          |
          <span>
            <Typography variant="caption">{date}</Typography>
          </span>
        </Box>
      </Box>
    </>
  );
};

export default SearchCard;
