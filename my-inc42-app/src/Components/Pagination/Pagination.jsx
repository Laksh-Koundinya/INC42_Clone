import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      display:"flex",
      justifyContent:"center"
    },
  },
}));


export function PaginationRounded({page,total, handlePageChange}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Pagination count={total } page={page} onChange={handlePageChange} />
    </div>
  );
}