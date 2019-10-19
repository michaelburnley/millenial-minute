import React, { Component } from 'react';
import Block from '../../components/episodeBlock';
import feed from '../../helpers';

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
            <div>
                {
                    this.state.blocks
                }
            </div>
        );
    }
};

export default Episodes;