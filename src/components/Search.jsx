import React from 'react'
import {useState} from 'react'
function Search({data,handleClick}) {
    const [search,setSearch]=useState("")

    
  return (
    <div style={{
        
        "display":"flex",
            "justifyContent":"center",
            "alignContent":"center",
            "top":20,
            "marginBottom":"20px"
    }}>
        <input type="text" placeholder='type of search' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>{handleClick(search);setSearch("")}}>Search</button>
    </div>
  )
}

export default Search