import React from 'react';
import Cousin from './Cousin';

const Aunt = ({assets}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin assets={assets} name="sha-poran"></Cousin>
                <Cousin name="shadat"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;