import React from 'react';

const Spcial = ({name,assets}) => {
    // console.log(assets)
    return (
        <div>
            <h3>Spcial:{name}</h3>
            <p><small>{assets}</small></p>
        </div>
    );
};

export default Spcial;