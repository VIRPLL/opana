import React from 'react';

export const RickAndMorty = (props) => {
    const {rickAndMorty:{id,name,status,species,gender,image}} = props;
    return (
        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>Status - {status}</div>
            <div>Species - {species}</div>
            <div>Gender - {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};
