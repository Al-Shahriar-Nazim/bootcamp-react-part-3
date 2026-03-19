import React, { useState } from "react";

const ProductFrom = ({ handleProduct }) => {
  const [error, setError] = useState([]);

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

        // validation
    if (name.length === 0) {
      setError("Please give me a provied name.");
      return;
    } else if (price.length === 0) {
      setError("Please give me a provied prices");
      return;
    } else if (price < 0) {
      setError("prices can not negative value");
      return;
    }else if(quantity===0){
      setError("Quantity can not negative and plese give me provide quantity")
      return;
    }
    else{
      setError("")
    }
  // object create
  const newProduct = {
    name,
    price,
    quantity,
  };
    handleProduct(newProduct);

  };


  // console.log(newProduct);


  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="product name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="product quantity" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <smal>{error}</smal>
      </p>
    </div>
  );
};

export default ProductFrom;
