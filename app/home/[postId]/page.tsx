"use client"
import Article from "@/Components/HomePageComponents/Article";
import axios from "axios";
// import GetPost from "@/Components/GetParams/GetPostId";
import { useEffect, useState } from "react";
import { PostInfo } from "@/app/Types/types";
import {usePathname} from "next/navigation";
export default function ArticlePage() {
  
    //const postId=GetPost();
  
    const [data,setdata]=useState<PostInfo|undefined>(undefined);
    const post = usePathname().split('home/')[1];
   
 
  
    useEffect(()=>{
        const fetchdata=async ()=>{
        const res= await axios.post("/api/post/getpost",{
            postId:post
        })
        const data:PostInfo=res.data.data;
        console.log(data)
        setdata(data);
        }
        fetchdata();
    },[])
    return (
     <div><Article postdata={post}/></div>
    );
  }
  