import Image from 'next/image';
import React, { use } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Topbar = ({ isHideLayout }) => {

    const user = useSelector(state => state.auth.user)

    return (
        <>
            <div className={`${isHideLayout ? "hidden" : ""} sticky top-0 flex justify-end items-center gap-4 bg-[#FDFDF5] h-24 pr-12`}>
                <button className="w-10 h-10 rounded-full bg-[#E6F8F7] flex items-center justify-center cursor-pointer">
                    <IoMdNotificationsOutline color='#00A89D' size={20} />
                </button>
                <Image
                    src="/images/avatar.png"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full cursor-pointer"
                />
                <span className="text-md font-medium text-gray-700">{user?.name || "Golap Hasan"}</span>
            </div>
        </>
    );
};

export default Topbar;