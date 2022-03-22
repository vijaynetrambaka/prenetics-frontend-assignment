import React, { useState } from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from './components/Left';
import Result from './components/Result';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));


// 

const App: React.FC = () => {
  const classes = useStyles();
  
  
  return (
    <div>  
    
    <Grid container>
      <Grid item sm={2} xs={2}>
      <Leftbar />
        
      </Grid>
      <Grid item sm={10} xs={10}>
      
        <Header />       
       
        <Result />
        
      </Grid>
      {/* <Grid item sm={3} className={classes.right}>
       Right
      </Grid> */}
    </Grid>
    {/* <Add /> */}
    
  </div>
  );
}

export default App;

