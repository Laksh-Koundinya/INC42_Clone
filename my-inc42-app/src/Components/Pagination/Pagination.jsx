import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function PaginationRounded({page,handlePage,limit,data}) {
  const classes = useStyles();

  const totalPages = Math.ceil( data.length/limit)
  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={Number(5) } page={page} onChange={handlePage} />
    </div>
  );
}