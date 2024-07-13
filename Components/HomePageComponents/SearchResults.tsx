'use client'
import { useSearchParams } from "next/navigation";
import ArticleSection from "./ArticlesSection";
import { useEffect,useState } from "react";
import axios from "axios";
export default function SearchComponent(){
    const params=useSearchParams();
    const [query,setQuery]=useState(params.get('query'))
    const [res,setRes]=useState([]);
    useEffect(()=>{
        const handleSearch=async ()=>{
            const data=await axios.post("/api/query/post",{
              query:query
            })
             setRes(data.data.data)
          }
          handleSearch();
    },[])
return (
<>
<div className="text-gray-400">Showing Search Results for <p className="text-gray-600">{query}</p> </div>
<ArticleSection dataset={res}/>
</>
)
}