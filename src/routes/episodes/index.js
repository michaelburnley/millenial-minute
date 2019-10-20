import React, { Component } from 'react';
import Block from '../../components/episodeBlock';
import feed from '../../helpers';
import Loader from 'react-loader-spinner'
import './episodes.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rss: '',
            blocks: [],
        };
    }

    componentDidMount() {
        this.renderBlock();
    }

    renderBlock = async () => {
        const rss = await feed();
        const { items } = rss;
        const blocks = [];
        for (const item of items) {
            const episode = <Block setPlayer={this.props.setPlayer} data={item} />;
            blocks.push(episode)
        }
        this.setState({ blocks });
    }

    render() {
        return(
            <div className="episodes">
                {
                    this.state.blocks.length > 0 ? this.state.blocks : 
                    <Loader
                        type="ThreeDots"
                        color="#f0ccd8"
                        height={100}
                        width={100}
                        timeout={6000} />
                }
            </div>
        );
    }
};

export default Episodes;