import React from "react";

const ProductTable = ({ product }) => {
//   console.log(product)
  return (
    <div>
      <h3>All products :{product.length}</h3>
      <table>
        <thead>
          <td>No</td>
          <td>Product</td>
          <td>prices</td>
          <td>Quantity</td>
          <td>Action</td>
        </thead>
        <tbody>
          {product.map((pro,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>{pro.quantity}</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
