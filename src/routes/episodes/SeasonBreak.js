import React from 'react';

export default ({ text }) => {

    return(
        <h2 className="season-header">{ text === `Season` ? `Specials` : text }</h2>
    );
}