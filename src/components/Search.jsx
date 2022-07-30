import React from 'react'
import {useState} from 'react'
function Search({data,handleClick}) {
    const [search,setSearch]=useState("")

    
  return (
    <div style={{
        // "margin":"auto",
        "display":"flex",
        // "flexDirection":"column",
        
            "justifyContent":"center",
            "alignContent":"center",
            "marginTop":"20px"
    }}>
        <input type="text" placeholder='type of search' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>{handleClick(search);setSearch('')}}>Search</button>
    </div>
  )
}

export default Search