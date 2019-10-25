import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../routes/home';
import About from '../routes/about';
import Contact from '../routes/contact';
import Episodes from '../routes/episodes';
import EpisodeDetail from '../routes/episodeDetail';
import Player from './player';
import NotFound from '../routes/404';
import Links from '../routes/links';

// export default () => {
//     const [showPlayer, togglePlayer] = useState(false);
//     const [player, updatePlayer] = useState({});
//     const [paused, togglePaused] = useState(true);

//     const audio = useRef(null);

//     const startAudio = () => {
//         audio.current.pause();
//         audio.current.load();
//         audio.current.play();
//     }

//     const setPlayer = async (data) => {
        
//         data.url !== player.url && window.PauseAllPlayButtons();

//         const paused = data.url !== player.url ? true : false;
//         await togglePaused(!paused);
//         await updatePlayer(data);

//         paused ? audio.current.pause() : startAudio();
        
//         return !paused;
//     }

//     const test = () => {
//         togglePlayer(!showPlayer);
//     }

//     return(
//         <React.Fragment>
//             <Route 
//                 path='/'
//                 exact
//                 render={(props) => <Home {...props} setPlayer={setPlayer} />}  />
//             <Route 
//                 path='/episodes'
//                 render={(props) => <Episodes {...props} setPlayer={setPlayer} />}  exact/>
//             <Route 
//                 path='/about'
//                 render={(props) => <About {...props} setPlayer={setPlayer}/>} />
//             <Route
//                 path='/episodes/:episode_id'
//                 render={(props) => <EpisodeDetail {...props} setPlayer={setPlayer} />} />
//             {
//                 showPlayer && <Player {...player} ref={audio}/>
//             }
//         </React.Fragment>
//     );
// }

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
            paused: true,
        };
        this.audio = null;
        this.audioRef = element => {
            this.audio = element;
        };
    }

    startAudio = () => {
        this.audio.pause();
        this.audio.load();
        this.audio.play();
    }

    setPlayer = async (data) => {
        
        data.url !== this.state.player.url && window.PauseAllPlayButtons();

        const paused = data.url !== this.state.player.url ? true : false;

        await this.setState({
            showPlayer: true,
            player: {
                ...data
            },
            paused: !paused,
        });
        this.state.paused ? this.audio.pause() : this.startAudio();
        
        return !paused;
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
            <>
                <Switch>
                    <Route 
                        path='/'
                        exact
                        render={(props) => <Home {...props} setPlayer={this.setPlayer} />}  />
                    <Route 
                        path='/episodes'
                        exact
                        render={(props) => <Episodes {...props} setPlayer={this.setPlayer} />}  />
                    <Route
                        path='/episodes/:episode_id'
                        exact
                        render={(props) => <EpisodeDetail {...props} setPlayer={this.setPlayer} />} />
                    <Route 
                        path='/contact'
                        exact
                        render={(props) => <Contact {...props} setPlayer={this.setPlayer} />}  />

                    <Route 
                        path='/about'
                        exact
                        render={(props) => <About {...props} setPlayer={this.setPlayer}/>} />
                    <Route
                        path='/episodes/:episode_id'
                        exact
                        render={(props) => <EpisodeDetail {...props} setPlayer={this.setPlayer} />} />
                    <Route
                        path='/links'
                        exact
                        render={(props) => <Links {...props} setPlayer={this.setPlayer} />} />
                    <Route component={NotFound}/>
                </Switch>
                {
                    showPlayer && <Player {...player} audioRef={this.audioRef}/>
                }
            </>
        );
    }
}

export default Routes;