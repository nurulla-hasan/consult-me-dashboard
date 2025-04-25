"use client";
import ConsultantModal from "@/components/modal/consultant-modal/ConsultantModal";
import ConsultTable from "@/components/table/consult-table/ConsultTable";
import { consult } from "@/data/data";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

/* ----- attach blocked = false to each user once ----- */
const initialUsers = consult.map((u) => ({ ...u, blocked: false }));

export default function Consults() {
  const pageSize = 8;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null); // For storing selected user data
  const [showModal, setShowModal] = useState(false); // For controlling modal visibility

  ///get data

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleAccept = () => {
    setData((prev) =>
      prev.map((u) =>
        u.id === selectedUser.id ? { ...u, blocked: true } : u
      )
    );
    setShowModal(false); // Close the modal after accepting
  };

  const handleReject = () => {
    setShowModal(false); // Close the modal without making changes
  };


  /* filter + paginate */
  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );
  const pageCount = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const renderPagination = () => {
    const pages = [];
    const range = 2; // Number of pages to show around the current page

    // Handle pages before and after the current page
    for (let i = Math.max(page - range, 1); i <= Math.min(page + range, pageCount); i++) {
      pages.push(i);
    }

    // Show ellipses if there are gaps in pages
    const showEllipsisBefore = pages[0] > 2;
    const showEllipsisAfter = pages[pages.length - 1] < pageCount - 1;

    return (
      <>
        {/* Previous Page Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="disabled:text-gray-400 cursor-pointer"
        >
          &lt; Previous
        </button>

        {/* Ellipsis and First Page */}
        {showEllipsisBefore && <span className="px-2">...</span>}
        {showEllipsisBefore && (
          <button
            onClick={() => setPage(1)}
            className="w-6 h-6 rounded-full text-center cursor-pointer"
          >
            1
          </button>
        )}

        {/* Page Numbers */}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-6 h-6 rounded-full text-center cursor-pointer ${p === page ? "bg-teal-600 text-white" : ""
              }`}
          >
            {p}
          </button>
        ))}

        {/* Ellipsis and Last Page */}
        {showEllipsisAfter && <span className="px-2">...</span>}
        {showEllipsisAfter && (
          <button
            onClick={() => setPage(pageCount)}
            className="w-6 h-6 rounded-full text-center cursor-pointer"
          >
            {pageCount}
          </button>
        )}

        {/* Next Page Button */}
        <button
          disabled={page === pageCount}
          onClick={() => setPage(page + 1)}
          className="disabled:text-gray-400 cursor-pointer"
        >
          Next &gt;
        </button>
      </>
    );
  };

  return (
    <div className="space-y-4 text-black p-5 h-[calc(100vh-96px)]">
      {/* header + search */}
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">Consultant Management</h1>
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
      <div className="overflow-x-auto h-[74vh] scrl-hide rounded-md border border-gray-200">
        <ConsultTable paged={paged} handleModalOpen={handleModalOpen} />
      </div>

      {/* Modal */}
      <ConsultantModal showModal={showModal} selectedUser={selectedUser} handleReject={handleReject} handleAccept={handleAccept}/>

      {/* pagination */}
      <div className="flex justify-evenly items-center text-sm">
        <span className="text-[#00A89D]">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}
        </span>
        <div className="flex items-center gap-2">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
}
