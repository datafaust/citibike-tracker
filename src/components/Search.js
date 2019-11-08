import React, { Component } from 'react';
import {ListGroup, Form} from 'react-bootstrap';
import classes from './search.module.css';

class Search extends Component {
    
    SearchStyles = {
        position: "absolute",
        margin: "auto",
        zIndex:"1000",
        width: "50%",
        borderRadius: "25px",
        padding: "2%",
        marginLeft: "25%",
        marginRight: "25%",
        marginTop: "10%"
    }
    
    render() {
    

        return (
            <div>
                <input
                    style={this.SearchStyles}
                    placeholder="Search for a Link Near you..."
                    onChange={this.props.handleInputChange}
                />   
            </div>
        );
    }
}

export default Search  