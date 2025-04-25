"use client";
import Card from "@/components/card/category-card/Card";
import CategoryModal from "@/components/modal/category-modal/CategoryModal";
import { dummyCategories } from "@/data/data";
import { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { HiOutlinePlusSm } from "react-icons/hi";



export default function CategoryManagement() {
    const [categories, setCategories] = useState(dummyCategories);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categoryIcon, setCategoryIcon] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    // Pagination states
    const [page, setPage] = useState(1);
    const categoriesPerPage = 18;
    const pageCount = Math.ceil(categories.length / categoriesPerPage);
    const paginatedCategories = categories.slice(
        (page - 1) * categoriesPerPage,
        page * categoriesPerPage
    );

    const handleAddNew = () => {
        setEditMode(false);
        setCategoryName("");
        setCategoryIcon(null);
        setIsModalOpen(true);
    };

    const handleEdit = (index) => {
        const globalIndex = (page - 1) * categoriesPerPage + index;
        setEditMode(true);
        setEditIndex(globalIndex);
        setCategoryName(categories[globalIndex].name);
        setCategoryIcon(categories[globalIndex].icon);
        setIsModalOpen(true);
    };

    const handleDelete = (index) => {
        const globalIndex = (page - 1) * categoriesPerPage + index;
        const updated = [...categories];
        updated.splice(globalIndex, 1);
        setCategories(updated);
    };

    const handleSubmit = () => {
        if (!categoryName || !categoryIcon) return;

        const newCategory = { name: categoryName, icon: categoryIcon };

        if (editMode) {
            const updated = [...categories];
            updated[editIndex] = newCategory;
            setCategories(updated);
        } else {
            setCategories([...categories, newCategory]);
        }

        setIsModalOpen(false);
    };

    const handleIconUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCategoryIcon(URL.createObjectURL(file));
        }
    };

    const renderPagination = () => {
        const pages = [];
        const range = 2;

        for (
            let i = Math.max(page - range, 1);
            i <= Math.min(page + range, pageCount);
            i++
        ) {
            pages.push(i);
        }

        const showEllipsisBefore = pages[0] > 2;
        const showEllipsisAfter = pages[pages.length - 1] < pageCount - 1;

        return (
            <div className="flex items-center justify-center gap-2 mt-6">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="disabled:text-gray-400 cursor-pointer text-sm"
                >
                    &lt; Prev
                </button>

                {showEllipsisBefore && (
                    <>
                        <button
                            onClick={() => setPage(1)}
                            className="w-6 h-6 rounded-full text-center text-sm cursor-pointer"
                        >
                            1
                        </button>
                        <span>...</span>
                    </>
                )}

                {pages.map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-6 h-6 rounded-full text-center text-sm cursor-pointer ${p === page
                            ? "bg-teal-600 text-white"
                            : ""
                            }`}
                    >
                        {p}
                    </button>
                ))}

                {showEllipsisAfter && (
                    <>
                        <span>...</span>
                        <button
                            onClick={() => setPage(pageCount)}
                            className="w-7 h-7 rounded-full text-center text-sm cursor-pointer"
                        >
                            {pageCount}
                        </button>
                    </>
                )}

                <button
                    disabled={page === pageCount}
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 text-sm disabled:opacity-50 cursor-pointer"
                >
                    Next &gt;
                </button>
            </div>
        );
    };

    return (
        <div className="space-y-4 p-5 h-[calc(100vh-96px)] overflow-auto  scrl-hide text-[#333333]">
            <div className="flex justify-between bg-[#f8f8f8]">
                <h1 className="text-xl font-medium text-[#333333]">
                    Category Management
                </h1>
                <button
                    className="bg-teal-500 text-white px-4 py-2 rounded flex items-center gap-1 cursor-pointer"
                    onClick={handleAddNew}
                >
                    <HiOutlinePlusSm size={20} color="#ffffff" />
                    Add Category
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {paginatedCategories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded shadow text-center"
                    >
                        <Card
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            cat={cat} idx={idx} />
                    </div>
                ))}
            </div>

            {/* Pagination UI */}
            {renderPagination()}

            <CategoryModal
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                setCategoryName={setCategoryName}
                editMode={editMode}
                categoryName={categoryName}
                handleIconUpload={handleIconUpload}
                handleSubmit={handleSubmit}
                />
        </div>
    );
}
