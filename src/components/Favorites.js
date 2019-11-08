import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Favorites extends Component {
    render() {
        return (
            <div>
                <button
                    style={{
                        //width:"40px",
                        //height:"40px",
                        padding: "2px 2px",
                        margin: "0",
                        borderRadius:"50%",
                        backgroundColor: this.props.favoritesColor,
                        color:"#FFF",
                        boxShadow: "3px 3px 3px #999"
                    }}
                    onClick={this.props.logFavorites}
                >
                   <img src="https://img.icons8.com/material-sharp/24/000000/add-to-favorites.png"></img> 
                </button>        
            </div>
        );
    }
}

export default Favorites;           