import React from 'react';

// "handles": {
//     "instagram": {
//         "handle": "",
//         "url": ""
//     },
//     "facebook": {
//         "handle": "",
//         "url": ""
//     },
//     "twitter": {
//         "handle": "",
//         "url": ""
//     }
// },
// "biography": "",
// "picture": ""

const showHandles = (handles) => {
    const arr = [];
    const keys = Object.keys(handles);
    
    for (const key of keys) {
        
    }

    
    return arr;
}

export default ({ handles, biography, picture }) => (
    <div className="cast block">
        <div className="image-wrapper"><img src={ picture } /></div>
        <div className="info">
            <div className="biography">{ biography }</div>
            <div className="social">
                {
                    showHandles(handles)
                }
            </div>
        </div>
    </div>
);