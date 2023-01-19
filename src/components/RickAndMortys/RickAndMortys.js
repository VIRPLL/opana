import React from 'react';
import {RickAndMorty} from "./RickAndMorty/RickAndMorty";

export const RickAndMortys = () => {

    const rickAndMortys = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        }

    ];

    return (
        <div>
            {
                rickAndMortys.map(rickAndMorty=><RickAndMorty key={rickAndMorty.id} rickAndMorty={rickAndMorty}/>)
            }
        </div>
    );
};

