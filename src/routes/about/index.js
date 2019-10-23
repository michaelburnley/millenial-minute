import React from 'react';
import cast from './cast.json';
import Block from '../../components/castBlock';

export default () => {
    const blocks = [];
    const keys = Object.keys(cast);

    for (const member of keys) {
        const data = {
            member,
            ...cast[member],
        };
        const castBlock = <Block data={data} key={member} />
        blocks.push(castBlock);
    }

    return(
        <>
            {
                blocks
            }
        </>
    );
    
};