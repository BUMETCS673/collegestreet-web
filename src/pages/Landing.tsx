import React from "react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Header from "../components/Header";
import Signup from "../components/buttons/Signup";

const Landing = () => {
  return (
    <>
      <Header />
      <section>
        <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div className='absolute -top-4 -z-10 flex w-full justify-center'>
            <div className='h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#de4d40] opacity-20 blur-[100px]' />
          </div>
          <div>
            <h1 className='mb-10 bg-gradient-to-t from-[#6d6d6d] to-[#e32e2e] bg-clip-text text-4xl text-transparent md:text-6xl'>
              opensource marketplace for students
            </h1>
          </div>
          <div className="flex justify-center gap-6">
            <Signup />
            <a className="text-sm font-semibold leading-6 text-white items-center flex flex-initial gap-2" 
                      href='https://github.com/BUMETCS673/collegestreet-web'>
            <GitHubLogoIcon className='h-10 w-6 text-slate-400 transition-colors hover:text-white' /> 
              Star on Github
            </a>
          </div>
        </div>
      </section>
  </>
  )
};

export default Landing;