
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

class AddNewResources extends Component {

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
            <div className="centered">

                <div className="row" style={{ fontWeight: "bolder"}}>
                    <h2>ADD Resources</h2>
                </div>
                <form onSubmit={this.handleSubmit}  >
                    <Grid container  >

                        <div >
                            <div className="row"  >
                                <label style={{ fontWeight: "bolder" }} >
                                    Resource name</label>
                            </div>
                            <div className="row" style={{ marginTop: "3px" }}>
                                <input className="inputBox" value={this.state.value} onChange={this.handleChange} />

                            </div>
                            <div className="row" >
                                <label style={{ fontWeight: "bolder" }}>
                                    Add description
                                </label>
                            </div>
                            <div className="row" >
                                <textarea className="inputBox" style={{ height: "5rem" }} value={this.state.value} onChange={this.handleChange} />

                            </div>
                            <div className="row">
                                <input type="submit" className="btn" value="Add Collection" />
                            </div>
                            <div className="row">
                                <input className="btn" type="submit" value="Cancel" />
                            </div>
                        </div>
                    </Grid>
                </form>
            </div>
        );
    }
}
export default AddNewResources;
