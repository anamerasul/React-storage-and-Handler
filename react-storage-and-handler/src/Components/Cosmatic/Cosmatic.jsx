import React, { useEffect, useState } from 'react';
import Cos from '../Cos/Cos';
// import { add } from '../Utlities/calculate';

import './Cosmatic.css'
// import {add} f
const Cosmatic = () => {


    // const cosmatics=[
    //     {
    //       "id": "6238dc46226cba3a49b60b35",
    //       "index": 0,
    //       "guid": "4451bd74-cc40-45cf-bef6-c7638159443c",
    //       "isActive": false,
    //       "balance": "$3,821.58",
    //       "picture": "http://placehold.it/32x32",
    //       "age": 38,
    //       "eyeColor": "green",
    //       "name": "Whitehead Edwards",
    //       "gender": "male",
    //       "company": "XOGGLE",
    //       "email": "whiteheadedwards@xoggle.com",
    //       "phone": "+1 (883) 512-3596",
    //       "tags": [
    //         "cillum",
    //         "est",
    //         "tempor",
    //         "adipisicing",
    //         "ad",
    //         "minim",
    //         "culpa"
    //       ],
    //       "greeting": "Hello, Whitehead Edwards! You have 10 unread messages.",
    //       "favoriteFruit": "banana"
    //     },
    //     {
    //       "id": "6238dc4672e3c916ec227e54",
    //       "index": 1,
    //       "guid": "9d7ee91e-4ad7-476e-a26c-37b65f974c20",
    //       "isActive": false,
    //       "balance": "$1,181.47",
    //       "picture": "http://placehold.it/32x32",
    //       "age": 33,
    //       "eyeColor": "green",
    //       "name": "Florine Michael",
    //       "gender": "female",
    //       "company": "FLUMBO",
    //       "email": "florinemichael@flumbo.com",
    //       "phone": "+1 (900) 416-2047",
    //       "tags": [
    //         "proident",
    //         "reprehenderit",
    //         "voluptate",
    //         "magna",
    //         "esse",
    //         "enim",
    //         "sit"
    //       ],
    //       "greeting": "Hello, Florine Michael! You have 2 unread messages.",
    //       "favoriteFruit": "banana"
    //     },
    //     {
    //       "id": "6238dc46e4c19f5c491239ab",
    //       "index": 2,
    //       "guid": "bb4ef513-27e5-485d-9e50-549ad9212adb",
    //       "isActive": true,
    //       "balance": "$3,308.11",
    //       "picture": "http://placehold.it/32x32",
    //       "age": 24,
    //       "eyeColor": "blue",
    //       "name": "Lawson Carroll",
    //       "gender": "male",
    //       "company": "YURTURE",
    //       "email": "lawsoncarroll@yurture.com",
    //       "phone": "+1 (834) 418-2845",
    //       "tags": [
    //         "esse",
    //         "labore",
    //         "amet",
    //         "enim",
    //         "voluptate",
    //         "aliquip",
    //         "irure"
    //       ],
    //       "greeting": "Hello, Lawson Carroll! You have 6 unread messages.",
    //       "favoriteFruit": "apple"
    //     },
    //     {
    //       "id": "6238dc4666fed43ebc634c22",
    //       "index": 3,
    //       "guid": "0473dc57-d440-42bd-861e-2a4b0818849f",
    //       "isActive": true,
    //       "balance": "$3,269.90",
    //       "picture": "http://placehold.it/32x32",
    //       "age": 36,
    //       "eyeColor": "green",
    //       "name": "Frazier Burks",
    //       "gender": "male",
    //       "company": "ACCIDENCY",
    //       "email": "frazierburks@accidency.com",
    //       "phone": "+1 (904) 575-3259",
    //       "tags": [
    //         "nostrud",
    //         "dolor",
    //         "veniam",
    //         "cupidatat",
    //         "sit",
    //         "nulla",
    //         "magna"
    //       ],
    //       "greeting": "Hello, Frazier Burks! You have 8 unread messages.",
    //       "favoriteFruit": "strawberry"
    //     },
    //     {
    //       "id": "6238dc4681f40a77795dcc39",
    //       "index": 4,
    //       "guid": "2293905a-c007-4534-98b8-f1d06462230f",
    //       "isActive": false,
    //       "balance": "$1,740.27",
    //       "picture": "http://placehold.it/32x32",
    //       "age": 35,
    //       "eyeColor": "brown",
    //       "name": "Ramona Hernandez",
    //       "gender": "female",
    //       "company": "BEZAL",
    //       "email": "ramonahernandez@bezal.com",
    //       "phone": "+1 (889) 400-3384",
    //       "tags": [
    //         "amet",
    //         "dolore",
    //         "ex",
    //         "laborum",
    //         "deserunt",
    //         "minim",
    //         "cillum"
    //       ],
    //       "greeting": "Hello, Ramona Hernandez! You have 8 unread messages.",
    //       "favoriteFruit": "banana"
    //     }
    //   ]

    // const cosmatics=[

    //     {id:1,name:'Alta' ,price:100},
    //     {id:2,name:'Alta2' ,price:200},
    //     {id:3,name:'Alt3' ,price:300},
    //     {id:4,name:'Alt4' ,price:400},
    //     {id:5,name:'Alta5' ,price:500},
    // ]

    // const first=55;
    // const second=66;
    // const total = add(first,second)

    const [cosmatics,setCosmatics]=useState([]);
    useEffect(()=>{
    fetch(`data.json`)
    .then(res=>res.json())
    .then(data=>setCosmatics(data))

    },[])

    return (
        <div>
            <h1>Welcome to my cosmatic</h1>
            {/* <p>{total}</p> */}
            {
                cosmatics.map(cosmatic=><Cos
                key={cosmatic.id}
                cosmatic={cosmatic}
                ></Cos>)
            }
        </div>
    );
};

export default Cosmatic;