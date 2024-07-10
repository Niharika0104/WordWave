"use client"
import Article from "@/Components/HomePageComponents/Article";
import axios from "axios";
import GetPost from "@/Components/GetParams/GetPostId";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  
    const postId=GetPost();

    const [data,setdata]=useState({});
    useEffect(()=>{
        async ()=>{
        const res= await axios.post("/api/getpost",{
            postId:postId
        })
        const data=res.data.data;
        setdata(data);
        }
    },[])
    return (
     <div><Article postdata={data}/></div>
    );
  }
  