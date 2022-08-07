import React from "react";

import { useNavigate } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './myResources.css';
function MyResource() {

    const Navigate = useNavigate();
    function handleClick() {
        Navigate("/AddNewResources")

    }

    return (

        <div className="centered">

           <div className="row">
           <Grid container spacing={3} className="centered">
               
               <Grid item xs={5}>
                   <Paper className="resDesign" style={{borderRadius:"10px"}}><h1>Resource 1</h1></Paper>
               </Grid>
               <Grid item xs={5} >
                   <Paper  className="resDesign" style={{borderRadius:"10px"}}><h1>Resource 1</h1></Paper>
               </Grid>
               <Grid item xs={5} >
                   <Paper  className="resDesign"><h1>Resource 1</h1></Paper>
               </Grid>
               <Grid item xs={5}>
                   <Paper  className="resDesign"><h1>Resource 1</h1></Paper>
               </Grid>
               <Grid item xs={10} style={{marginTop:"1rem"}}>
               <input type="submit" className="btn" value="Add Collection" />
            </Grid>
               <Grid item xs={10}>
               <input  type="submit" className="btn" value="Cancel" />
           </Grid>
           </Grid>
           </div>
           
        </div>
    );
}

export default MyResource;