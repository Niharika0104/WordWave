"use client"

import Navbar from "./Navbar"
import TopicsScrollBar from '@/Components/TopicsScrollBar'
import StaffPick from '@/Components/StaffPick'
import Recommendation from '@/Components/Recommendation'
import WhoToFollow from '@/Components/WhoToFollow'
import Footer from '@/Components/Footer'



export default function HomePage(){
return (
    <>
    <div className="flex w-full ">
        <div className=" w-[60%] border border-gray-100">
            <div>
                <TopicsScrollBar/>
            </div>
        </div>
        <div className=" w-[40%] border border-gray-100 ">
            <div className="w-3/5 flex flex-col gap-10 mt-10">
        <StaffPick/>
        <Recommendation/>
        <WhoToFollow/>
        <Footer/>
        </div>
        </div>
    </div>
    </>
)
}