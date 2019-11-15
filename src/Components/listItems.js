import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DehazeIcon from '@material-ui/icons/Dehaze';

export const mainListItems = (
  <div>
    <NavLink className="side-item" to="/admin/businesses">
      <ListItem button>
        <ListItemIcon>
          <DehazeIcon />
        </ListItemIcon>
        <ListItemText primary="Businnesses" />
      </ListItem>
    </NavLink>
    <NavLink className="side-item" to="/admin/createbusiness">
      <ListItem button>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Business" />
      </ListItem>
    </NavLink>
    <NavLink className="side-item" to="/admin/createcategory">
      <ListItem button>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Categories" />
      </ListItem>
    </NavLink>
  </div>
);