import React from 'react';
import './player.scss';

export default (props) => {
    const {
        url,
        title,
        // image 
    } = props;

    const cleanTitle = title.split(': ')[1];
    const season = title.split(':')[0];
    return (
        <div className='player'>
            <div className='pod-season'>{ season }</div>
            <div className='pod-title'>{ cleanTitle }</div>
            <audio controls ref={props.audioRef}>
                <source src={ url } type='audio/mpeg' />
            </audio>
        </div>
    );
}