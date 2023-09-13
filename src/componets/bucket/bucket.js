import React from "react";
import './bucket.css'



export function Bucket(props){

    const{cartItems,onAdd,onRemove}=props;
    const itemPrice = cartItems.reduce((a,b)=>a+ b.numberOfItem*b.price,0);
    const shippingCost = itemPrice > 2000 ? 20 : 0;
    const taxPrice = shippingCost > 2000 ? 20 : 0;
    const totalPrice = itemPrice + taxPrice +shippingCost;
    return(

        <div>
            <div>
            <h1> shopping cart </h1>

            {cartItems.length===0?<div>cart is empty</div>:''}
            
            </div>

            <div className="purchased_container">
                <h3><p>pdt</p></h3>
                <h3><p>qty</p></h3>
                <h3><p>price</p></h3>

            </div>

            <div>

                {cartItems.map(purchased=> (

                    <div>
                        <div key={purchased.id}  className="purchased_container">
                        
                            <img src={purchased.imgscr} alt={purchased.name}></img>
                            <div>
                            <button onClick={()=>onRemove(purchased)}>-</button>
                            <span>{purchased.numberOfItem}</span>
                            <button onClick={()=>onAdd(purchased)}>+</button>
                            </div> 
                            <p>${purchased.numberOfItem*purchased.price}</p>
                            
                        </div>

                  

                    </div>


                ))}
     
            </div>

            <div className="totalprice">

                <p>Total price = {totalPrice}</p>

            </div>

        </div>
    )
}