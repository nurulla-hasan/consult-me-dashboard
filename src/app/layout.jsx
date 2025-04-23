"use client";
import './globals.css';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi";
import { ImUserTie } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";


const menuItems = [
  { label: "Dashboard", href: "/", icon: <LuLayoutDashboard size={20}/> },
  { label: "User Management", href: "/users", icon: <HiOutlineUserCircle  size={20}/>  },
  { label: "Consult Management", href: "/consults", icon: <ImUserTie  size={20}/>  },
  { label: "Payment", href: "/payments", icon: <MdPayment  size={20}/>  },
  { label: "Category Management", href: "/categories", icon: <LuLayoutDashboard size={20}/>  },
];
const settingMenu = [
  { label: "Profile", href: "/profile" },
  { label: "Terms & Condition", href: "/terms" },
  { label: "About Us", href: "/about" },
];

export default function RootLayout({ children }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSettingsOpen(false);
  }, [pathname]);

  // Check if current route is any of the settings route
  const isSettingsRoute = settingMenu.some(item => item.href === pathname);

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="h-screen flex">
          {/* Sidebar */}
          <aside className="w-60 bg-[#FDFDF5] flex flex-col justify-between pb-10 shadow-[0px_3px_14px_1px_#d9e7ff]">
            <div>
              {/* Logo */}
              <div className="flex items-center justify-center">
                <Image src="/images/logo.png" width={130} height={60} alt="Logo" />
              </div>

              {/* Navigation */}
              <nav className="flex flex-col gap-1 text-[15px] font-medium px-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-4 py-3 rounded-sm transition-all duration-300 ${isActive
                        ? "bg-[#00A89D] text-white"
                        : "text-[#00A89D] hover:bg-[#00A89D] bg-[#FEFEFE] hover:text-white"
                        }`}
                    >
                      <span className='flex items-center gap-2'>
                        {item.icon}
                        {item.label}
                      </span>
                    </Link>
                  );
                })}

                {/* Settings dropdown */}
                <div>
                  <button
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className={`w-full cursor-pointer text-left px-4 py-2 rounded-sm text-[#00A89D] flex justify-between items-center transition-all duration-300 ${settingsOpen || isSettingsRoute ? "bg-[#058279] text-white" : "bg-[#FEFEFE]"}`}
                  >
                    <p className='flex items-center gap-2'>
                      <LuSettings size={20}/> 
                      <span>Settings</span>
                    </p>
                    <span>{settingsOpen ? "▾" : "▸"}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {settingsOpen && (
                      <motion.div
                        className="flex flex-col gap-1 text-[15px] font-medium mt-1 pr-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        {settingMenu.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              className={`px-4 py-2 rounded-sm transition-colors duration-200 ${isActive
                                ? "bg-[#058279] text-white"
                                : "text-[#00A89D] hover:bg-[#00A89D] bg-[#FEFEFE] hover:text-white"
                                }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </div>

            <Link href="#" className="text-[#00A89D] text-sm pl-4 hover:underline">
              Log out
            </Link>
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-auto bg-[#FEFFF9]">
            {/* Top bar */}
            <div className="flex justify-end items-center gap-4 bg-[#FDFDF5] h-24 pr-12">
              <button className="w-10 h-10 rounded-full bg-[#E6F8F7] flex items-center justify-center">
              <IoMdNotificationsOutline color='#00A89D' size={20}/>
              </button>
              <Image
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="User"
                className="rounded-full"
              />
              <span className="text-md font-medium text-gray-700">Leticia</span>
            </div>

            {/* Page content */}
            <div className="p-4 h-[calc(100vh-96px)] rounded-t bg-[#F8F8F8]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
