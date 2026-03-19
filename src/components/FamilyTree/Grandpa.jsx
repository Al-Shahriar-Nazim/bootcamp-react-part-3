import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({assets}) => {
    console.log(assets)
    return (
        <div style={{textAlign:"center"}}>
            <h3>Grand father</h3>
            <section className='flex'>
                <Dad assets={assets}></Dad>
                <Uncle></Uncle>
                <Aunt assets={assets}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;