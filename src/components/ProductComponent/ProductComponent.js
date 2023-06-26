import React, {  useState } from 'react'
import './ProductComponent.css'

function ProductComponent({productItem}) {

  const [stockQuantity, setStockQuantity] = useState(productItem.productStockQuantity)
  const [selectedQuantity, setSelectedQuantity] = useState(0)

  const incrementHandler = () => {
    if (stockQuantity > 0){
      setSelectedQuantity(selectedQuantity+1)
      setStockQuantity(stockQuantity-1)
    }
    else{
      alert(`${productItem.productName} is out of stock`)
    }
  }

  const decrementHandler = () => {
    if (selectedQuantity > 0)
    {
      setSelectedQuantity(selectedQuantity-1)
      setStockQuantity(stockQuantity+1)
    }
    else{
      alert(`${productItem.productName} is not added to the cart`)
    } 
  }

  const addingToCartHandler = async() => {
    if (selectedQuantity > 0)
    {
      const response = await fetch(`http://localhost:3500/api/v1/shoppingCart/cart/`,{
        method:'POST',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          productID:productItem.productID ,
          productName: productItem.productName ,
          productCost: productItem.productCost ,
          productStockQuantity : stockQuantity,
          productSelectedQuantity: selectedQuantity
        })
      })
      const data = await response.json()
      if (data.ErrorMessage)
      {
        alert(`${data.ErrorMessage}`)
      }
      else
      {
        alert(`${productItem.productName} is added to cart successfully`)
        setSelectedQuantity(0)
      }
    }
  }

return (
        <div className="card">
          <div className="text-container">
          <h3>{productItem.productName}</h3>
            <p className="status">
              {productItem.productCategory} ({productItem.productID})
            </p>
            <img src={productItem.productImagePath} alt=''/>
            <p className="title">Price</p>
            <p className='author'>Rs. {productItem.productCost}</p>
            <p className="availability">Available stock : {stockQuantity}</p>
            <div className='counter'>
            <button className='counter-button' onClick={decrementHandler}>-</button>
            <p class='counter-number'>{selectedQuantity}</p>
            <button className='counter-button' onClick={incrementHandler}>+</button>
            </div>
            <button className='submit-button' onClick={addingToCartHandler}>
              Add to Cart
            </button>
          </div>
        </div>
      );
}

export default ProductComponent