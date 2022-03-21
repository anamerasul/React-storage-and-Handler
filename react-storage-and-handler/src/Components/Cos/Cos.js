import React from 'react';

const Cos = (props) => {

    const {name,price}=props.cosmatic
    return (
        <div>
            <h2>name{name}</h2>
            <p>price {price}</p>
        </div>
    );
};

export default Cos;