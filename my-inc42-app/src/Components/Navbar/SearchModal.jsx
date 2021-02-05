import React, { useState } from "react";
import { useFetch } from "./Hooks/CustomHooks";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Zoom from "@material-ui/core/Zoom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CancelIcon from "@material-ui/icons/Cancel";
import SearchCard from "./SearchModalComponent/SearchCard";
import SearchBottom from "./SearchModalComponent/SearchBottom";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    color: "#ef2b33",
    backgroundColor: "#f9ebeb",
    fontSize: "30px",
    borderRadius: "5px",
    marginLeft: "-1%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ec8583",
    },
  },
  headerBox: {
    height: "250px",
    backgroundColor: "#f4f4f4",
    padding: "50px",
  },
  searchBar: {
    position: "relative",
    border: "1px solid lightgrey",
    borderRadius: "7px",
    backgroundColor: "white",
    marginLeft: "21%",
    padding: "20px",
    width: "55%",
    height: "35px",
  },
  searchIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f42534",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  cancelIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "right",
    justifyContent: "flex-end",
    color: "grey",
  },
  searchResult: {
    marginTop: "50px",
  },
  pagination: {
    marginLeft: "25%",
  },
}));

// Transition Component
const Transition = React.forwardRef(function Transition(props, ref) {
  const [checked, setChecked] = React.useState(false);


  return (
    <>
      <Zoom in={checked} ref={ref} {...props} />
    </>
  );
});

// Search Modal Component
export default function SearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = useState("");
  const [showContent, setShowContent] = useState(false);
  const url = `https://mock-server-anusha.herokuapp.com/news?q=${query}`;
  const [loading, error, data] = useFetch(url);
  console.log(loading, error, data, "data");
  const history = useHistory()
  const [page, setPage] = useState(1);
  const limit = 6;
  const totalcount = Math.ceil(data && data.length / limit);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleShowSearchContent = () => {
    setShowContent(true);
    console.log(true);
  };

  const handleHideSearchContent = () => {
    // setShowContent(false);
    // console.log(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowContent(false);
  };
  const goToDisplayNews = (id,data) =>{
    const location = {
        pathName: `/news-details/${id}`,
        state:{
            data:data
        }
    }
    console.log(location,"loc")
    history.push( location.pathName )
  }

  return (
    <div>
      <SearchIcon className={classes.search} onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* Dialog Header Section */}
        <Box className={classes.headerBox}>
          <Box display="flex" justifyContent="space-around">
            <Box>
              <img
                src="https://inc42.com/wp-content/themes/inc42/img/inc42-sticky-logo.svg"
                alt="logo"
                height="35px"
              />
            </Box>
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <div className={classes.searchBar}>
              <div className={classes.searchIcon}>
                <ArrowBackIcon style={{ fontSize: "35px" }} />
              </div>
              <InputBase
                placeholder="Search for…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onMouseEnter={handleShowSearchContent}
              />
            </div>
          </Box>
        </Box>

        {/* Dialog Below Section */}
        <Box className={classes.searchResult}>
          {showContent &&
            data &&
            data
              ?.filter(
                (_, index) =>
                  index >= (page - 1) * limit && index < page * limit
              )
              .map((item) => (
                <SearchCard
                data = {item}
                goToDisplayNews = {  goToDisplayNews }
                  img={item.image}
                  author={item.author}
                  title={item.title}
                  date={item.published_at}
                />
              ))}
          {showContent && (
            <Pagination
              className={classes.pagination}
              color="secondary"
              variant="outlined"
              shape="rounded"
              count={totalcount}
              page={page}
              onChange={handlePageChange}
            />
          )}
        </Box>
        {data && <SearchBottom data={data} />}
      </Dialog>
    </div>
  );
}
