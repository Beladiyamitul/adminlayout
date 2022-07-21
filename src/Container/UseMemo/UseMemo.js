import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemo(props) {

const [number , setNumber] = useState(0);
const [count , setCount] = useState(0);


const factorial = (n) => {
    console.log("factorial");
    if (n > 1) {
        return n * factorial(n-1);
    }else{
        return 1;
    }
}

// const result = factorial(number);

const result = useMemo(() => factorial(number) ,  [number])




    return (
        <div>
            <input type="text" placeholder='Please Enter Number' onChange={(e) => {setNumber(e.target.value)}}/>
            <button onClick={() => {setCount(count + 1)}}>counter</button>  




            <p>counter number is : {count}</p>
            <p>factorial number is : {result}</p>
        </div>
    );
}

export default UseMemo;
