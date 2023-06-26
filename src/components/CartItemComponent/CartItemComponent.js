import React from 'react'


function CartItemComponent({cartItem}) {

    

return (
        <div className="cart-card">
          <div className="cart-text-container">
            <p className='cart-item-text-grey'>{cartItem.productID}</p>
            <p className='cart-item-text'>{cartItem.productName}</p>
            <p className='cart-item-text-green'>Rs. {cartItem.productCost}</p>
            <p className='cart-item-text'>{cartItem.productSelectedQuantity}</p>
            <p className='cart-item-text'>Rs. {cartItem.totalProductCost}</p>
          </div>
        </div>
      );
}

export default CartItemComponent