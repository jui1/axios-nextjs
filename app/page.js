'use client'

import Image from "next/image";
import { useState , useEffect } from "react";
import axios from "axios";


export default function Home() {

  const [posts , setPost] = useState([])

  const getPosts = async()=>{

    let data = await axios.get("http://jsonplaceholder.typicode.com/posts")
     setPost(data.data)
  }

  useEffect(() =>{
  
    getPosts()

  
  },[])


 
 
  return (
   <div>
    <ul>
      { posts && posts.map((data , index) =>{
      return    <li key={index}>{data.title}</li>
      })}
    </ul>
   </div>
  );
}
