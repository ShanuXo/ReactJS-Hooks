import { useEffect, useState } from 'react'
import WindowWidth from './WindowWidth';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import useContext from './useContext';
const App = () => {
  const[resourceType,setResourceType] = useState('posts');
  const[items,setItem] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(res => res.json())
    .then(json => setItem(json))
  },[resourceType])

  return (
    <>
      <div>
      <UseMemo />
      <WindowWidth />
      <UseRef />
      <useContext />
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App
