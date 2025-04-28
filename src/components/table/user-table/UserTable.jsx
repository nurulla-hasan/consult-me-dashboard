import { MdBlockFlipped } from "react-icons/md";

const UserTable = ({ paged, handleBlock }) => {
    return (
        <>
            <table className="min-w-full text-sm ">
                <thead className="bg-[#00A89D] text-white sticky top-0">
                    <tr>
                        <th className="px-4 py-3 text-left">#SI</th>
                        <th className="px-4 py-3 text-left">User Name</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Contact Number</th>
                        <th className="px-4 py-3 text-left">Location</th>
                        {/* <th className="px-4 py-3 text-left">Status</th> */}
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((u) => (
                        <tr
                            key={u.id}
                            className={`odd:bg-gray-50`}>
                            <td className="px-4 py-3">{u.id}</td>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <img src={u.avatar} alt="" className="w-9 h-9 rounded-full" />
                                {u.name}
                            </td>
                            <td className="px-4 py-3">{u.email}</td>
                            <td className="px-4 py-3">{u.phone}</td>
                            <td className="px-4 py-3">{u.location}</td>
                            {/* <td className={`px-4 py-3`}>{u.blocked
                                ? <span className="bg-red-500 text-white text-sm font-medium py-1 px-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Blocked</span>
                                : <span className="bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Unblocked</span>}
                            </td> */}
                            <td className="px-4 py-3 flex justify-center">
                                <button
                                    onClick={() => handleBlock(u.id)}
                                    className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${u.blocked
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "bg-green-600 hover:bg-green-700"
                                        } text-white`}
                                >
                                    <MdBlockFlipped size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;