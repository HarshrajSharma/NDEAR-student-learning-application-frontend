import React, { Component } from "react";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './resource.css';
function Resource() {

    const Navigate = useNavigate();
    function handleClick() {
        Navigate("/AddNewResources")

    }

    return (

        <div className="centered">

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
            </Grid>
            <div className='row alignrightBottom'>
                <Link className="linkstyle" onClick={handleClick} >
                    <AddCircleIcon style={{ fontSize: "47px" }} />
                </Link>

            </div>
        </div>
    );
}

export default Resource;