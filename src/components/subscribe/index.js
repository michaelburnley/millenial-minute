import React from 'react';
import './subscribe.css';
import platforms from './platforms.json';

export default () => {
    const elements = [];

    const keys = Object.keys(platforms);

    for (const key of keys) {
        const {
            url,
            icon
        } = platforms[key];
        const element = <div className='platform'><a href={url}><img alt={key} src={`images/platforms/${icon}`} /></a></div>
        elements.push(element);
    }

    return(
        <div className='subscribe'>
            <div className='header'>Subscribe to Millenial Minute</div>
            {
                elements
            }
            <div className="lineButton">
                <a class='button' href="/episodes">All Episodes</a>
            </div>
        </div>
    )
}