import React from 'react';
import Spcial from './Spcial';

const Myself = ({assets}) => {
    // console.log(assets)
    return (
        <div>
            <h3>MySelf</h3>
            <Spcial assets={assets} name="Nazim"></Spcial>
        </div>
    );
};

export default Myself;