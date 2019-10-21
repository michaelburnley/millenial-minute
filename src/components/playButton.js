import React, { useState } from 'react';

export default (props) => {
    const {
        image,
        url,
        title,
        setPlayer
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
    return(
        <React.Fragment>
            <div className='image-wrapper play-button' onClick={clickHandler}>
                <img alt='Play Episode' src={button} />
            </div>            
        </React.Fragment>
    );
}