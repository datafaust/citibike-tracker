import React, { Component } from 'react';
import {ListGroup, Form} from 'react-bootstrap';

class Match extends Component {
    render() {

        const MatchStyles = {
            height: "10%",
            width: "80%",
            zIndex: "1000",
            margin: "auto"
        }
    
        const ImgStyles = {
            float: "right",
            //display: "inline",
            //marginTop:"-11%",
            height: "4%",
            width: "4%"
        }
    
        const ImgStylesLoc = {
            float: "left",
            //display: "inline",
            //marginTop:"-11%",
            height: "4%",
            width: "4%"
        }

        return (
            <div>
                 <li>
                {
                    this.props.matches.map(match => {
                        const address=match.name;
                    return  <ListGroup.Item
                                style={MatchStyles} 
                                className="Matches"
                                action  
                                value={`[${match.lat}, ${match.lon}]`}
                                // function expressions could cause this to rerender unnecessarily.
                               onClick={(address) => this.props.alertClicked(address)}> 
                               {`${address.toLowerCase()}`}
                                    <img 
                                        style={ImgStyles}
                                        src="https://img.icons8.com/ios-glyphs/32/000000/up-left-arrow.png" alt = "arrow">
                                    </img>
                                    <img
                                        style={ImgStylesLoc} 
                                        src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png" alt= "userloc"> 
                                    </img>
                            </ListGroup.Item>
                        })
                }
                </li>
            </div>
        );
    }
}

export default Match;