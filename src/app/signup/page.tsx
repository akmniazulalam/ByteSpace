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
      <section className="bg-secondary bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[64px_64px] pt-24 sm:pt-32 pb-20 sm:pb-26 md:bg-size-[128px_128px] lg:pt-32 lg:pb-30">
        <div className="grid grid-cols-5 lg:grid-cols-12 gap-10 lg:gap-0 px-4 sm:px-6 lg:px-0">
          <div className="space-y-45 col-span-9 lg:col-start-2 lg:col-span-4">
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-[20px] leading-[120%] text-sectionBg">
                Sign up and come in
              </h3>
              <Paragraph className={"text-sectionBg text-base lg:text-[18px]"}>
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost
              </Paragraph>
            </div>
            <div className="relative">
              <article className="w-fit flex h-auto flex-col rounded-3xl border border-[#CED0D3] bg-white p-3.5 transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:p-4">
                {/* Course Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={"/Frame (6).png"}
                    width={341}
                    height={196}
                    alt={"Build Digital Asset"}
                    className="h-auto object-cover"
                  />

                  {/* Image Meta */}
                  <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5 sm:inset-x-3 sm:bottom-3 sm:gap-2">
                    <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                      17 Lessons
                    </span>

                    <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                      2 hours 16 mins
                    </span>

                    <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="mt-4 flex flex-1 flex-col space-y-4 sm:mt-5">
                  {/* Title + Rating */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <Heading
                        as="h3"
                        className="truncate font-poppins text-base font-semibold leading-[120%] text-black sm:text-lg lg:text-[20px]">
                        {"Build Digital Asset"}
                      </Heading>

                      <Paragraph className="mt-1 text-[12px] text-[#4F4F4F]">
                        by{" "}
                        <span className="text-secondary">purepearl studio</span>
                      </Paragraph>
                    </div>

                    <div className="flex shrink-0 items-center gap-1">
                      <Paragraph className="text-sm text-[#4F4F4F]">
                        4.5
                      </Paragraph>

                      <IoIosStar
                        className="text-xl text-[#CED0D3] sm:text-2xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Level + Students */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-sectionBg px-3 py-1.5 text-[12px] font-medium leading-[120%] text-[#4B4C53]">
                      <MdOutlineSignalCellularAlt
                        className="text-lg"
                        aria-hidden="true"
                      />
                      Beginner
                    </span>

                    <div className="flex shrink-0 items-center pl-1">
                      <Image
                        src="/Ellipse (1).png"
                        width={32}
                        height={32}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover"
                      />

                      <Image
                        src="/Ellipse (7).png"
                        width={32}
                        height={32}
                        alt=""
                        className="-ml-2 h-8 w-8 rounded-full object-cover"
                      />

                      <Image
                        src="/Ellipse (8).png"
                        width={32}
                        height={32}
                        alt=""
                        className="-ml-2 h-8 w-8 rounded-full object-cover"
                      />

                      <Image
                        src="/Ellipse (9).png"
                        width={32}
                        height={32}
                        alt=""
                        className="-ml-2 h-8 w-8 rounded-full object-cover"
                      />

                      <div className="-ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                        <span className="text-[11px] font-medium leading-5 text-white">
                          26+
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-auto pt-1">
                    <span className="flex items-center font-poppins text-base font-semibold text-secondary sm:text-lg lg:text-[20px]">
                      $25
                      <span className="ml-0.5 text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
                        /lifetime
                      </span>
                    </span>
                  </div>
                </div>
              </article>
              <article className="absolute bottom-[26%] -right-2 w-fit flex h-auto flex-col rounded-3xl border border-[#CED0D3] bg-white p-3.5 transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:p-4">
                {/* Course Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={"/Frame (7).png"}
                    width={341}
                    height={196}
                    alt={"the Power of Big Data"}
                    className="h-auto object-cover"
                  />

                  {/* Image Meta */}
                  <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5 sm:inset-x-3 sm:bottom-3 sm:gap-2">
                    <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                      17 Lessons
                    </span>

                    <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                      2 hours 16 mins
                    </span>

                    <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="mt-4 flex flex-1 flex-col space-y-4 sm:mt-5">
                  {/* Title + Rating */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <Heading
                        as="h3"
                        className="truncate font-poppins text-base font-semibold leading-[120%] text-black sm:text-lg lg:text-[20px]">
                        {"The Power of Big Data"}
                      </Heading>

                      <Paragraph className="mt-1 text-[12px] text-[#4F4F4F]">
                        by{" "}
                        <span className="text-secondary">purepearl studio</span>
                      </Paragraph>
                    </div>

                    <div className="flex shrink-0 items-center gap-1">
                      <Paragraph className="text-sm text-[#4F4F4F]">
                        4.5
                      </Paragraph>

                      <IoIosStar
                        className="text-xl text-[#CED0D3] sm:text-2xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Level + Students */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-sectionBg px-3 py-1.5 text-[12px] font-medium leading-[120%] text-[#4B4C53]">
                      <MdOutlineSignalCellularAlt
                        className="text-lg"
                        aria-hidden="true"
                      />
                      Beginner
                    </span>

                    <div className="flex shrink-0 items-center pl-1">
                      <Image
                        src="/Ellipse (1).png"
                        width={32}
                        height={32}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover"
                      />

                      <Image
                        src="/Ellipse (7).png"
                        width={32}
                        height={32}
                        alt=""
                        className="-ml-2 h-8 w-8 rounded-full object-cover"
                      />

                      <Image
                        src="/Ellipse (8).png"
                        width={32}
                        height={32}
                        alt=""
                        className="-ml-2 h-8 w-8 rounded-full object-cover"
                      />

                      <Image
                        src="/Ellipse (9).png"
                        width={32}
                        height={32}
                        alt=""
                        className="-ml-2 h-8 w-8 rounded-full object-cover"
                      />

                      <div className="-ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                        <span className="text-[11px] font-medium leading-5 text-white">
                          26+
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-auto pt-1">
                    <span className="flex items-center font-poppins text-base font-semibold text-secondary sm:text-lg lg:text-[20px]">
                      $25
                      <span className="ml-0.5 text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
                        /lifetime
                      </span>
                    </span>
                  </div>
                </div>
              </article>
              <div className="absolute bottom-[-20%] right-0 z-20 rounded-2xl bg-primary p-3 text-left shadow-sm sm:right-[-4%] sm:p-4 lg:right-[-2%]">
                <div className="space-y-1">
                  <Heading
                    as="h4"
                    className="text-xs font-medium leading-[120%] sm:text-base lg:text-base">
                    Happy Students
                  </Heading>

                  <div className="flex items-center gap-0.5">
                    <Paragraph className="text-[10px] text-textColor sm:text-[12px]">
                      4.5 <span className="text-shuttleGray">(240)</span>
                    </Paragraph>

                    <IoIosStar className="text-sm text-secondary sm:text-base" />
                  </div>
                </div>

                <div className="mt-3 flex">
                  <Image
                    src="/Ellipse.png"
                    width={43}
                    height={43}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover sm:h-11 sm:w-11"
                  />

                  <Image
                    src="/Ellipse (1).png"
                    width={43}
                    height={43}
                    alt=""
                    className="-ml-3 h-8 w-8 rounded-full object-cover sm:-ml-4 sm:h-11 sm:w-11"
                  />

                  <Image
                    src="/Ellipse (2).png"
                    width={43}
                    height={43}
                    alt=""
                    className="-ml-3 hidden h-8 w-8 rounded-full object-cover sm:block sm:-ml-4 sm:h-11 sm:w-11"
                  />

                  <Image
                    src="/Ellipse (3).png"
                    width={43}
                    height={43}
                    alt=""
                    className="-ml-3 hidden h-8 w-8 rounded-full object-cover sm:block sm:-ml-4 sm:h-11 sm:w-11"
                  />

                  <Image
                    src="/Ellipse (4).png"
                    width={43}
                    height={43}
                    alt=""
                    className="-ml-3 hidden h-8 w-8 rounded-full object-cover md:block sm:-ml-4 sm:h-11 sm:w-11"
                  />

                  <Image
                    src="/Ellipse (5).png"
                    width={43}
                    height={43}
                    alt=""
                    className="-ml-3 hidden h-8 w-8 rounded-full object-cover md:block sm:-ml-4 sm:h-11 sm:w-11"
                  />

                  <Image
                    src="/Ellipse (6).png"
                    width={43}
                    height={43}
                    alt=""
                    className="-ml-3 hidden h-8 w-8 rounded-full object-cover md:block sm:-ml-4 sm:h-11 sm:w-11"
                  />

                  <div className="-ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-black sm:-ml-4 sm:h-11 sm:w-11">
                    <span className="text-[10px] font-bold leading-[150%] text-white sm:text-[12px]">
                      2K+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 lg:col-span-5 lg:col-start-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl pt-9 px-9 pb-6 lg:pt-15 lg:px-16 lg:pb-12.5 bg-white">
              <div className="space-y-30.5">
                <div className="space-y-10">
                  <div className="">
                    <Paragraph className={"text-secondary"}>
                      Create an Account
                    </Paragraph>
                    <Heading
                      as="h1"
                      className="font-poppins font-semibold tracking-[-1%]">
                      Welcome to ByteSpace
                    </Heading>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="font-medium text-sm leading-[120%] text-textColor">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="mt-2 rounded-xl py-3 px-6 w-full border border-pColor font-normal text-[18px] placeholder:text-shuttleGray text-textColor leading-[160%] focus:outline-0"
                        placeholder="Jamie Davis"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="font-medium text-sm leading-[120%] text-textColor">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="mt-2 rounded-xl py-3 px-6 w-full border border-pColor font-normal text-[18px] placeholder:text-shuttleGray text-textColor leading-[160%] focus:outline-0"
                        placeholder="designer@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="password"
                        className="font-medium text-sm leading-[120%] text-textColor">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="mt-2 rounded-xl py-3 px-6 w-full border border-pColor font-normal text-[18px] placeholder:text-shuttleGray text-textColor leading-[160%] focus:outline-0"
                        placeholder="********"
                      />
                    </div>
                    <div className="text-end">
                      <Button>Continue</Button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Paragraph className={"text-[#4B4C53] text-base"}>Already have an account? <span className="text-secondary">Login</span></Paragraph>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
