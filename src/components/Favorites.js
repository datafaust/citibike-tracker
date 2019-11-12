import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Favorites extends Component {
    render() {
        return (
            <div>
                <Button
                    style={{
                        //width:"40px",
                        //height:"40px",
                        padding: "2px 2px",
                        margin: "0",
                        borderRadius:"50%",
                        display:"block",
                        backgroundColor:"white",
                        borderRadius: "50%",
                        borderWidth: "thin",
                        borderColor: "white",
                        border: "1px solid",
                        boxShadow: "1px 1px 1px #888888"
                    }}
                    onClick={this.props.logFavorites}
                >
                   <img src="https://img.icons8.com/material-sharp/24/000000/add-to-favorites.png"></img> 
                </Button>        
            </div>
        );
    }
}


export default Favorites;           