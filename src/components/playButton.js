import React, { useState } from 'react';

const Detailed = ({ title, Play }) => {
    
    const [first, ...rest] = title.split(`:`);
    const [season] = first.match(/S[0-9]*/);
    const [episode] = first.match(/E[0-9]*/);

    return(
        <div className='detailed-play'>
            <Play />
            <div className='season'>{season.replace(`0`,``)}</div>
            <div className='episode'>{ episode }</div>
        </div>
    );
};

export default (props) => {
    const {
        image,
        url,
        title,
        setPlayer,
    } = props;
    
    const [toggle, setToggle] = useState(false);

    window.PauseAllPlayButtons = () => {
        setToggle(false);
    };

    const clickHandler = async () => {
        const isPaused = await setPlayer({ url, title, image });
        setToggle(!isPaused);
    }

    const button = toggle ? `/images/pause-button.png` : `/images/play-button.png`;

    const Play = () => (
        <div className='image-wrapper play-button mobile' onClick={clickHandler}>
            <img alt='Play Episode' src={button} />
        </div>
    );

    return(
        <>
            {
                props.detailed ? <Detailed title={title} Play={Play} /> : <Play />
            }
        </>
    );
}