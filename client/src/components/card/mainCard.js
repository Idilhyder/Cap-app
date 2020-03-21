import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PantryModal from "../pantry/pantryModal";
import { useState } from 'react';
  

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  text: {
    color: 'silver',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
  }
}));

const MainCard =() => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <Paper 
        elevation={3}>
        <h3 className={classes.text}>Explore</h3>
        <p className={classes.text}>Explore our vast library of recipes.
          Search by cuisine, Meal type and health considerations.
        </p>
        </Paper>
      <Paper
        elevation={3}>
        <h3 className={classes.text}>Manage Your Pantry</h3>
        <p className={classes.text}>Working together to reduce food waste by cooking with what you have to make quick yet mouth-watering meals</p>
        </Paper>
      <Paper 
        elevation={3}>
        <h3 className={classes.text}>Let's Get Cooking</h3>
        <p className={classes.text}>Mix and Match your pantry and let's get you fed now</p>
        </Paper>
    </div>
    {/* <PantryModal/> */}
   </>
  );
}
export default MainCard;