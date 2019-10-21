import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import feed from '../../helpers';

export default ({ match }) => {
    const { params: { episode_id } } = match;
    const [episode, setEpisode] = useState(``);

    const getFeed = async () => {
        const { items } = await feed();
        const link = `https://anchor.fm/millennial-minute-podcast/episodes/${episode_id}`;
        const found_episode = _.find(items, { link });
        setEpisode(found_episode);
    }

    useEffect(getFeed, []);

    return(
        <div className='episode detail'>

        </div>
    );
}