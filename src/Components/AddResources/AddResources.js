import React  from 'react';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Button } from '@material-ui/core';

function AddResources() {

    const Navigate = useNavigate();
    function handleClick() {
        Navigate("/AddNewResources")

    }



    return (
        <div >
            <div className='row' style={{ fontWeight: "bolder", color: "white", padding: "10px" }}>
                Resources
            </div>
            <div className='row ' style={{ textAlign: "right" }}>

                <Link href="https://www.google.com/" style={{ color: 'white', textDecoration: "none", margin: "2rem", fontWeight: "bolder" }}>Go back</Link>


            </div>
            <div className='row ' style={{ textAlign: "right" }}>
                <Button style={{
                    backgroundColor: 'blue',
                    width: '70px',
                    height: '40px',
                    margin: "2rem", fontWeight: "bolder", borderRadius: "10px", marginTop: "1rem"
                }}>
                    <Link href="https://www.google.com/" style={{ textDecoration: "none", color: 'white' }}>Share</Link>
                </Button>

            </div>
            <div className='row'>
                <Grid container spacing={5} className="centered" >

                    <Grid item xs={10} sm={8}>
                        <Paper className="paper coloured" style={{ borderRadius: "10px", borderColor: "darkblue", backgroundColor: "darkgray" }}>Collection1</Paper>
                    </Grid>
                    <Grid item xs={10} sm={8}>
                        <Paper className="paper coloured" style={{ borderRadius: "10px", borderColor: "darkblue", backgroundColor: "darkgray" }}>Collection2</Paper>
                    </Grid>
                    <Grid item xs={10} sm={8}>
                        <Paper className="paper coloured" style={{ borderRadius: "10px", borderColor: "darkblue", backgroundColor: "darkgray" }}>Collection3</Paper>
                    </Grid>
                    <Grid item xs={10} sm={8}>
                        <Paper className="paper coloured" style={{ borderRadius: "10px", borderColor: "darkblue", backgroundColor: "darkgray" }}>collection4</Paper>
                    </Grid>
                </Grid>
            </div>
            <div className='row alignrightBottom'>
                <Link onClick={handleClick}>
                    <AddCircleIcon style={{ fontSize: "47px" }} />
                </Link>
            </div>
        </div>

    )
}
export default AddResources;