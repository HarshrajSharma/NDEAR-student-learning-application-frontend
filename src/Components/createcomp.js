import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './createcomp.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@material-ui/core';
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom';


const linkStyle = {
    margin: "2rem",
    textDecoration: "none",
    
    color: 'blue'
};
function Addcollection() {

    const Navigate = useNavigate();
    function handleClick() {
       Navigate("/AddNewCollection")

    }
 

        return (
            <div >
                
                <div className='row' style={{fontWeight:"bolder", color:"white", padding:"10px"}}>
                    Collection1
                </div>
                <div className='row ' style={{ textAlign: "right" }}>
                  
                        <Link href="https://www.google.com/" style={{color:'white',textDecoration:"none",margin:"2rem",fontWeight:"bolder"}}>Go back</Link>
                    

                </div>
                <div className='row ' style={{ textAlign: "right" }}>
                    <Button style={{
                        backgroundColor: 'blue',
                        width: '70px',
                        height: '40px',
                        margin:"2rem",fontWeight:"bolder",borderRadius:"10px",marginTop:"1rem"
                    }}>
                        <Link href="https://www.google.com/" style={{textDecoration:"none",color:'white'}}>Share</Link>
                    </Button>

                </div>
                <div className='row'>
                    <Grid container spacing={5} className="centered" >

                        <Grid item xs={10} sm={8}>
                            <Paper className="paper coloured" style={{borderRadius:"10px",borderColor:"darkblue",backgroundColor:"GrayText"}}>www.random.com</Paper>
                        </Grid>
                        <Grid item xs={10} sm={8}>
                            <Paper className="paper coloured" style={{borderRadius:"10px",borderColor:"darkblue",backgroundColor:"GrayText"}}>www.random.com </Paper>
                        </Grid>
                        <Grid item xs={10} sm={8}>
                            <Paper className="paper coloured" style={{borderRadius:"10px",borderColor:"darkblue",backgroundColor:"GrayText"}}>www.random.com</Paper>
                        </Grid>
                        <Grid item xs={10} sm={8}>
                            <Paper className="paper coloured" style={{borderRadius:"10px",borderColor:"darkblue",backgroundColor:"GrayText"}}>www.random.com</Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className='row ritty'>
                <Link  className="btn btn-primary" onClick={handleClick} style={linkStyle}>
                        <AddCircleIcon style={{ fontSize: "47px" }} />
                    </Link>
                </div>
            </div>

        )
    }

export default Addcollection;