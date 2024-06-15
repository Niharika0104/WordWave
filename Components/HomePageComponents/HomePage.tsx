"use client"

import Navbar from "./Navbar"
import TopicsScrollBar from '@/Components/HomePageComponents/TopicsScrollBar'
import StaffPick from '@/Components/HomePageComponents/StaffPick'
import Recommendation from '@/Components/HomePageComponents/Recommendation'
import WhoToFollow from '@/Components/HomePageComponents/WhoToFollow'
import Footer from '@/Components/HomePageComponents/Footer'
import Article from "./Article"



export default function HomePage(){
return (
    <>
    <div className="flex w-full ">
        <div className=" w-[60%] border border-gray-100">
            <div className=" w-4/5 mx-auto">
                <TopicsScrollBar/>
                <Article/>
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