import React, { Component } from 'react';
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



class SideBar extends Component {
constructor() {
    super();
    this.state={
        isOpen: false,
        open: false
    }
}


handleOpen = () => {
    this.setState({showModal:true});
};
handleClose = () => {
    this.setState({showModal:false});
};

handleDrawerOpen = () => {
    this.setState({open:true});
};


handleDrawerClose = () => {
    this.setState({open:false});
};

render() {
return (

<div >
    <Toolbar>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={this.handleDrawerOpen}
        edge="start"
        
        >
        <MenuIcon />
        </IconButton>
    </Toolbar>
    <Drawer
    
    variant="persistent"
    anchor="left"
    open={this.open}
    classes={{
        
    }}
    >
    <div >
        <IconButton onClick={this.handleDrawerClose}>
       
        </IconButton>
    </div>
    <MainCard 
    isOpen={this.handleOpen}
    onRequestClose={this.handleClose}
    />
    </Drawer>
</div>
);
}
}
export default SideBar;