import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment } from '../../Redux/Acton/Counter.action';


function Counter(props) {

    const dispatch = useDispatch()
    const store = useSelector(state => state.counter)

const handleincrement =() => {
    dispatch(increment())
}
const handledecremet =() => {
    dispatch(decrement())
}



    return (
        <div>
            <button onClick={()=> handleincrement()}>+</button>
            <p>{store.counter}</p>
            <button onClick={()=> handledecremet()}>-</button>
        </div>
    );
}

export default Counter;