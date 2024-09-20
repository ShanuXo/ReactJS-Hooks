import { React, useEffect, useMemo, useState } from 'react'

function slowFunction(num){
    for(let i=0;i<100000000;i++) {}
    return num*2;
}
const UseMemo = () => {
    const[number ,setNumber] = useState(0);
    const[dark,setDark] = useState(false);
    const doubleNumber = useMemo(()=> {
        return slowFunction(number)
    },[number])

    const themeStyles = useMemo(()=> {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color : dark ? 'white' : 'black',
        }
    },[dark])

    useEffect(()=> {
        console.log('Theme Changed')
    },[themeStyles])

  return (
    <>
    <div>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => ! prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </div>
    </>
  )
}

export default UseMemo
