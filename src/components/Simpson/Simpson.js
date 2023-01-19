import React from 'react';

export const Simpson = (props) => {
    const {name, surname, img} = props
    return (
        <div>
            <div>Name - {name}</div>
            <div>Surname - {surname}</div>
            <img src={img} alt=''/>
        </div>
    );
};

