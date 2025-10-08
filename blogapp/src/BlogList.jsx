import React, { useEffect, useState } from 'react'

function BlogList() {

    const [Blog,setBlog]=useState([]);

    const[searchTerm,setSearchTerm]=useState("")
    async function fetchData(){
        let response=await fetch('https://dummyjson.com/posts')
        let result=await response.json();
        setBlog(result.posts);
    }


    useEffect(()=>{
        fetchData()
    },[]);


    const filterBlogs=Blog.filter((Blog)=> 
    Blog.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
);
  return (
   <>
    <h1>Blogs</h1>
    <input type='text' placeholder='Seach Blog By title' value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    style={{padding: "10px",
          marginBottom: "20px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",}}/>




   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
     {filterBlogs.length > 0 ? (
          filterBlogs.map((posts) => (
            <div
              key={posts.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              <h3>User ID: {posts.userId}</h3>
              <h3>{posts.title}</h3>
              <p>{posts.body}</p>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
   </>
  )
}

export default BlogList
