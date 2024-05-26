"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProfileEditForm from '@/components/userProfile/ProfileEditForm';
import { useUser } from '@/components/UserContext';

const ProfilePage = () => {
    const { address } = useUser();
    console.log('Address[PROFILE page]:', address);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600">LinkedIn Clone</div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded-full px-4 py-2 w-1/2"
                    />
                    <nav className="space-x-4">
                        <Link href="/">Home</Link>
                        <Link href="/">Network</Link>
                        <Link href="/">Jobs</Link>
                        <Link href="/">Messaging</Link>
                        <Link href="/">Notifications</Link>
                        <Link href="/">Me</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto p-4">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div className="bg-white p-6 shadow rounded-lg">
                            <div className="flex items-center">
                                <div className="w-24 h-24 relative">
                                    <Image
                                        src="/profile-placeholder.png"
                                        alt="Profile Picture"
                                        layout="fill"
                                        className="rounded-full"
                                    />
                                </div>
                                <ProfileEditForm />

                            </div>
                            <div>
                                <span className="font-semibold">Address:</span> {address}
                            </div>
                            <div className="mt-4">
                                <h2 className="font-semibold text-lg">Interests</h2>
                                <button className="px-4 py-2 border border-gray-300 rounded-full mt-2">Add Section</button>
                            </div>
                            <div className="mt-4">
                                <h2 className="font-semibold text-lg">Contact Info</h2>
                                <p className="mt-2">7 Contacts</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 shadow rounded-lg mt-4">
                            <h2 className="font-semibold text-lg">Recomendations</h2>
                            <div className="mt-2">
                                <p>We recommend you to...</p>
                                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full">Start</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <div className="bg-white p-6 shadow rounded-lg">
                            <h2 className="font-semibold text-lg">Profile Settings</h2>
                            <div className="mt-2">
                                <p>Profile Language: English</p>
                                <p>Public Profile URL: <Link href="/">linkedin.com/in/yernazar-yakupov</Link></p>
                            </div>
                        </div>

                        <div className="bg-white p-6 shadow rounded-lg mt-4">
                            <h2 className="font-semibold text-lg">People You May Know</h2>
                            <div className="mt-2">
                                <div className="flex items-center mb-2">
                                    <Image
                                        src="/profile-placeholder.png"
                                        alt="Profile Picture"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-2">
                                        <p>Anelya Begimbetova</p>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Connect</button>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <Image
                                        src="/profile-placeholder.png"
                                        alt="Profile Picture"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-2">
                                        <p>Sabina Yegemberdiyeva</p>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Connect</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
