import React from 'react';
import Grandpa from './Grandpa';
import "./familyTree.css"

const FamilyTree = () => {
    const assets = "Diamond";
    return (
        <div className='family-tree'>
            <h3>Family tree</h3>
            <Grandpa assets={assets}></Grandpa>
        </div>
    );
};

export default FamilyTree;