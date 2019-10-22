import React, { useState, useEffect } from 'react';
import Block from '../../components/episodeBlock';
import feed from '../../helpers';
import Loader from 'react-loader-spinner'
import './episodes.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import CopyBlock from '../../components/copy';
import SeasonBreak from './SeasonBreak';

export default (props) => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        async function renderFeed() {
            const rss = await feed();
            const { items } = rss;
            const arr = [];
            let current_season;
            let previous_season = [''];

            for (const item of items) {
                current_season = item.title.match(/S[0-9]*/);
                if (current_season !== null && current_season[0] !== previous_season[0]) {
                    const season_text = current_season[0].replace(`S`, `Season`).replace(`0`, ` `);
                    arr.push(<SeasonBreak text={season_text} />);
                }
                const episode = <Block setPlayer={props.setPlayer} data={item} key={item.title} />;
                arr.push(episode)
                previous_season = current_season;
            }
            setBlocks(arr);
        }
        renderFeed();
    }, [props.setPlayer]);

    return(
        <div className="episodes">
            <CopyBlock content="A weekly podcast dedicated to memes, sports, trending topics, politics, and everything else in between."/>
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