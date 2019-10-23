import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div id="footer">
        <nav>
            <ul>
                <li><Link to='/episodes'>Episodes</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
);