import React from 'react';
import { add } from '../Utlities/calculate';

import './Cosmatic.css'
// import {add} f
const Cosmatic = () => {
    const first=55;
    const second=66;
    const total = add(first,second)
    return (
        <div>
            <h1>Welcome to my cosmatic</h1>
            <p>{total}</p>
        </div>
    );
};

export default Cosmatic;