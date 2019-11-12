import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import classes from './leaf.module.css';
import Search from './Search';
//import './leaf.css'
//import InfoBox from './InfoBox';
import { Button } from 'react-bootstrap';
//import Search from './Search';
//import Match from './Match';
//import Modal from './Modal';
//import L from 'leaflet';
//import Routing from "./RoutingMachine";
//import { Row, Col, Grid, Container } from 'react-bootstrap';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import MarkerClusterGroup from 'react-leaflet-markercluster';
//require('leaflet.markercluster')
//import 'react-leaflet-markercluster/dist/styles.min.css'; 

class Leaf extends Component {

    render() {

        let markers =null;
        if(this.props.showStations) {
        markers = (
            
            this.props.stationsInfo.data.stations.map((station) =>
                <Marker 
                   icon={
                    new L.Icon({
                      iconUrl: require('../assets/bikeLevelGreat.png'),
                      iconRetinaUrl: require('../assets/bikeLevelGreat.png'),
                      iconAnchor: null,
                      popupAnchor: null,
                      shadowUrl: null,
                      shadowSize: null,
                      shadowAnchor: null,
                      iconSize: new L.Point(120, 190),
                      className: 'dummy'
                      }) 
                   }
                    position={[station.lat, station.lon]}
                    onClick={this.props.markerClick(station)}>
                </Marker>
                )
            
        )
        }

        const mapStyles = {
            position: "relative",
            top: "0",
            bottom: "0",
            width: "100vw",
            height: "100vh"
          }

        const iconUser= new L.Icon({
          iconUrl: require('../assets/user_location.png'),
          iconRetinaUrl: require('../assets/user_location.png'),
          iconAnchor: null,
          popupAnchor: null,
          shadowUrl: null,
          shadowSize: null,
          shadowAnchor: null,
          iconSize: new L.Point(45, 45),
          className: classes.blinking
          }) 

         
    
       
        const position = [this.props.viewport.latitude, this.props.viewport.longitude]
        //const position = [40.7484, -73.9857]
        return (
            <div>
                <Search
                  buttonStyles={this.props.buttonStyles}
                  handleInputChange={this.props.handleInputChange}
                    />
                <Map center={position} 
                     zoom={this.props.viewport.zoom}
                     maxZoom={18}
                     style= {mapStyles}
                     className="markercluster-map"
                     onClick={this.props.mapClick}
                     >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                       <MarkerClusterGroup>
                          markers = {markers}
                       </MarkerClusterGroup>
                        {Object.keys(this.props.userLocation).length !== 0 ? (
                          <Marker
                            position={this.props.userLocation}
                            icon={iconUser}
                          >
                         </Marker>
                            ) : ( 
                            <div></div>
                          )}
                </Map>  
            </div>
        );
    }
}

export default Leaf;

/**
 * 
 * const markers = this.props.data.stations.map((station) =>
        <Marker 
          position={[station.lat, station.lon]}
          onClick={this.markerClick.bind(this,station)}>
          <Popup>
            <div style={{"textAlign": "left"}}>
            <span> 
                  <h5 style={{"textAlign": "left"}}>hello</h5>
                  <p></p>
            </span>
            </div>
          </Popup>
        </Marker>
              );




              const markers = this.props.stations.data.map((station) =>
        <Marker 
          position={[station.lat, station.lon]}
          onClick={this.markerClick.bind(this,station)}>
          <Popup>
          </Popup>
        </Marker>
              );
 */


 /**
  * 
  * const Leaf = ( props ) => {

    const checkData=()=>{
        props.stations.data.stations.map(e=>{
          console.log(e)
        })
      }

    const markers = this.props.stations.data.stations.map((station) =>
      <Marker 
        position={[station.lat, station.lon]}>
      </Marker>
            );


    const position = [props.viewport.latitude, props.viewport.longitude]
    
    return (
        <div>
                <button onClick={checkData}>check props</button>
                <Map center={position} zoom={14}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>  
            </div>
    )
}







//latest
let markers =null;
        if(this.props.stations.data.stations) {
        markers = (
            <div>
            {
            this.props.stations.data.stations.map((station) =>
                <Marker 
                    position={[station.lat, station.lon]}>
                </Marker>
                )
            }
            </div>
        )
        }


  * 


  icon

   icon={ 


                      new L.Icon({
                      iconUrl: require('../assets/bikeLevelGreat.png'),
                      iconRetinaUrl: require('../assets/bikeLevelGreat.png'),
                      iconAnchor: null,
                      popupAnchor: null,
                      shadowUrl: null,
                      shadowSize: null,
                      shadowAnchor: null,
                      iconSize: new L.Point(120, 190),
                      className: 'dummy'
                      }) 
                  }
  */