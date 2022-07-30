import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Search from './components/Search'
import Card from './components/Card'

function App() {
  var [data,setData]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((resp)=>{
      // console.log(resp)
    setData(resp)
      // console.log(data,"data",resp,"resp")
    })
  }, [])
  const handleClick=(search)=>{
    console.log("helo")
   let filtered_data=data.filter((post)=>post.title.includes(search.toLowerCase(search)));
    setData(filtered_data)
    // setSearch('')
}
    return (
    <div style={{
      "backgroundColor":"lightcoral"
    }}>
      <Search data={data} handleClick={handleClick}/>
      <Card data={data}/>
    </div>
  )
}

export default App
