"use client";
import { users as seed } from "@/data/data";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdBlockFlipped } from "react-icons/md";

/* ----- attach blocked = false to each user once ----- */
const initialUsers = seed.map((u) => ({ ...u, blocked: false }));

export default function Users() {
  const pageSize = 9;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(initialUsers);

  /* block / unblock toggle */
  const handleBlock = (id) =>
    setData((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, blocked: !u.blocked } : u
      )
    );

  /* filter + paginate */
  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );
  const pageCount = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6 text-black">
      {/* header + search */}
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">User Management</h1>
        <div className="relative w-72">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            placeholder="Search here..."
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-[#00A89D] focus:outline-none"
          />
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto h-[72vh] scrl-hide rounded-md border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-[#00A89D] text-white sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left">#SI</th>
              <th className="px-4 py-3 text-left">User Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Contact Number</th>
              <th className="px-4 py-3 text-left">Location</th>
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
                <td className="px-4 py-3 flex justify-center">
                  <button
                    onClick={() => handleBlock(u.id)}
                    className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${
                      u.blocked
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    } text-white`}
                    title={u.blocked ? "Unblock" : "Block"}
                  >
                    <MdBlockFlipped size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination (unchanged) */}
      <div className="flex justify-evenly items-center text-sm">
        <span className="text-[#00A89D]">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}
        </span>

        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="disabled:text-gray-400 cursor-pointer"
          >
            &lt; Previous
          </button>

          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-6 h-6 rounded-full text-center cursor-pointer ${
                i + 1 === page ? "bg-teal-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === pageCount}
            onClick={() => setPage((p) => p + 1)}
            className="disabled:text-gray-400 cursor-pointer"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
