import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DocksSwitch extends Component {
    render() {

        const switchStyles = {
            position: "absolute",
            zIndex: "1000",
            width: "5%",
            marginLeft:"80%",
            marginRight: "5%",
            marginTop: "70%"
        }

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

        //let btn_class = this.props.black ? "blackButton" : "whiteButton";

        return (
            <div>

                <Button
                    style={buttonStyles}
                    onClick={this.props.changeColor.bind(this)}
                    >
                    <img src="https://img.icons8.com/metro/26/000000/switch-off--v3.png"></img>   
                </Button> 
            </div>
        );
    }
}

export default DocksSwitch;

/**
 *  <button
                    style={buttonStyles}
                >
                    <img src="https://img.icons8.com/metro/26/000000/switch-off--v3.png"></img>   
                </button> 


                 <div style={switchStyles}>
 */