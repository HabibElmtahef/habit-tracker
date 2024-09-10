import React from "react";

const Navbar = () => {
  const defaultColor = "#d90429";
  const backgroundColorObject = {
    backgroundColor: defaultColor,
  };
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex gap-2 items-center">
                <div className="bg-primary p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-8 text-white"
                  >
                    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                  </svg>
                </div>
                <span className="text-primary font-bold">Habit</span>
                <span className="font-light">Stacker</span>
              </span>
            </div>
            
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center">
            <button className="block sm:w-32 w-full rounded-lg px-9 py-3 text-sm text-white bg-primary transition focus:outline-none" >
                Sign In
            </button>
            <button
            className="block sm:w-32 rounded-lg w-full border font-medium text-sm py-3 px-9 text-primary border-primary transition hover:bg-primary hover:text-white focus:outline-none"
            >
                Sign Up
            </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
