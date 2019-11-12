import React, { Component } from 'react';
import { Button, Modal, cardClass } from 'react-bootstrap';
import classes from './favoritesList.module.css'



class FavoritesList extends Component {
    render() {

        const favStyles = {
            position: "absolute",
            zIndex: "1000",
            width: "5%",
            marginLeft:"80%",
            marginRight: "5%",
            marginTop: "65%",
        }

        let favorites =null;
        if(this.props.favorites) {
        favorites = (
            
            this.props.favorites.map((favorite) =>
                <div style={{width:"100%"}}>
                    {favorite.name}
                    <button 
                        onClick={this.props.removeFavorites(favorite)}
                        >x</button>
                </div>
                )
            
        )
        }

        return (
            <div >
                <Button
                    variant="primary"
                    className={classes.btn}
                    style={this.props.buttonStyles}
                    onClick={this.props.listFavorites}
                >
                    <img src="https://img.icons8.com/windows/32/000000/add-to-favorites.png"></img>
                </Button>

                    <Modal 
                        dialogClassName={classes.modal}
                        show={this.props.show} 
                        onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>My Favorites List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {favorites}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={this.props.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                    </Modal>          
            </div>
        );
    }
}

export default FavoritesList;           

/**
 *   <div style={favStyles}>
 */