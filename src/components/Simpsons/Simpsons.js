import React from 'react';
import {Simpson} from "./Simpson/Simpson";

export const Simpsons = () => {
    return (
        <div>
            <Simpson name={"Homer"} surname={"Simpson"} image={"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"}/>
            <Simpson name={"Marge"} surname={"Simpson"} image={"https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"}/>
            <Simpson name={"Lisa"} surname={"Simpson"} image={"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"}/>
            <Simpson name={"Bart"} surname={"Simpson"} image={"https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"}/>
        </div>
    );
};

