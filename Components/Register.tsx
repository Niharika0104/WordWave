"use client";

import React, { useState,FormEvent } from "react";
import Image from "next/image";
import registerImage from "@/public/Images/RegisterImage.svg";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="flex gap-10 w-screen h-screen">
      <div className="w-1/2 relative bg-slate-100 rounded-2xl mx-10 my-10 py-10">
        <Image  src={registerImage} alt="register image" layout="fill" />
      </div>
      <div className="w-1/2 flex flex-col justify-center px-10">
        <div className="w-96 mx-auto">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="block w-full px-4 text-2xl h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="block w-full px-4 text-2xl h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full h-10 px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="block w-full h-10 px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button type="submit" className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-yellow-200">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
