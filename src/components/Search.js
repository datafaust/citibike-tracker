import React, { Component } from 'react';
import {ListGroup, Form} from 'react-bootstrap';
import classes from './search.module.css';

class Search extends Component {
    
   
    
    render() {
    

        return (
            <div>
                <input
                    className={classes.search}
                    placeholder="Search for a Link Near you..."
                    onChange={this.props.handleInputChange}
                />   
            </div>
        );
    }
}

export default Search  