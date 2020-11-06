import React from 'react'

 function Product (props) {

  
    return (
      <div fuckyou={props.id} really="true">
        <h3>{props.name}</h3>
        
        <img src={props.image} />
        <p>Price: {props.price}</p>
        <button onClick={props.deleteProduct}>Delete</button>

      </div>
    )
  
}

export default Product;
