import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from '../routes/episodes';
import Episodes from '../routes/episodes';
import Player from './player';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlayer: false,
            player: {
                url: '',
                title: '',
                image: '',
            },
        };
        this.audio = null;
        this.audioRef = element => {
            this.audio = element;
        };
    }

    setPlayer = async (data) => {
        console.log('setting player')
        await this.setState({
            showPlayer: true,
            player: {
                ...data
            },
        });
        this.audio.pause();
        this.audio.load();
        this.audio.play();
    }

    togglePlayer = () => {
        this.setState({ showPlayer: !this.state.showPlayer })
    }

    render() {
        const {
            showPlayer,
            player
        } = this.state;
        return(
            <React.Fragment>
                <Route 
                    path='/'
                    exact
                    render={(props) => <Home {...props} setPlayer={this.setPlayer} />}  />
                <Route 
                    path='/episodes'
                    render={(props) => <Episodes {...props} setPlayer={this.setPlayer} />}  />
                <Route 
                    path='/about'  />
                {
                    showPlayer && <Player {...player} audioRef={this.audioRef}/>
                }
            </React.Fragment>
        );
    }
}

export default Routes;