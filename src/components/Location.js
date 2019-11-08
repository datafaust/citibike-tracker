import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import classes from './location.module.css'

class Location extends Component {

    
    render() {

        const locStyles = {
            position: "absolute",
            zIndex: "999",
            width: "5%",
            marginLeft:"5%",
            marginRight: "80%",
            marginTop: "70%",
        }

        return (
            <div>
                <button 
                    style = {this.props.buttonStyles}
                    onClick={this.props.setUserLocation}
                    >
                    <img src="https://img.icons8.com/windows/32/000000/worldwide-location.png"></img>
                </button> 
            </div>
        );
    }
}


export default Location;

/**
 *  <div style={locStyles}>
 */