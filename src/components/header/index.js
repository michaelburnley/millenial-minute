import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/episodes'>Episodes</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
            </ul>
        </nav>
        <h1><Link to='/'>Millenial Minute</Link></h1>
    </header>
);