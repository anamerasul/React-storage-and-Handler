import React from 'react';
import { addToDb, removeFromDb } from '../Utlities/fakedb';
import './cos.css'

const Cos = (props) => {

    const {name,price,id}=props.cosmatic

    const addToCart=(id)=>{
        console.log('item added',id)

        addToDb(id)
    }


    const removeFromCart=id=>{
        removeFromDb(id)
        console.log('remove', id)
    }
    const addToCartWithParam=()=>addToCart(id)
    return (
        <div className="product">
            <h2>name{name}</h2>
            <p>price {price}</p>
            <p>{id}</p>
            <button onClick={addToCartWithParam}>add to card</button>

            <button onClick={()=>addToCart(id)}>Purchase</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cos;