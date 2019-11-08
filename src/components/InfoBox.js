import React, { Component } from 'react';
import classes from './infoBox.module.css'
import nl2br from 'react-newline-to-break';
import { Button } from 'react-bootstrap';
import Favorites from './Favorites';

class InfoBox extends Component {

    showData=()=>{
        console.log(this.props.selectedStation)
    }


    render() {

        const textStyle={
            textAlign: "center"
        }

        const favoritesStyle={
            marginRight: "10%",
            marginLeft: "90%",
            marginTop: "2%"
        }

        const br = `\n`;

        let info =null;
        if(this.props.showInfo) {
        info = (
            <div className={classes.overlay}>
                <div style={favoritesStyle}>
                    <Favorites
                        favoritesColor={this.props.favoritesColor} 
                        buttonStyles={this.props.buttonStyles}
                        logFavorites={this.props.logFavorites}
                        selectedStation={this.props.selectedStation}
                    />
                </div>
            <div>
                <h3 style={textStyle}>{`${this.props.selectedStation.name}`}</h3>
            <br/>
            </div>
            <div className={classes.container}>
                <div style={textStyle}>
                    <h3>{this.props.selectedStationStatus.num_bikes_available}</h3>
                    {nl2br(`Bikes`)}
                </div>
                <div style={textStyle}>
                    <h3>{this.props.selectedStationStatus.num_ebikes_available}</h3>
                    {nl2br(`Ebikes`)}
                </div> 
                <div style={textStyle}>
                    <h3>{this.props.selectedStationStatus.num_docks_available}</h3>
                    {nl2br(`Docks`)}
                </div>
            </div>

            <div>

            </div>
            <br></br>
            <br></br>
            <hr></hr>
            <div className={classes.buttonContainer}>
                <div>
                <Button>
                    <img src="https://img.icons8.com/office/40/000000/bicycle.png"/>
                    <div>Buy Pass</div>
                </Button>
                </div>
                <div>
                    
                </div>
                <div>
                <Button>
                    <img src="https://img.icons8.com/office/40/000000/waypoint-map.png"/>
                    <div>Plan Ride</div>
                </Button>
                </div>
            </div>
            </div>
            )
        }

        return (
            <div >
                
                {info}
                
            </div>
        );
    }
}

export default InfoBox;