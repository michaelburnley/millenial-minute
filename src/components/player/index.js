import React from 'react';
import './player.css';

export default class Player extends React.Component {

    render() {
        const {
            url,
            title,
            // image 
        } = this.props;
    
        const cleanTitle = title.split(': ')[1];
        const season = title.split(':')[0];
        return (
            <div className='player'>
                <div className='pod-season'>{ season }</div>
                <div className='pod-title'>{ cleanTitle }</div>
                <audio controls ref={this.props.audioRef}>
                    <source src={ url } type='audio/mpeg' />
                </audio>
            </div>
        );
    }
}
