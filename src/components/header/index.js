import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default () => (
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><Link to='/episodes'>Episodes</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><a href='https://millenial-minute.myshopify.com/'>Shop</a></li>
                    <li><a href='https://www.patreon.com/MillennialMinPodcast'>Donate</a></li>
                </ul>
            </nav>
            <h1><Link to='/'>Millenial Minute</Link></h1>
        </div>
    </header>
);