"use client";
import Card from "@/components/card/category-card/Card";
import PageContainer from "@/components/container/PageContainer";
import CategoryModal from "@/components/modal/category-modal/CategoryModal";
import Pagination from "@/components/pagination/Pagination";
import { dummyCategories } from "@/data/data";
import { useState } from "react";
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
    const categoriesPerPage = 24;
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

    return (
        <PageContainer>
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

            <div className="overflow-auto h-[74vh] scrl-hide grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {paginatedCategories.map((cat, idx) => (
                    <div
                        key={idx}
                        className=" text-center"
                    >
                        <Card
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            cat={cat} idx={idx} />
                    </div>
                ))}
            </div>

            {/* Pagination & Showing Section */}
            <div className="flex justify-evenly items-center text-sm mt-4">
                <span className="text-[#00A89D]">
                    Showing {(page - 1) * categoriesPerPage + 1}-{Math.min(page * categoriesPerPage, categories.length)} of {categories.length}
                </span>

                <div className="flex items-center gap-2">
                <Pagination page={page} setPage={setPage} pageCount={pageCount} />
                </div>
            </div>


            <CategoryModal
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                setCategoryName={setCategoryName}
                editMode={editMode}
                categoryName={categoryName}
                handleIconUpload={handleIconUpload}
                handleSubmit={handleSubmit}
            />
        </PageContainer>
    );
}
