import React, { useEffect, useState } from 'react';

function ListCallBack({getNumber}) {

const [item , setItem] = useState([])

useEffect(
    () => {
        setItem(getNumber(5))

    },
[getNumber])

    return (
        <div>
            {
                item.map((i) =>{
                    return(
                        <p>{i}</p>
                    )
                })
            }
        </div>
    );
}

export default ListCallBack;