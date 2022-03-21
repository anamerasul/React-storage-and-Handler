import React from 'react';
import { add, multiply } from '../Utlities/calculate';

const Shoes = () => {

    const first=13;
    const second=10;
    const result=multiply(first,second)
    const sum=add(first,second)
    return (
        <div>
            <h3>This is shoe</h3>
            <h4>result{result}</h4>
            <h4>sum{sum}</h4>
        </div>
    );
};

export default Shoes;