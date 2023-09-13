import React from "react";

export function Product(props){

    const {item,product,onAdd,onRemove} = props;

    return(
        <div className="product">
            <img src={product.imgscr} alt={product.name}></img>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <div>
                {item ?(

                    <div>
                       <button onClick={()=>onRemove(product)}>-</button>
                       <span>{item.numberOfItem}</span>
                       <button onClick={()=>onAdd(product)}>+</button>
                    </div> 
                ) : (
                    <button onClick={()=>onAdd(product)}>add to cart</button>
                )}
            </div>
            

        </div>

    )
}