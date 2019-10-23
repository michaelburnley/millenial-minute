import React, { useState, useEffect } from 'react';
import feed from '../../helpers';
import Episode from '../../components/episodeBlock';
import Subscribe from '../../components/subscribe';
import './home.scss';

export default (props) => {
    const [block, setBlock] = useState('');
    
    useEffect(() => {
        async function renderFeed() {
            // eslint-disable-next-line no-unused-vars
            const { items: [first, ...rest]} = await feed();
            setBlock(first);
        }
        renderFeed();
    }, [props.setPlayer]);

    return(
        <div id="home" style={{ position: 'relative' }}>
                <div className="main-block">
                {
                    block && <Episode setPlayer={props.setPlayer} data={block} detailed={true} />
                }
                
                </div>
                <Subscribe />
        </div>
    );
}