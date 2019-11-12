
//import logo from './logo.svg';
//import './App.css';

import React, { Component } from 'react';
import Leaf from './components/Leaf';
import InfoBox from './components/InfoBox';
import Location from './components/Location';
import Match from './components/Match';
import Reload from './components/Reload';
import classes from './app.module.css';
import FavoritesList from './components/FavoritesList';
import DocksSwitch from './components/DocksSwitch';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        height: "100vh",
        width: "100vw",
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 10
      },
      buttonStyles: {
        display:"block",
        backgroundColor:"white",
        borderRadius: "50%",
        borderWidth: "thin",
        borderColor: "white",
        border: "1px solid",
        padding: "5px",
        boxShadow: "2px 2px 2px #888888"
      },
      btnClass: "whiteButton",
      black: true,
      isClicked: false,
      buttonIcons: {
        pending: { active_Icon: "../assets/switchOff.png", Icon: "../assets/switchOff.png" },
        rejected: { active_Icon: "../assets/switchOn.png", Icon: "../assets/switchOn.png" },
        accepted: { active_Icon: "../assets/switchOff.png", Icon: "../assets/switchOff.png" }
      },
      zoom: 10,
      searchInput: "",
      stationsInfo: [],
      stationsStatus: [],
      showMatches: false,
      showStations: false,
      showInfo: false,
      selectedStation: [],
      selectedStationStatus: [],
      userLocation: {},
      matches: [],
      favorites: [],
      favoritesColor: "white",
      show: false,
      loading: false
    };
    this.mapClick = this.mapClick.bind(this)
  }


  componentDidMount() {

    try {
      this.fetchData()  
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
      });
    }

    //requestStationInfo();
    //requestStationStatus();
  }


  fetchData=()=>{
    const requestStationInfo = async () => {
      await fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(res => res.json())
        .then(res =>
          this.setState({ stationsInfo: res, showStations: true, loading: true }))
    }

    const requestStationStatus = async () => {
      await fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
        .then(res => res.json())
        .then(res =>
          this.setState({ stationsStatus: res, loading: true }))
    }

    requestStationInfo();
    requestStationStatus();
  }

  LoadingMessage=()=> {
    return (
      <div className={classes.splash_screen}>
        <div className={classes.loader}></div>
      </div>
    );
  }

  reloadData=()=>{
    this.setState({loading:false})
    this.fetchData();
  }

  changeColor() {
    this.setState({ btnClass: "blackButton" })
  }

  clickHandler = (event) => {
    this.setState(
      {
        isClicked: !this.state.isClicked // this is gonna toggle everytime you click //
      }
    );
  }

  markerClick = (station) => (e) => {
    console.log(station)
    let newViewport =  {
      height: "100vh",
      width: "100vw",
      latitude: station.lat,
      longitude: station.lon,
      zoom: 16
      }
    this.setState({ 
      selectedStation: station,
      viewport: newViewport});
    this.filterStation(station);
  }

  filterStation = (station) => {
    //filter station from stationStatus
    const myStation = this.state.stationsStatus.data.stations.filter(d => {
      return (d.station_id === station.station_id);
    })
    console.log(myStation['0']);
    this.setState({ selectedStationStatus: myStation['0'], showInfo: true });

  }

  setUserLocation = () => {
    console.log("attempting to get user location ...")
    navigator.geolocation.getCurrentPosition(position => {

      let setUserLocation = [position.coords.latitude, position.coords.longitude];
      console.log('user is at', setUserLocation);

      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 15
      };

      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation,
        position: setUserLocation
      });
    });
  }

  findMatches = (wordToMatch, my_obj) => {
    return my_obj.data.stations.filter(place => {
      //console.log(place.name)
      // here we need to figure out the matches
      const regex = new RegExp(wordToMatch, 'gi');
      //console.log(place.name.match(regex))
      return place.name.match(regex)
    });
  }

  updateMatches = () => {
    //console.log(this.state.searchInput)
    const matchArray = this.findMatches(this.state.searchInput, this.state.stationsInfo);
    const newStateMatches = matchArray.map(place => {
      //console.log(place);
      return place
    });
    this.setState({ matches: newStateMatches })
  }

  handleInputChange = (event) => {
    event.preventDefault()
    //console.log(event.target.value)
    if (event.target.value.length === 0) {
      this.setState({ searchInput: "", showMatches: false, matches: [] })
      return
    }
    this.setState({ searchInput: event.target.value })
    this.updateMatches()
  }

  alertClicked = (address) => {
    let arr = eval(address.target.value);
    console.log(arr)
    let newViewport = {
      height: "100vh",
      width: "100vw",
      latitude: arr[0],
      longitude: arr[1],
      zoom: 15
    }
    this.setState({ viewport: newViewport, matches: [], searchInput:"" });
  }

  logFavorites = () => {
    console.log('logging favorites')
    console.log(this.state.selectedStation);
    this.setState({ favoritesColor: "yellow" })
    this.state.favorites.push(this.state.selectedStation);
  }

  removeFavorites = (favorite) => (e) => {
    console.log(favorite)
    this.filterFavorites(favorite)
  }

  filterFavorites = (favorite) => {
    //filter station from stationStatus
    let newFavorites = []
    newFavorites = this.state.favorites.filter(d => {
      return (d.station_id != favorite.station_id);
    })
    this.setState({ favorites: newFavorites });

  }


  listFavorites = () => {
    console.log(this.state.favorites)
    this.handleShow();
  }

  handleShow = () => {
    console.log('attempting to show modal')
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  mapClick(e){
    console.log("clicked on map")
    this.setState({ showInfo: false });
  }


  render() {

    const textStyle = {
      textAlign: "center"
    }



    return (
     // <div className="container">
     <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
       
       <div>{!this.state.loading ? 
              this.LoadingMessage() : 
              <div></div>}</div>
       <div className={classes.titleText}>
          <div className={classes.curve}></div>
          <h1 className={classes.title}><b>city</b></h1>
          <h1 style={{ color: "#00BFFF", outlineColor: "coral" }}><b>bike</b></h1>
        </div>
        <div className={classes.matches}>
          <Match
            matches={this.state.matches}
            alertClicked={this.alertClicked}
          />
        </div>
        <div className={classes.btnDiv}>
       
        <br/>
        <Reload 
           buttonStyles={this.state.buttonStyles}
           reloadData={this.reloadData}
        />
        <br/>
        <FavoritesList
          buttonStyles={this.state.buttonStyles}
          listFavorites={this.listFavorites}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          favorites={this.state.favorites}
          removeFavorites={this.removeFavorites}
        />
        <br/>
        <Location
          userLocation={this.state.userLocation}
          setUserLocation={this.setUserLocation}
          buttonStyles={this.state.buttonStyles}
        />
         </div>
        <Leaf
          viewport={this.state.viewport}
          stationsInfo={this.state.stationsInfo}
          showStations={this.state.showStations}
          markerClick={this.markerClick}
          buttonStyles={this.buttonStyles}
          handleInputChange={this.handleInputChange}
          userLocation={this.state.userLocation}
          mapClick={this.mapClick}
        />
         <InfoBox
          selectedStation={this.state.selectedStation}
          selectedStationStatus={this.state.selectedStationStatus}
          showInfo={this.state.showInfo}
          buttonStyles={this.state.buttonStyles}
          logFavorites={this.logFavorites}
          selectedStation={this.state.selectedStation}
          favoritesColor={this.state.favoritesColor}
        />
      
      </Container>
    );
  }
}

export default App;

/**
 * checkData=()=>{
    //console.log(this.state.stationsInfo)
    //this.state.stationsInfo.data.stations.map(e=>{
    //  console.log(e)
    //})

    //console log station status
    this.state.stationsStatus.data.stations.map(e=>{
      console.log(e)
    })
  }
 *


     checkData=()=>{
        this.props.stationsInfo.data.stations.map(e=>{
          console.log(e)
        })
      }



       <DocksSwitch
          buttonStyles={this.state.buttonStyles}
          clickHandler={this.clickHandler}
          buttonIcons={this.state.buttonIcons}
          isClicked={this.state.isClicked}
          changeColor={this.changeColor}
          black={this.state.black}
          btnClass={this.state.btnClass}
        />

 */


