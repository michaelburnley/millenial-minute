import React, { Component } from 'react';
import Block from '../../components/episodeBlock';
import feed from '../../helpers';

class Episodes extends Component {
    constructor() {
        super();
        this.state = {
            rss: '',
        };
    }

    async componentDidMount() {
        const rss = await feed();
        await this.setState({ rss });
    }

    renderRss = async () => {
        const { items } = this.state.rss;
        const blocks = [];
        for (const item of items) {
            const episode = Block(item);
            blocks.push()
        }
        return blocks;
    }

    render() {
        return(
            <div>
                {
                    this.state.rss && this.renderRss()
                }
            </div>
        );
    }
};

export default Episodes;