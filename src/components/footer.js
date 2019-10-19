import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div id="footer">
        <nav>
            <ul>
                <li><Link to='/howto'>How to Listen</Link></li>
                <li><Link to='/episodes'>Episodes</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
            </ul>
        </nav>
    </div>
);