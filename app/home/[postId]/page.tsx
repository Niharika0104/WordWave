'use client'
import Article from "@/Components/HomePageComponents/Article";
import { usePathname } from "next/navigation";
import ArticleFooter from "@/Components/HomePageComponents/ArticleFooter"
export default function ArticlePage() {
  const router =usePathname();
  const postid=router.split('home/')[1];
    
    return (
     <div><Article postId={postid}/>
      <ArticleFooter/>
     </div>
    );
  }
  