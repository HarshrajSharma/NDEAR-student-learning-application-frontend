
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

class Addnew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collecname: null,
            collecdescrip: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //submission handling
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "3rem"
            }}>

          <div className="row" style={{fontWeight:"bolder",fontSize:"1.3rem",margin:"20px"}}> 
            ADD Collection
          </div>
            <form onSubmit={this.handleSubmit}  >
                <Grid container  >

                    <div >
                        <div className="row"  >
                            <label style={{fontWeight:"bolder"}} >
                                collection name</label>
                        </div>
                        <div className="row" style={{margin:"0px 0px 10px 0px"}}>
                            <input  style={{width:"15rem",height:"2rem",margin:"6px 0px 1rem 0px",borderRadius:"10px",backgroundColor:"GrayText"}}value={this.state.value} onChange={this.handleChange} />

                        </div>
                        <div className="row" >
                            <label style={{fontWeight:"bolder"}}>
                                Add description
                                </label>
                        </div>
                        <div className="row" >
                            <textarea style={{width:"100%",height:"5rem",margin:"6px 0px 1rem 0px",borderRadius:"10px",backgroundColor:"GrayText"}} value={this.state.value} onChange={this.handleChange} />

                        </div>
                        <div className="row">
                            <input type="submit" style={{width:"100%",height:"2rem",margin:"1rem 0px 4px 0px",borderRadius:"10px",fontWeight:"bolder", backgroundColor:"crimson",color:"white"} } value="Add Collection" />
                        </div>
                        <div className="row">
                            <input style={{width:"100%",height:"2rem",borderRadius:"10px",fontWeight:"bolder", backgroundColor:"crimson",color:"white"}} className="colured" type="submit" value="Cancel" />
                        </div>
                    </div>
                </Grid>
            </form>
            </div>
        );
    }
}
export default Addnew;