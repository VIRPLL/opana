import React from 'react';

export const RickAndMorty = (props) => {
    const {id,name,status,species,gender,image} = props;
    return (
        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>Status - {status}</div>
            <div>Species - {species}</div>
            <div>Gender - {gender}</div>
            <img url={image} alt={name}/>
        </div>
    );
};
