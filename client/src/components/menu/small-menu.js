import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./small-menu.scss";
import { Link } from 'react-router-dom';

function SmallMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <h1 className="small-menu">Menu</h1>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/pantry' className="links">
        <MenuItem>Pantry</MenuItem>
        </Link>
        <Link to='/SelectMeals' className="links">
        <MenuItem>SelectMeals</MenuItem>
        </Link>
        <Link to='/about' className="links">
        <MenuItem>About Us</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
export default SmallMenu;