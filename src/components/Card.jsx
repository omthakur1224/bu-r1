import React from 'react'

function Card({data}) {
    console.log(data,"card page")
  return (
    <div>
      {data.map((post)=>
        <div key={post.id} style={{
            "width":"500px",
            "display":"flex",
            "flexDirection":"column",
            "justifyContent":"center",
            "alignContent":"center",
            "margin":"auto"
            
        }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export default Card
