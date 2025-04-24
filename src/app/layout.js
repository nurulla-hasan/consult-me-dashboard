"use client";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi";
import { ImUserTie } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";

const menuItems = [
  { label: "Dashboard", href: "/", icon: <LuLayoutDashboard size={20} /> },
  { label: "User Management", href: "/users", icon: <HiOutlineUserCircle size={20} /> },
  { label: "Consult Management", href: "/consults", icon: <ImUserTie size={20} /> },
  { label: "Payment", href: "/payments", icon: <MdPayment size={20} /> },
  { label: "Category Management", href: "/categories", icon: <BiCategoryAlt size={20} /> },
];
const settingMenu = [
  { label: "Profile", href: "/profile" },
  { label: "Terms & Condition", href: "/terms" },
  { label: "About Us", href: "/about" },
];

export default function RootLayout({ children }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();


  const isSettingsRoute = settingMenu.some((item) => item.href === pathname);

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
                {menuItems.map(({ label, href, icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      className={`px-4 py-3 rounded-sm transition-all duration-300 ${isActive
                          ? "bg-[#00A89D] text-white"
                          : "text-[#00A89D] hover:bg-[#00A89D] bg-[#FEFEFE] hover:text-white"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        {icon}
                        {label}
                      </span>
                    </Link>
                  );
                })}

                {/* Settings dropdown */}
                <div>
                  <button
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className={`w-full cursor-pointer text-left px-4 py-3 rounded-sm flex justify-between items-center transition-all duration-300 ${settingsOpen || isSettingsRoute
                        ? "bg-[#00A89D] text-white"
                        : "bg-[#FEFEFE] text-[#00A89D]"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      <LuSettings size={20} />
                      Settings
                    </span>
                    {settingsOpen ? (
                      <IoIosArrowDown size={15} />
                    ) : (
                      <IoIosArrowForward size={15} />
                    )}
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
                        {settingMenu.map(({ label, href }) => {
                          const active = pathname === href;
                          return (
                            <Link
                              key={label}
                              href={href}
                              className={`px-4 py-2 rounded-sm transition-colors duration-200 ${active
                                  ? "bg-[#058279] text-white"
                                  : "text-[#00A89D] hover:bg-[#058279] bg-[#FEFEFE] hover:text-white"
                                }`}
                            >
                              {label}
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
                <IoMdNotificationsOutline color="#00A89D" size={20} />
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
            <div className="p-4 h-[calc(100vh-96px)] rounded-t bg-[#FDFDF5]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}