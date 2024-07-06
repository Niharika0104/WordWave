import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import { Poppins } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Navbar from "@/Components/HomePageComponents/Navbar";

// const inter = Inter({ subsets: ["Poppins"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en">
      <body >
      <ToastContainer 
        position="top-center" 
        autoClose={5000} 
        className={"rounded-full h-10"}
      
        newestOnTop 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    
        {children}</body>
    </html>
  );
}
