import React, { useRef, useState, useEffect} from 'react'

const UseRef = () => {
    const [name,setName] = useState('');
    //const renderCount=useRef(0);
    const prevName=useRef('');
    
    useEffect(()=>{
        prevName.current = name;
    },[name]);

    return (
        <>
        <input value={name} onChange={e=> setName(e.target.value)} />
        <div>My name is {name} and it used to be {prevName.current}</div>
        </>
    )

//     useEffect(()=>{
//         renderCount.current = renderCount.current+1;
//     })

//   return (
//     <div>
//       <input value={name} onChange={e=>setName(e.target.value)} />
//       <div>My Name is {name}</div>
//       <div> Rendered {renderCount.current} times.</div>
//     </div>
use
}

export default UseRef
