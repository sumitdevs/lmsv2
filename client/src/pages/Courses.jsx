import { useState, useMemo } from "react";
import CourseCard from "../components/UI/cards/CourseCard";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses, fetchCategory } from "../api/courses";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";
function Courses() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6;
  const {
    data: courseData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses", page],
    queryFn: () => fetchCourses({ page, limit }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategory,
    staleTime: 1000 * 60 * 5,
  });
  const courses = courseData?.courses;
  const totalPages = courseData?.totalPages;
  const handleCategorySelection = (value) => {
    setSelectedCat(value);
  };

  const filterCourses = useMemo(() => {
    if (selectedCat && search) {
      if (selectedCat === "all")
        return courses.filter((course) =>
          (course?.title).toLowerCase().includes(search.toLowerCase())
        );
      return courses.filter(
        (course) =>
          course?.category?.name === selectedCat &&
          (course?.title).toLowerCase().includes(search.toLowerCase())
      );
    } else {
      if (selectedCat === "all") return courses;
      return courses.filter((course) => course?.category?.name === selectedCat);
    }
  }, [categories, selectedCat, isLoading, search, page]);

  const getPageButtons = () => {
    const buttons = [];
    const maxButtons = 4;

    let start = Math.max(1, page - 1);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    return buttons;
  };

  const pages = getPageButtons();
  return (
    <>
      <section id="breadcrumb" className="h-14 mt-20 bg-[var(--clr-accent-100)]">
        <nav
          aria-label="Breadcrumb"
          className="container flex items-center h-full text-[var(--clr-primary-900)]"
        >
          <ol className="flex gap-x-1 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a className="text-[var(--clr-accent-900)]" href="/courses">
                Courses
              </a>
            </li>
          </ol>
        </nav>
      </section>

      <section id="search" className="mt-14 sm:mt-22">
        <div className="sec-wrap">
          <div className="flex items-center px-6 gap-4 max-w-2xl mx-auto rounded-full border-2 border-[var(--clr-accent-900)]">
            <FaSearch className="w-6 h-6 text-gray-400" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="h-16 text-[18px] outline-none text-gray-400 placeholder-gray-400 w-full py-3"
              type="text"
              name="search"
              placeholder="Search for a course "
            />
          </div>
          <div className="flex gap-x-10 mt-12 justify-center ">
            {!isLoading &&
              categories.map((category) => (
                <button
                  className={clsx(
                    category?.name === selectedCat
                      ? "text-[var(--clr-accent-900)]"
                      : "text-[var(--clr-primary-200)]"
                  )}
                  onClick={() => handleCategorySelection(category?.name)}
                  key={category?._id}
                >
                  {category?.name}
                </button>
              ))}
          </div>
        </div>
      </section>

      <section id="courses" className="mt-14 sm:mt-22">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-y-12">
            {!isLoading &&
              filterCourses.map((course) => (
                <CourseCard key={course._id} {...course} />
              ))}
          </div>
        </div>
      </section>

      <section id="pagination" className="my-14 sm:my-22">
        <div aria-label="Pagination" className="flex justify-center">
          <div className="flex items-center gap-x-2 sm:gap-x-4 text-base sm:text-lg">
            {/* Previous Button with Arrow Icon */}
            <button
              className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              aria-label="Previous page"
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Prev
            </button>

            {/* Page Numbers */}
            <div className="flex gap-x-2">
              {pages.map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-medium transition-colors duration-200 ${
                    p === page
                      ? "bg-[var(--clr-accent-900)] text-white shadow-md"
                      : "bg-white text-[var(--clr-accent-900)] hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Next Button with Arrow Icon */}
            <button
              className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              aria-label="Next page"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Toaster position="bottom-left" />
    </>
  );
}

export default Courses;
