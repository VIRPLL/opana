import React from 'react';

export const RickAndMorty = (props) => {
    const {rickAndMorty} = props;
    return (
        <div>
            <div>Id - {rickAndMorty.id}</div>
            <div>Name - {rickAndMorty.name}</div>
            <div>Status - {rickAndMorty.status}</div>
            <div>Species - {rickAndMorty.species}</div>
            <div>Gender - {rickAndMorty.gender}</div>
            <img src={rickAndMorty.image} alt={rickAndMorty.name}/>
        </div>
    );
};
