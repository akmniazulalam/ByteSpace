"use client";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

import type { FormEvent } from "react";
import Button from "@/components/Button";

const Signup = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ease-in-out ${
          scrolled
            ? "bg-secondary shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}>
        <div className="grid grid-cols-12 h-20 px-4 sm:h-22 sm:px-6 lg:h-auto lg:px-0 lg:py-9">
          <div className="md:col-start-2 col-span-5 md:col-span-2 flex items-center">
            <Image
              src={"/Header_Logo.png"}
              alt="header_logo"
              height={37}
              width={167}
              className="w-34.25 h-9.25 object-contain"
            />
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Signup;
