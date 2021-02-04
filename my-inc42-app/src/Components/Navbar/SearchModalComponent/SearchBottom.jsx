import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBottomInfoCard from "./SearchBottomInfoCard";
import { Box, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  divider: {
    margin: "10px",
    width: "300px",
  },
  head: {
    margin: "10px",
  },
  subroot: {},
});

const SearchBottom = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.subroot}>
        <Typography className={classes.head} variant="h5">
          Trending On Inc42
        </Typography>
        <SearchBottomInfoCard />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.subroot}>
        <Typography className={classes.head} variant="h5">
          Inc42 Plus Member Exclusive
        </Typography>
        <SearchBottomInfoCard />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.subroot}>
        <Typography className={classes.head} variant="h5">
          Inc42 Shots
        </Typography>
        <SearchBottomInfoCard />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard />
      </Box>
    </Box>
  );
};

export default SearchBottom;
