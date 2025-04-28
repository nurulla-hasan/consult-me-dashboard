"use client";
import PageContainer from '@/components/container/PageContainer';
import { user } from '@/data/data';
import { FiCamera } from "react-icons/fi";
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [previewImage, setPreviewImage] = useState("/images/avatar.png");
    const fileInputRef = useRef(null);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            contact: user?.contact || '',
            address: user?.address || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    });

    const onSubmitProfile = (data) => {
        console.log('Profile Updated:', data);
    };

    const onSubmitPassword = (data) => {
        console.log('Password Changed:', data);
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
        }
    };

    return (
        <PageContainer>
            <h1 className='text-xl font-medium'>Profile</h1>
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
                {/* Avatar */}
                <div className=' flex flex-col justify-center items-center gap-3 mb-6'>
                    <div className='relative'>
                        <Image
                            src={previewImage}
                            width={100}
                            height={100}
                            alt="Profile Picture"
                            className='rounded-full object-cover'
                        />

                        {/* Camera Button */}
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className='absolute flex justify-center items-center p-1.5 w-8 h-8 border-2 border-white bg-teal-600 rounded-full top-16 -right-2 cursor-pointer'
                        >
                            <FiCamera size={22} color='#fff' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-medium'>{user?.name}</h1>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />


                </div>

                {/* Tabs */}
                <div className="flex gap-6 mb-6">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`pb-2 border-b-2 cursor-pointer ${activeTab === 'profile'
                            ? 'border-teal-500 text-teal-500 font-semibold'
                            : 'border-transparent text-gray-600'
                            }`}
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('password')}
                        className={`pb-2 border-b-2 cursor-pointer ${activeTab === 'password'
                            ? 'border-teal-500 text-teal-500 font-semibold'
                            : 'border-transparent text-gray-600'
                            }`}
                    >
                        Change Password
                    </button>
                </div>

                {/* Forms */}
                <div className="w-full max-w-md rounded-lg">
                    {activeTab === 'profile' && (
                        <form onSubmit={handleSubmit(onSubmitProfile)} className="space-y-4">
                            <h3 className='text-xl font-medium text-center'>
                                Edit Your Profile
                            </h3>

                            <div>
                                <label className="block mb-1 font-medium">User Name</label>
                                <input
                                    type="text"
                                    {...register('name')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register('email')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Contact No</label>
                                <input
                                    type="text"
                                    {...register('contact')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Address</label>
                                <input
                                    type="text"
                                    {...register('address')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div className='w-full text-center'>
                                <button type="submit" className="mt-4 px-8 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md cursor-pointer">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    )}

                    {activeTab === 'password' && (
                        <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4">
                            <h3 className='text-2xl font-medium text-center'>
                                Change Password
                            </h3>

                            <div>
                                <label className="block mb-1 font-medium">Current Password</label>
                                <input
                                    type="password"
                                    {...register('currentPassword')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">New Password</label>
                                <input
                                    type="password"
                                    {...register('newPassword')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Confirm New Password</label>
                                <input
                                    type="password"
                                    {...register('confirmPassword')}
                                    className="w-full border border-teal-400 rounded-md p-2 outline-none"
                                />
                            </div>

                            <div className='w-full text-center'>
                                <button type="submit" className="mt-4 px-8 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md cursor-pointer">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;
