import React from "react";
import { makeStyles, withStyles,useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Typography, Box,TextField} from "@material-ui/core";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
const AntTabs = withStyles({
    root: {
        // borderBottom: "2px solid white",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
    },
    indicator: {
        backgroundColor: "black",
        border:"none"

      }
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: "none",
        minWidth: 138,
        fontWeight: theme.typography.fontWeightRegular,

        "&:hover": {
            // opacity: 1
        },
        backgroundColor: "grey",
        borderRight: "1px solid white",
        "&$selected": {
            color: "white",
            backgroundColor: "black",
            borderTop: "4px solid red",
            borderBottom: "none",
            fontWeight: theme.typography.fontWeightMedium,
        },
        // },
        // "&:focus": {
        //   color: "#40a9ff"
        // }
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
        marginTop:"2em"
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    text:{
        background:"rgba(255, 255, 255, 0.12)",
        borderRadius:"30px",
        margin:"15px",
        textAlign:'center',
        color:"white",
        width:"95%",
        height:"30px"
    },

    tabsBottomBox:{
        '& > *':{
            color:"white"
        },
        minHeight:300,
        backgroundColor:"black"
    }
}));

export function CustomizedTabs({profileData, error,loading}) {
    const theme = useTheme()
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue, "newvalu");
    };

    const { name, mobile, email } = profileData;


    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="ant example"
                >
                    <AntTab label="Subcriptions">itemtwo</AntTab>
                    <AntTab label="Profile" />
                    <AntTab label="Cards" />
                    <AntTab label="Transactions" />
                    <AntTab label="History" />
                </AntTabs>
            </div>
            <div className = {classes.tabsBottomBox}>
                <TabPanel value={value} index={0} dir={theme.direction} >
                    <div >
                        subscriptions(0)
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} >
                    {loading && <h2>..loading pls wait</h2>}
                    { error && <h3>something went wrong in displaying profile details</h3>}
                    <form>
                        <label>User Name</label>
                        <TextField
                            className={classes.text}
                            InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                            required
                            fullWidth
                            name="username"
                            type="text"
                            autoFocus
                            value={name}
                            disabled
                        />
                        <label>email</label>
                        <TextField
                            className={classes.text}
                            InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                            required
                            fullWidth
                            name="email"
                            type="text"
                            autoFocus
                            value={email}
                            disabled
                        />
                        <label>mobile</label>
                        <TextField
                            className={classes.text}
                            InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                            required
                            fullWidth
                            name="mobile"
                            type="text"
                            autoFocus
                            value={mobile}
                            disabled
                           
                        />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction} className = {classes.tabsBottomBox}>
                    no cards added
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction} >
                    Transactions(0)
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction} className = {classes.tabsBottomBox}>
                    u have no History
                </TabPanel>
            </div>
        </div>
    );
}


