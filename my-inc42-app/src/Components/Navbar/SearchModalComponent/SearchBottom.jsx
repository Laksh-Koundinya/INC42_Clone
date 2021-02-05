import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBottomInfoCard from "./SearchBottomInfoCard";
import { Box, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
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

const SearchBottom = ({ data }) => {
  const classes = useStyles();
  console.log(data[0])
  return (
    <Box className={classes.root}>
      <Box className={classes.subroot}>
        <Typography className={classes.head} variant="h5">
          Trending On Inc42
        </Typography>
        <SearchBottomInfoCard label="NEWS" item={data[0]} />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard label="NEWS" item={data[1]} />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard label="NEWS" item={data[2]} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.subroot}>
        <Typography className={classes.head} variant="h5">
          Inc42 Plus Member Exclusive
        </Typography>
        <SearchBottomInfoCard label="FEATURES" item={data[3]} />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard label="FEATURES" item={data[4]} />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard label="FEATURES" item={data[5]} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.subroot}>
        <Typography className={classes.head} variant="h5">
          Inc42 Shots
        </Typography>
        <SearchBottomInfoCard label="INC42 SHOTS" item={data[6]} />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard label="INC42 SHOTS" item={data[7]} />
        <Divider className={classes.divider} />
        <SearchBottomInfoCard label="INC42 SHOTS" item={data[8]} />
      </Box>
    </Box>
  );
};

export default SearchBottom;
