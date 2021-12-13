import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from '../Components/Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  TextField:{
    backgroundColor: '#e0e0e0',
    borderRadius:5,
  },
  Button:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
   marginTop: 10
  }
}));
const Programar=()=> {
  const [data, setData] = useState("")
  const [result, setResult] = useState("")
  const handleInput = (event)=>{
    setData(event.target.value);
  }

  const classes = useStyles();

  const sendData = async (event)=>{
    event.preventDefault();
    try {
      const response = await axios.post('https://nc-lang-compiler.herokuapp.com',{
        code:data
      })
      
      setResult(response.data.result);
    } catch (error) {
      if(error.response){

        setResult(error.response.data.result);
      }

    }

    
  }
  return (
    <>
   
      <form className={classes.root} onSubmit={sendData}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>
         
          <TextField className={classes.TextField} onChange={handleInput}
          id="outlined-multiline-static"
          fullWidth
          multiline
          rows={30}
          placeholder="Hi Programmer! Start programming here"
          variant="outlined">
         <Typography>

         </Typography>
        </TextField>
          
       
        <Button type="submit" variant="contained" className={classes.Button} >
            <PlayCircleFilledIcon/>
            RUN
           
           
          </Button>
        </Box>
        
            <Box border={1} marginTop={1} height={150} borderRadius={8}>
              
            <pre>{result}</pre>
            </Box>
           
         
      
        
      </main>
    </form>
    </>
  );
 }
 export default Programar;