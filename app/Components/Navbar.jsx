import React from "react";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[50px] w-full flex flex-row pt-4">
      <div>
        <Image
          className="h-[60px] w-[60px] rounded-lg ml-3"
          src="/Images/react.png"
          height={30}
          width={30}
        ></Image>
      </div>

      <div className=" ml-auto px-6 ">
        <div className="w-[10px] h-[10px] bg-red-700 rounded-full relative top-3 left-4">

        </div>
        <svg
          className="w-[30px] h-[30px]"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          ></path>
        </svg>
      </div>

      
      </div>


  
  );
};

export default Navbar;
