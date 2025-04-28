"use client";
import PageContainer from "@/components/container/PageContainer";
import Pagination from "@/components/pagination/Pagination";
import UserTable from "@/components/table/user-table/UserTable";
import { users as seed } from "@/data/data";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";


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

    <PageContainer>
      {/* header + search */}
      <div className="flex justify-between ">
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
      <div className="overflow-auto h-[74vh] scrl-hide rounded-md border border-gray-200">
        <UserTable paged={paged} handleBlock={handleBlock}/>
      </div>

      {/* pagination (unchanged) */}
      <div className="flex justify-evenly items-center text-sm">
        <span className="text-[#00A89D]">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}
        </span>

        <div className="flex items-center gap-2">
          <Pagination page={page} setPage={setPage} pageCount={pageCount}/>
        </div>

      </div>
    </PageContainer>
  );
}
