"use client"
import Image from "next/image";
import staffimage1 from "@/public/Images/staffimage1.png";
import { PiHandsClappingFill } from "react-icons/pi";
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
export default function Article(){
    return (
        <div className="flex flex-col gap-5 mx-6">
           <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 bg-green-50 w-full">
          <div className="flex gap-2 items-center">
          <Image src={staffimage1} alt={"staff icons"} className='h-6 w-6 rounded-full'/>
            <p>author title</p>   
            </div>  
            <div>
                <div className="text-xl font-bold">Hello how are you doing</div>
                <div>WElcome its an amazing space.</div>
            </div>
            <div className="flex w-full  bg-red-50 justify-between px-10">
                <div className="flex gap-3 items-center">
               <div className="text-[20px]">Sep 5 2023</div>
               <div><PiHandsClappingFill fontSize={22}/></div>
                <div><LiaCommentSolid fontSize={22}/></div>
                </div>
                <div className="flex gap-3 items-center">
                <div><MdOutlineBookmarkAdd fontSize={22}/></div>
                <div><FiMoreHorizontal fontSize={22}/></div>
                </div>
               
            </div>
        </div>
        <Image src={staffimage1} alt="staff image" className="h-40 w-auto"/>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
          <Image src={staffimage1} alt={"staff icons"} className='h-6 w-6 rounded-full'/>
            <p>author title</p>   
            </div>  
            <div>
                <div className="text-xl font-bold">Hello how are you doing</div>
                <div>WElcome its an amazing space.</div>
            </div>
            <div className="flex w-full gap-10">
                <div className="flex gap-3 items-center">
               <div>Sep 5 2023</div>
               <div><PiHandsClappingFill/></div>
                <div><LiaCommentSolid/></div>
                </div>
                <div className="flex gap-3 items-center">
                <div><MdOutlineBookmarkAdd/></div>
                <div><FiMoreHorizontal/></div>
                </div>
               
            </div>
        </div>
        </div>
    )
}