import React from 'react';
import links from './links.json';
import _ from 'lodash';

import './links.scss';

const Profile = () => (
    <div class="user-area">
        <div class="text-xs-center">
            <span class="img-circle">
                <img class="user-img" alt="millenial minute logo" src="https://d15mvavv27jnvy.cloudfront.net/XjE9d/326dce6e32f051aa47836195f67a9393.jpg" />
            </span>
            <h3><a class="user-name btn" href='https://www.instagram.com/millennialminpodcast/'>@millennialminpodcast</a></h3>
        </div>
    </div>
);


export default () => {

    const keys = _.keys(links);
    const blocks = [];

    _.each(keys, key => {
        const { link, text } = links[key];
        const block = <a className='insta-link' href={link}><div className='block link btn-link'>{text ? text : _.startCase(_.toLower(key))}</div></a>;
        blocks.push(block);
    });

    return(
        <div className="block links">
            <Profile />
            {
                blocks
            }
        </div>
    );

}