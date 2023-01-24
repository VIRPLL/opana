import React, {useState} from 'react';

export const Count = () => {

    const [b, setB] = useState(0);

    const inc = () => {
        setB(b+1)
    }

    return (

        <div>
            <div>B - {b}</div>
            <button onClick={()=>inc()}>inc</button>
        </div>
    );
};
