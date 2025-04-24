"use client"
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body >
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="bg-[#E6F8F7]">
                    {children}
                </div>
            </body>
        </html>
    );
}