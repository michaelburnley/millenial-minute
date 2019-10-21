import React, { Component, useState, useEffect } from 'react';
import feed from '../../helpers';
import Episode from '../../components/episodeBlock';
import Subscribe from '../../components/subscribe';
import './home.css';

export default (props) => {
    const [block, setBlock] = useState('');
    
    useEffect(() => {
        async function renderFeed() {
            const { items: [first, ...rest]} = await feed();
            setBlock(first);
        }
        renderFeed();
    }, []);

    return(
        <div id="home" style={{ position: 'relative' }}>
                <div className="main-block">
                {
                    block && <Episode setPlayer={props.setPlayer} data={block} detailed={true} />
                }
                
                <Subscribe />
                </div>
        </div>
    );
}