import React from 'react';
import './cast.css';

export default ({ data: { age, bio, image, member }}) => (
    <div className="cast block">
        <div className="image-wrapper">
            <img alt={member} src="https://via.placeholder.com/500" /></div>
        <div className="info">
            <div className="name-age">
                <div className="name">{ member }</div>
                <div className="age">({ age })</div>
            </div>
            <div className="bio">{ bio }</div>
        </div>
    </div>
);