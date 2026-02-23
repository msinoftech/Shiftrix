"use client";
import { useState } from "react";
import { blogs } from "@/lib/data";
import BlogCard from "@/components/BlogCard";

export default function BlogClient() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogs.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="pb-12 sm:pt-40 md:pt-40 lg:pt-40 pt-40">
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
        {/* Blog grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {blogs.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md text-sm font-medium border ${
                currentPage === 1
                  ? "text-gray-900 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-md text-sm font-medium border ${
                  currentPage === page
                    ? "bg-red-600 text-white border-red-600"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md text-sm font-medium border ${
                currentPage === totalPages
                  ? "text-gray-900 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
