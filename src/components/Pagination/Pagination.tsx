import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

interface PaginationProps {
  length: number;
  current: number;
}

const Pagination: React.FC<PaginationProps> = ({ length, current }) => {
  const totalPages = Math.ceil(length / 10);
  const [currentPage, setCurrentPage] = React.useState<number>(current);

  const displayPages =
    totalPages < 6
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : Array.from({ length: 6 }, (_, i) => totalPages - 5 + i);

  const navigatePage = (page: number) => {
    setCurrentPage(page);
  };

  const numberResultShowed = (currentPage == totalPages) ? length - 10*(totalPages-1) :  10;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={() => {
            if (currentPage == 1) return;
            navigatePage(currentPage - 1);
          }}
          href="facebook.com"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          onClick={() => navigatePage(currentPage + 1)}
          href="facebook.com"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPage*10 -9 }</span> to{" "}
            <span className="font-medium">{numberResultShowed*currentPage}</span> of{" "}
            <span className="font-medium">{length}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {currentPage != 1 && (
              <a
                onClick={() => {
                  if (currentPage == 1) return;
                  navigatePage(currentPage - 1);
                }}
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {totalPages - currentPage < 6 && (
              <div>
                {displayPages.map((page, index) => {
                  return (
                    <a
                      onClick={() => navigatePage(page)}
                      key={index}
                      href="#"
                      aria-current="page"
                      className={`${
                        currentPage == page
                          ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      } `}
                    >
                      {page}
                    </a>
                  );
                })}
              </div>
            )}
            {totalPages - currentPage >= 6 && (
              <div>
                <a
                  onClick={() => navigatePage(currentPage)}
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {currentPage}
                </a>
                <a
                  onClick={() => navigatePage(currentPage + 1)}
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {currentPage + 1}
                </a>
                <a
                  onClick={() => navigatePage(currentPage + 2)}
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  {currentPage + 2}
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  onClick={() => navigatePage(totalPages - 2)}
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  {totalPages - 2}
                </a>
                <a
                  onClick={() => navigatePage(totalPages - 1)}
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {totalPages - 1}
                </a>
                <a
                  onClick={() => navigatePage(totalPages)}
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {totalPages}
                </a>
              </div>
            )}
            {currentPage != totalPages && (
            <a
              onClick={() => navigatePage(currentPage + 1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
