"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
    address: string | null;
    name: string;
    city: string;
    education: string;
    setAddress: (address: string | null) => void;
    setName: (name: string) => void;
    setCity: (city: string) => void;
    setEducation: (education: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [address, setAddress] = useState<string | null>(null);
    const [name, setName] = useState<string>('Please enter your name');
    const [city, setCity] = useState<string>('Please enter your city');
    const [education, setEducation] = useState<string>('Please enter your education');

    return (
        <UserContext.Provider value={{ address, name, city, education, setAddress, setName, setCity, setEducation }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
