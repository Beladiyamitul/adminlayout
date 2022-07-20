import React, { useEffect } from 'react';

function PromisesExample(props) {

    const one = () =>{
        return "One"
    }

    const two = () =>{
        return new Promise((resolve , reject) =>{
            setTimeout (() => {
                resolve("Two")
            },2000)
        })      
    }

    const three = () => {
        return "Three"
    }

    const All = async() =>{
        let o = one()
        console.log(o);

        let t =  await  two()
        console.log(t);

        let th = three()
        console.log(th);
    }


    useEffect(
        () => {
            All()
        },
    [])


    const display = (j) =>{
        console.log(j);
    }

   const sum = (display) =>{
    let x = 10;
    let y = 8;

    let j = x + y; 
    console.log(j);

    display(j)

   }

sum(display);

    return (
        <div>
            
        </div>
    );
}

export default PromisesExample;