import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import feed from '../../helpers';
import Block from '../../components/episodeBlock';
import './detail.css';


export default (props) => {
    const { params: { episode_id } } = props.match;
    const [episode, setEpisode] = useState(``);
    console.log(props)
    useEffect(() => {
        const getFeed = async () => {
            const { items } = await feed();
            const link = `https://anchor.fm/millennial-minute-podcast/episodes/${episode_id}`;
            const found_episode = _.find(items, { link });
            setEpisode(found_episode);
        }
        getFeed();
    },[]);

    return(
        <div className='episode detail'>
            {
                episode && <Block setPlayer={props.setPlayer} data={episode} detailed={true} />
            }
        </div>
    );
}