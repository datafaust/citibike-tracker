import React, { Component } from 'react';

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
            padding: "7px 7px",
            margin: "0",
            borderRadius:"50%",
            backgroundColor: "white",
            color:"#FFF",
            boxShadow: "3px 3px 3px #999"
        }

        //let btn_class = this.props.black ? "blackButton" : "whiteButton";

        return (
            <div>

                <button
                    style={buttonStyles}
                    onClick={this.props.changeColor.bind(this)}
                    >
                    <img src="https://img.icons8.com/metro/26/000000/switch-off--v3.png"></img>   
                </button> 
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