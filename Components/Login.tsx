"use client";

import React, { useState,FormEvent  } from "react";
import Image from "next/image";
import registerImage from "@/public/Images/RegisterImage.svg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-row-reverse gap-10 w-screen h-screen">
       <div className="w-1/2 relative bg-slate-100 rounded-2xl mx-10 my-10 py-10">
        <Image  src={registerImage} alt="register image" layout="fill" />
      </div>
      <div className="w-1/2 flex flex-col justify-center px-10">
        <div className="sm:w-96 mx-auto">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900">Welcome back</h2>
          <h5 className="text-md font-bold leading-9 tracking-tight text-gray-900">We missed you a lot!</h5>
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <label className="block text-md font-medium leading-6 text-gray-900">Email Address<span className="text-red-600">*</span></label>
              <div className="mt-2 ">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                  className="block w-full px-4 text-2xl h-10 rounded-md border-0 py-6  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-md font-medium leading-6 text-gray-900">Password<span className="text-red-600">*</span></label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="block w-full h-10 px-4 rounded-md  border-0 py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <span className="absolute h-10 py-6 top-0  flex items-center right-3 "><FaEye fontSize={20}/></span>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <p className="font-medium italic underline cursor-pointer">Forget Password?</p>
            </div>
            <div className="flex justify-center mt-10">
              <button type="submit" className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-yellow-200">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
