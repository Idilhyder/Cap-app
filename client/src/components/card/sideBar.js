import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MainCard from './mainCard';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const SideBar =(props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  

  const handleOpen = () => {
    setIsOpen((true));
  };
  const handleClose = () => {
    setIsOpen((false));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <MainCard 
        isOpen={isOpen}
        onHandleOpen={handleOpen}
        close={handleClose}
        />
      </Drawer>
    </div>
  );
}
export default SideBar;