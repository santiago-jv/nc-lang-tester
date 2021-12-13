import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  Button: {
    color: 'white'
  },
  ListItem:{
    backgroundColor: 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color:  'neutral.300',
            fontWeight: 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
           
  },
});

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    menu: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
      
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left' || anchor === 'right',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

      
             
          <ListItem button className={classes.ListItem}>
          <Link to="/">
              <ListItemIcon> <CodeIcon /></ListItemIcon>
            <ListItemText primary={'Programar'} />
        </Link>
            
          </ListItem>
          <ListItem button>
              <Link to="/Instrucciones">
             
            <ListItemIcon> <LibraryBooksIcon /></ListItemIcon>
            <ListItemText primary={'Instrucciones'} />
            </Link>
          </ListItem>
          <ListItem button>
              <Link to="/Acercade">
              
            <ListItemIcon> <InfoIcon /></ListItemIcon>
            <ListItemText primary={'Acerca de NC'} />
            </Link>
          </ListItem>
       
      </List>
      <Divider />
      <List>
       
          <ListItem button >
            <ListItemIcon> <GitHubIcon /> </ListItemIcon>
            <ListItemText primary={'Repositorio GitHub'} />
          </ListItem>
      
      </List>
    </div>
  );

    return(
        <div>
       
          <React.Fragment >
            <Button onClick={toggleDrawer('left', true)} className={classes.Button}> <MenuIcon/></Button>
            <SwipeableDrawer
              
              open={state['left']}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}
            >
              {list('left')}
            </SwipeableDrawer>
          </React.Fragment>
      
      </div>
 
    );

    }
