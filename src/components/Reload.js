import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Reload extends Component {
    render() {

        const buttonStyles ={
            display:"block",
        backgroundColor:"white",
        borderRadius: "50%",
        borderWidth: "thin",
        borderColor: "white",
        border: "1px solid",
        padding: "8px",
        boxShadow: "2px 2px 2px #888888"
        }
        
        return (
            <div>
                <Button
                    style={buttonStyles}
                    //className={classes.rotate} 
                    onClick={this.props.reloadData}
                    >
                        <img src="https://img.icons8.com/material/24/000000/reboot.png"></img>
                </Button>
                
            </div>
        );
    }
}

export default Reload;