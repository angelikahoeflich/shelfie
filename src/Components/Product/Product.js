import React from 'react'

 function Product (props) {

  
    return (
      <div>
        <h1>Product</h1>
        {props.name}
        {props.image}
        {props.price}

      </div>
    )
  
}

export default Product;
