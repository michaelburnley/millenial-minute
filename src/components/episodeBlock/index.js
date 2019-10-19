import React from 'react';
import moment from 'moment';
import './episodeBlock.css';

export default ({ data, setPlayer }) => {
    const {
        contentSnippet,
        isoDate,
        link,
        pubDate,
        title,
        itunes,
        enclosure,
    } = data;

    const clickHandler = () => {
        setPlayer({ url: enclosure.url, title, image: itunes.image });
    }

    const date = moment().format(`DD-MM-YYYY`, isoDate);
    const content = contentSnippet.length > 100 ? contentSnippet.substring(0, contentSnippet.lastIndexOf(' ', 97)) : contentSnippet;
    return(
        <div className='block episode'>
            <div className='image-wrapper' onClick={clickHandler}>
                <img src={itunes.image} alt={title} />
            </div>
            <div className='podcast content'>
                <div className="info title">{ title }</div>
                <div className="info description">{ content }</div>
                <div className="info date">{ date }</div>
                <div className="info link">{ link }</div>
                <div className="info date">{ pubDate }</div>
            </div>
        </div>
    );
};