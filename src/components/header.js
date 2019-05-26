import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <header>
        <h1>Millenial Minute</h1>
        <nav>
            <ul>
                <li><Link to='/episodes'>Episodes</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
            </ul>
        </nav>
    </header>
);