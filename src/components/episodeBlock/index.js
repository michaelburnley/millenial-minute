import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PlayButton from '../../components/playButton';

import './episodeBlock.css';

const Detailed = ({ date, content, link, pubDate }) => (
    <React.Fragment>
        <div className="info date">{ date }</div>
        <div className="info description">{ content }</div>
    </React.Fragment>
);

export default ({ data, setPlayer, detailed }) => {
    const {
        contentSnippet,
        isoDate,
        link,
        pubDate,
        title,
        itunes,
        enclosure,
    } = data;

    const url = enclosure.url;
    const image = itunes.image;

    const episode_number = title.match(/S[0-9]*E[0-9]*/);
    const episode_clean = episode_number && episode_number[0].replace(`E0`, `E`);
    const image_url = `/images/episodes/${episode_clean}.jpg`;
    
    const date = moment().format(`DD-MM-YYYY`, isoDate);
    const content = contentSnippet;
    const classes = detailed ? `block episode detailed` : `block episode`;
    const handle = `/episodes/${link.split(`/`).pop()}`;

    return(
        <div className={classes}>
            <div className={'image-wrapper'}>
                <Link to={handle}>
                    <img onError={(e) => {
                            e.target.src = itunes.image;
                            e.target.style.border = 'solid white 14px';
                            e.target.style.width = '90%';
                        }}
                        src={image_url} alt={title} />
                </Link>
            </div>
            <div className='podcast content'>
                <PlayButton setPlayer={setPlayer} url={url} image={image} title={title} />
                <div className="info title">{ title.replace(/S[0-9]*E[0-9]*:/, ``) }</div>
                {
                    detailed && <Detailed content={content} date={date} link={link} pubDate={pubDate} />
                }

            </div>
        </div>
    );
};


                