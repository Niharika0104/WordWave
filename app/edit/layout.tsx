import type { Metadata } from "next";
import { AuthProvider } from "../Context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <AuthProvider>
         
          {children}
        
        </AuthProvider>
    
  );
}
