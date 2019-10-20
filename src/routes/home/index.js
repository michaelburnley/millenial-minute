import React, { Component } from 'react';
import feed from '../../helpers';
import Episode from '../../components/episodeBlock';
import Subscribe from '../../components/subscribe';
import './home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            block: '',
        };
    }

    async componentDidMount() {
        const { items: [block, block2, ...rest]} = await feed();
        this.setState({ block: block });
        console.log(`here ${JSON.stringify(block2)}`);
    }

    render() {
        return(
            <div id="home" style={{ position: 'relative' }}>
                <div className="main-block">
                {
                    this.state.block && <Episode setPlayer={this.props.setPlayer} data={this.state.block} detailed={true} />
                }
                
                    <Subscribe />
                </div>
            </div>
        );
    }
}

export default Home;