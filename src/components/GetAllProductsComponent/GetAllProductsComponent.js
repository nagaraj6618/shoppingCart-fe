import React, { useState, useEffect } from 'react'
import './GetAllProductsComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'


function GetAllProductsComponent() {
    const [products, setProducts] = useState([])

    const fetchAllProducts  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/shoppingCart/')
        const data = await response.json()
        console.log(data);
        setProducts(data)
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

  return (
    <div className='products'>
        {products.map(productItem=>(
            <ProductComponent productItem={productItem}/>
        ))}
    </div>
  )
}

export default GetAllProductsComponent