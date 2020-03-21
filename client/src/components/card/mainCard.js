import React from "react";
import './sideBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import KitchenIcon from '@material-ui/icons/Kitchen';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(20),
        height: theme.spacing(15),
    },
    },
    text: {
        margin: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    }));

const MainCard =() => {
const classes = useStyles();
return (
<>
<div className={classes.root}>
    <Paper 
    elevation={3}>
    <h3 className={classes.text}>Explore</h3>
    <SearchOutlinedIcon 
    style={{ fontSize: 50 }}/>
    </Paper>
    <Paper
    elevation={3}>
    <h3 className={classes.text}>Manage Your Pantry</h3>
    <KitchenIcon 
    style={{ fontSize: 50 }}/>
    </Paper>
    <Paper 
    elevation={3}>
    <h3 className={classes.text}>Let's Get Cooking</h3>
    <RestaurantMenuIcon 
    style={{ fontSize: 50 }}/>
    </Paper>
</div>
</>
);
}
export default MainCard;