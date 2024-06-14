// AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface AuthContextType {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const decodedToken = jwt.verify(token,process.env.SECRET_KEY||"");
            setUser(decodedToken);
        }
    }, []);

    return (
      
        <AuthContext.Provider value={{ user, setUser }}>
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
