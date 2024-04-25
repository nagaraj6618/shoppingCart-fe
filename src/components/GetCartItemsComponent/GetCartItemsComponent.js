import React, { useState, useEffect } from 'react'
import './GetCartItemsComponent.css'
import CartItemComponent from '../CartItemComponent/CartItemComponent'
import { BE_URL } from '../../config/info'


function GetCartItemsComponent() {
    const [totalCartCost, setTotalCartCost] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const fetchAllCartItems  = async() => {
        const response = await fetch(`${BE_URL}/shoppingCart/cart`)
        const data = await response.json()
        setCartItems(data)
    }

    const fetchCartTotal  = async() => {
        const response = await fetch(`${BE_URL}/shoppingCart/cartTotal`)
        const data = await response.json()
        // console.log(response);
        console.log(data);
        if (data.length === 0)
        {
            setTotalCartCost(0)       
        }
        else
        {
            setTotalCartCost(data[0].totalCartCost)
        }
    }

    useEffect(() => {
        fetchCartTotal()
        fetchAllCartItems()
    }, [])

    const checkOutHandler = async() => {
        setTotalCartCost(0)
        const response = await fetch(`${BE_URL}/shoppingCart/checkout`,{
            method:'DELETE'
        })
        console.log(response);
        alert(`Cart total is Rs.${totalCartCost}/-
You will be redirected to payment soon.`)
        window.location.href='/'
    }

  return (
    <React.Fragment>
    <div className='cart-items'>
        {cartItems.map(cartItem=>(
            <CartItemComponent cartItem={cartItem}/>
        ))}
    </div>
    <p className='cart-item-text-bold'>Total Cart : Rs. {totalCartCost}</p>
    <button onClick={checkOutHandler}>Check out</button>
    </React.Fragment>
  )
}

export default GetCartItemsComponent