import React from 'react';

const ConsultTable = ({paged, handleModalOpen}) => {
    return (
        <>
            <table className="min-w-full text-sm">
                <thead className="bg-[#00A89D] text-white sticky top-0">
                    <tr>
                        <th className="px-4 py-3 text-left">#SI</th>
                        <th className="px-4 py-3 text-left">User Name</th>
                        <th className="px-4 py-3 text-left">Service Name</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Contact Number</th>
                        <th className="px-4 py-3 text-left">Location</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged?.map((u) => (
                        <tr key={u.id} className={`odd:bg-gray-50`}>
                            <td className="px-4 py-3">{u.id}</td>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <img src={u.avatar} alt="" className="w-9 h-9 rounded-full" />
                                {u.name}
                            </td>
                            <td className="px-4 py-3">{u.service}</td>
                            <td className="px-4 py-3">{u.email}</td>
                            <td className="px-4 py-3">{u.phone}</td>
                            <td className="px-4 py-3">{u.location}</td>
                            <td className="px-4 py-3 flex justify-center">
                                <button
                                disabled={u.blocked}
                                    onClick={() => handleModalOpen(u)}
                                    className={`w-22 py-2 flex items-center justify-center rounded cursor-pointer ${u.blocked
                                        ? "bg-green-600 hover:bg-green-700 disabled:cursor-not-allowed"
                                        : "bg-red-600 hover:bg-red-700"
                                        } text-white`}
                                >
                                    {!u.blocked ? "Unverified" : "Verified"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ConsultTable;