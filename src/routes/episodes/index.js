import React, { useState, useEffect } from 'react';
import Block from '../../components/episodeBlock';
import feed from '../../helpers';
import Loader from 'react-loader-spinner'
import './episodes.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default (props) => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        async function renderFeed() {
            const rss = await feed();
            const { items } = rss;
            const arr = [];
            for (const item of items) {
                const episode = <Block setPlayer={props.setPlayer} data={item} key={item.title} />;
                arr.push(episode)
            }
            setBlocks(arr);
        }
        renderFeed();
    }, [props.setPlayer]);

    return(
        <div className="episodes">
            {
                blocks.length > 0 ? blocks : 
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