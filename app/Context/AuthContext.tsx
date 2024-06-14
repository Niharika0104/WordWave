"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
interface AuthContextType {
    user: any;
    setUserFnc: (obj:any)=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [user, setUser] = useState<any>(null);
    const setUserFnc=(obj:any)=>{
        console.log("users beingset")
        setUser("2")
    }
    const cookies = new Cookies();
    console.log(cookies,"cookies")
    console.log(user)
    useEffect(() => {
      const fetchtoken=async ()=>{  try {
        console.log("called now")
            const response = await axios.get("/api/auth/token");
            setUser(response.data.user);
          } catch (error) {
            setUser(null);
          } 
        }
        fetchtoken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUserFnc }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
