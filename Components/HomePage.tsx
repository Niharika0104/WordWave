"use client"

import Navbar from "./Navbar"
import TopicsScrollBar from '@/Components/TopicsScrollBar'
export default function HomePage(){
return (
    <>
    <div className="flex w-full">
        <div className=" w-[60%] border border-gray-100">
            <div>
                <TopicsScrollBar/>
            </div>
        </div>
        <div className=" w-[40%] border border-gray-100">dfd</div>
    </div>
    </>
)
}