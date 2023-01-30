import React from 'react';

import './Album.style.css'

export const Album = ({album}) => {

    const {userId, id, title} = album

    return (
        <div className={'album'}>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};
