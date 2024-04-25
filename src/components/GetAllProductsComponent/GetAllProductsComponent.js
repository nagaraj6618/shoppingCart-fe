import React, { useState, useEffect } from 'react'
import './GetAllProductsComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'
import {BE_URL} from '../../config/info.js'

function GetAllProductsComponent() {
    const [products, setProducts] = useState([])

    const fetchAllProducts  = async() => {
        try{
        const response = await fetch(`${BE_URL}/shoppingCart/`)
        const data = await response.json()
        console.log(data);
        setProducts(data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllProducts()
        
    }, [])

  return (
    <div className='products'>
        {
            products.length==0 && (<div>

                <h1 style={{color:"white"}}>Loading...</h1>
            </div>)
        }
        { products && products.map(productItem=>(
            <ProductComponent productItem={productItem} key={productItem._id}/>
            
        ))}
    </div>
  )
}

export default GetAllProductsComponent