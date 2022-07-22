import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import ListCallBack from './ListCallBack';


function UseCallBack(props) {

    const [dark , setDark] =useState(false)
    const [inputnum , setInputnum] = useState([])

    const theme ={
        backgroundColor : dark ? '#fff' : '#000',
        color : dark ? '#000' : '#fff'
    }

   const getNumber = useCallback (
    (i) =>{
      return [i+inputnum , i+inputnum+1 , i+inputnum+2]
    }, 
  [inputnum])

    return (
        <div style={theme}>
            <button onClick={() => setDark(!dark)}>change Theme</button>
            <TextField type="text" placeholder='Enter Number' onChange={(e) => {setInputnum(parseInt(e.target.value))}}/>

            <ListCallBack getNumber={getNumber}/>
        </div>
    );
}

export default UseCallBack;