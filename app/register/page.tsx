"use client";

import Image from "next/image";
import RegisterImage from "@/public/Images/RegisterImage.svg"

export default function Register() {
  return (
    <>
      <div className="flex  flex-row-reverse gap-10 w-screen h-screen">
        <div className="w-1/2 relative py-10 bg-slate-200 my-10 mx-10 rounded-2xl flex justify-center">
          <Image src={RegisterImage} alt="register image"/>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-10">
          <div className="w-96 mx-auto">
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <div className="mt-2">
                <input id="fullname" name="fullname" type="text" className="block w-full px-4 text-2xl h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
              <div className="mt-2">
                <input id="email" name="email" type="text" className="block w-full px-4 text-2xl h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
                <input id="password" name="password" type="password" required className="block w-full h-10 px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <input id="confirm-password" name="confirm-password" type="password" required className="block w-full h-10 px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="flex mt-6 justify-end">Already have an account? <p className="font-medium italic underline cursor-pointer text-gray-900">Register here</p></div>

            <div className="flex justify-center mt-10">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-yellow-200">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
