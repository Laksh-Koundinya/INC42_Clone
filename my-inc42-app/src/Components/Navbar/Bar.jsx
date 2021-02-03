import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HoverMenu from "./HoverMenu";
import SearchModal from "./SearchModal";

const popoverData = [
  {
    label: "INC42 PLUS",
    data1: [
      "EXPLORE INC42 PLUS",
      "PRODUCT MASTERCLASS",
      "PLAYBOOKS",
      "GUIDES",
      "MEMBER EXCLUSIVE STORIES",
      "REPORTS",
      "STARTUP DEALS",
    ],
  },
  {
    label: "FOR THE MAKERS",
    data2: ["THE MAKER SUMMIT 2021", "MAKER CIRCLES"],
  },
  {
    label: "INFOCUS",
    data3: [
      "STARTUP WATCHLIST 2021",
      "YEAR END REVIEW 2020",
      "WHAT THE FINANCIALS",
      "ELECTRIC VEHICLES THIS WEEK",
      "FUNDING GALORE",
      "BLOCKCHAIN THIS WEEK",
      "INDIAN STARTUP HUBS",
    ],
  },
  {
    label: "VIDEOS",
    data4: [
      "D2C DAY 2.0",
      "D2C DAY 2.0",
      "D2C MASTERCLASS",
      "TPS SESSIONS",
      "INC42 SHOTS",
      "AMA",
      "#STARTUPSVSCOVID19 AMA",
      "WEBINAR",
      "THE INC42 SHOW",
    ],
  },
  {
    label: "MORE",
    data5: [
      "STARTUP STORIES",
      "#STARTUPVSCOVID19",
      "RESOURCES",
      "ADVERTISE WITH US",
      "SUBMIT YOUR STARTUP",
      "SUBMIT YOUR GUEST POST",
      "ABOUT US",
      "CONTACT US",
      "LEGAL",
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  bar: {
    marginTop: "-25px",
    marginLeft: "25%",
    paddingTop: "10px",
    width: "50%",
    minHeight: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

const Bar = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.bar} elevation={3}>
        <SearchModal />
        <HoverMenu label="INC42 PLUS" data={popoverData[0].data1} />
        <HoverMenu label="FOR THE MAKERS" data={popoverData[1].data2} />
        <Typography variant="button" display="block">
          NEWS
        </Typography>
        <Typography variant="button" display="block">
          FEATURES
        </Typography>
        <HoverMenu label="INFOCUS" data={popoverData[2].data3} />
        <Typography variant="button" display="block">
          ANALYSIS
        </Typography>
        <HoverMenu label="VIDEOS" data={popoverData[3].data4} />
        <HoverMenu label="MORE" data={popoverData[4].data5} />
      </Paper>
    </>
  );
};

export default Bar;
