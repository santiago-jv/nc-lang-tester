import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from "@material-ui/core";

import SideBar from "./SideBar";
import Traslate from "./Traslate";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Appbar: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    
  },
  Button:{
    
  }
 
}));
const Header =()=>{
  const classes = useStyles();
    return(
        <AppBar  className={classes.Appbar} position="fixed"  color='default'>
        <Toolbar>
        <SideBar/>
          
         
        </Toolbar>
      </AppBar>
    );
}
export default Header;