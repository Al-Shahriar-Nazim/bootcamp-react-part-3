import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const[product,setProduct] = useState([])

    const handleProduct =(newProduct)=>{
        const products =[...product,newProduct];
        setProduct(products)
    }
    console.log(product)
    return (
        <div>
            <ProductFrom handleProduct={handleProduct}></ProductFrom>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;