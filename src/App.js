import React from 'react';
import Nav from './componets/nav/nav';
import { Main } from './componets/main/main';
import { Bucket } from './componets/bucket/bucket';
import './index.css'
import { data } from './data/data';
import { useState } from 'react';

 



function App() { 
   
  const[cartItems,setCartItems]=useState([]);
  const{products}=data;

  const onAdd = (product)=>{

    const purchased = products.find((item)=>product.id===item.id);
    const incart = cartItems.find((item)=>purchased.id===item.id);

    if(incart){

      // alert('product already exsist')
      const newCartItems = cartItems.map((item)=>
      purchased.id===item.id ? {...incart , numberOfItem:incart.numberOfItem +1}:item);
      setCartItems(newCartItems)
   
    }
    else

    {  
      const newCartItems = [...cartItems,{...purchased,numberOfItem:1}]
      setCartItems(newCartItems)
      console.log(newCartItems);    

    }
  };

  
  const onRemove = (product)=>{


    const purchased = products.find((item)=>product.id===item.id);
    const incart = cartItems.find((item)=>purchased.id===item.id);

    if(incart.numberOfItem===1){
      const newCartItems = cartItems.filter((item)=>item.id!==incart.id);

      setCartItems(newCartItems)

    }else{

    const newCartItems = cartItems.map((item)=>
    purchased.id===item.id ? {...incart , numberOfItem:incart.numberOfItem -1}:item);
    setCartItems(newCartItems)

    }


  };
  return (
    <div>

      <Nav/>
      <div className='container'>

        <div className='product_container'>

        <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>

        </div>
        <div className='cart_container'>

        <Bucket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

        </div>
      </div>


    </div>

  );
}


export default App;
