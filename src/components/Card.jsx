import React from 'react'

function Card({data}) {
    console.log(data,"card page")
  return (
    <>
    {data.length>0?<div style={
        { "display":"flex",
        "flexDirection":"column",
        "justifyContent":"center",
        "alignContent":"center",
        "gap":"50px",}
    }>
      {data.map((post)=>
        <div key={post.id} style={{
            "width":"500px",
            "height":"250px",
            "padding":"20px",
            "display":"flex",
            "flexDirection":"column",
            "justifyContent":"center",
            "alignContent":"center",
            "margin":"auto",
            "backgroundColor":"lightblue",
            
        }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
      )}
    </div>: <div>
        <h1 
        style={{
            "textAlign":"center"
        }}>
            no data found
        </h1>
    </div> }
</>
  )
}

export default Card
