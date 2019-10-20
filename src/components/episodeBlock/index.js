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

    const episode_number = title.match(/S[0-9]*E[0-9]*/);
    const episode_clean = episode_number && episode_number[0].replace(`E0`, `E`);
    const image_url = `/images/episodes/${episode_clean}.jpg`;

    console.log(`Test title: ${episode_clean}`, image_url);


    return(
        <div className='block episode'>
            <div className='image-wrapper' onClick={clickHandler}>
                <img onError={(e) => {
                    e.target.src = itunes.image;
                    e.target.style.border = 'solid white 14px';
                    e.target.style.width = '90%';
                    }}
                    src={image_url} alt={title} />
            </div>
            <div className='podcast content'>
                <div className='image-wrapper play-button' onClick={clickHandler}><img alt='Play Episode' src="/images/play-button.png" /></div>
                <div className="info title">{ title.replace(/S[0-9]*E[0-9]*:/, ``) }</div>

            </div>
        </div>
    );
};

// const date = moment().format(`DD-MM-YYYY`, isoDate);
//     const content = contentSnippet.length > 100 ? contentSnippet.substring(0, contentSnippet.lastIndexOf(' ', 97)) : contentSnippet;
    
                // {/* <div className="info description">{ content }</div>
                // <div className="info date">{ date }</div>
                // <div className="info link">{ link }</div> */}
                // {/* <div className="info date">{ pubDate }</div> */}