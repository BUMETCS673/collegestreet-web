import React from "react";
import { Link } from "react-router-dom";

import Signup from "./buttons/Signup";

import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"; 

const Header = () => {
  return (
    <nav className='px-2 sm:px-4  w-full z-20 top-0 left-0 flex items-center justify-between py-10'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href="/" className='flex items-center'> 
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>CollegeStreet</span>
        </a>
        <nav className="flex gap-6">
          <a
            href='https://github.com/BUMETCS673/collegestreet-web'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'>
            <GitHubLogoIcon className='h-10 w-6 text-slate-400 transition-colors hover:text-white' />
          </a>
          <Signup />
        </nav>
      </div>
    </nav>
  );
};

export default Header;