"use client";
import React, { useState, useEffect } from 'react';
import { useUser } from '@/components/UserContext';
import { initializeUser, getUserData } from '../lib/solana';

const ProfileEditForm = () => {
    const { address, name, city, education, setName, setCity, setEducation } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newCity, setNewCity] = useState(city);
    const [newEducation, setNewEducation] = useState(education);

    useEffect(() => {
        if (address) {
            (async () => {
                const userData = await getUserData(new PublicKey(address));
                setName(userData.name);
                setCity(userData.city);
                setEducation(userData.education);
            })();
        }
    }, [address, setName, setCity, setEducation]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        await initializeUser(newName, newCity, newEducation);
        setName(newName);
        setCity(newCity);
        setEducation(newEducation);
        setIsEditing(false);
    };

    return (
        <div className="ml-4">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="text-xl font-bold"
                    />
                    <input
                        type="text"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        className="block text-gray-700"
                    />
                    <input
                        type="text"
                        value={newEducation}
                        onChange={(e) => setNewEducation(e.target.value)}
                        className="block text-gray-700"
                    />
                    <button onClick={handleSaveClick} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full">
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p>{city}</p>
                    <p>{education}</p>
                    <button onClick={handleEditClick} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full">
                        Edit
                    </button>
                </>
            )}
        </div>
    );
};

export default ProfileEditForm;
