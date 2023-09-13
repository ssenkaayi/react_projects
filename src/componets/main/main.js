import React from "react";
import './main.css'
import { Product } from "../product/product";

export function Main(props){
  
    const{cartItems,products,onAdd,onRemove}=props;

    return(
        
        products.map(product=>(
        <Product 
        onAdd={onAdd} 
        onRemove={onRemove} 
        key={product.id} 
        product={product}
        item={cartItems.find((x)=>x.id===product.id)}
        />))

    )
}