import CounterUp from "@/components/CounterUp";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const Growth = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-29.5">
      <div className="mx-auto max-w-300 space-y-20 overflow-hidden px-4 sm:px-6 md:space-y-24 lg:space-y-28 lg:overflow-visible lg:px-0">
        {/* =====================================================
        SECTION ONE
    ====================================================== */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Content */}
          <div className="w-full space-y-8 sm:space-y-9 lg:w-1/2 lg:space-y-10">
            <Heading
              as="h3"
              className="max-w-144.25 font-poppins font-semibold">
              Your Path to Professional Growth Starts Here!
            </Heading>

            <Paragraph className="max-w-119.25 text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </Paragraph>

            {/* Statistics */}
            <div className="flex flex-wrap items-start gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-14">
              <div>
                <CounterUp end={12} suffix="K" />

                <Paragraph className="text-[#4B4C53]">Students</Paragraph>
              </div>

              <div>
                <CounterUp end={70} suffix="+" />

                <Paragraph className="text-[#4B4C53]">Courses</Paragraph>
              </div>

              <div>
                <CounterUp end={16} />

                <Paragraph className="text-[#4B4C53]">Creators</Paragraph>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-135 lg:w-1/2 lg:max-w-none">
            {/* Main Image */}
            <Image
              src="/Image (1).png"
              alt="ByteSpace professional growth"
              width={577}
              height={540}
              className="relative z-10 mx-auto h-auto w-full max-w-115 object-contain filter-[drop-shadow(51px_72px_72px_rgba(0,0,0,0.13))_drop-shadow(37px_53px_56px_rgba(0,0,0,0.11))_drop-shadow(25px_36px_36px_rgba(0,0,0,0.10))_drop-shadow(16px_24px_24px_rgba(0,0,0,0.09))_drop-shadow(10px_14px_16px_rgba(0,0,0,0.08))_drop-shadow(5px_7px_9px_rgba(0,0,0,0.07))_drop-shadow(2px_3px_5px_rgba(0,0,0,0.06))_drop-shadow(0.5px_0.7px_3px_rgba(0,0,0,0.04))] sm:max-w-125 lg:max-w-135"
            />

            {/* Course Card */}
            <div className="absolute left-0 top-[3%] z-0 hidden w-[72%] rounded-3xl border border-[#CED0D3] bg-white p-3 sm:block sm:left-[-2%] sm:p-4 lg:left-[-7%]">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/Frame (5).png"
                  width={341}
                  height={196}
                  alt="Figma course preview"
                  className="h-auto w-full rounded-xl object-cover"
                />

                {/* Course metadata */}
                <div className="absolute bottom-3 left-2 right-2 flex flex-wrap gap-1.5 sm:bottom-5 sm:left-3.5 sm:right-auto sm:gap-2">
                  <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[9px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                    17 Lessons
                  </span>

                  <span className="rounded-full bg-[#F6F6F6]/60 px-2 py-1 text-[9px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                    2 hours 16 mins
                  </span>

                  <span className="hidden rounded-full bg-[#F6F6F6]/60 px-3 py-1.5 text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm md:block">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Heading
                      as="h3"
                      className="truncate font-poppins text-sm font-semibold leading-[120%] text-black sm:text-base lg:text-[20px]">
                      Learn Figma from Basic
                    </Heading>

                    <Paragraph className="text-[10px] text-[#4F4F4F] sm:text-[12px]">
                      by{" "}
                      <span className="text-secondary">purepearl studio</span>
                    </Paragraph>
                  </div>

                  <div className="flex shrink-0 items-center gap-1">
                    <Paragraph className="text-xs text-[#4F4F4F]">
                      4.5
                    </Paragraph>

                    <IoIosStar className="text-lg text-[#CED0D3] sm:text-2xl" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-1 rounded-full bg-sectionBg px-2.5 py-1.5 text-[10px] font-medium leading-[120%] text-[#4B4C53] sm:px-3 sm:text-[12px]">
                    <MdOutlineSignalCellularAlt className="text-base sm:text-xl" />
                    Beginner
                  </button>

                  <div className="flex shrink-0">
                    <Image
                      src="/Ellipse (1).png"
                      width={32}
                      height={32}
                      alt=""
                      className="h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8"
                    />

                    <Image
                      src="/Ellipse (7).png"
                      width={32}
                      height={32}
                      alt=""
                      className="-ml-2 h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8"
                    />

                    <Image
                      src="/Ellipse (8).png"
                      width={32}
                      height={32}
                      alt=""
                      className="-ml-2 hidden h-7 w-7 rounded-full object-cover md:block sm:h-8 sm:w-8"
                    />

                    <Image
                      src="/Ellipse (9).png"
                      width={32}
                      height={32}
                      alt=""
                      className="-ml-2 hidden h-7 w-7 rounded-full object-cover md:block sm:h-8 sm:w-8"
                    />

                    <div className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary sm:h-8 sm:w-8">
                      <span className="text-[10px] font-medium leading-5 text-textColor sm:text-[12px]">
                        26+
                      </span>
                    </div>
                  </div>
                </div>

                <span className="flex items-center font-poppins text-base font-semibold text-secondary sm:text-[20px]">
                  $25
                  <span className="ml-1 text-[10px] font-normal leading-[160%] text-[#4F4F4F] sm:text-[12px]">
                    /lifetime
                  </span>
                </span>
              </div>
            </div>

            {/* Learning Progress */}
            <div className="absolute right-0 top-[45%] z-20 rounded-2xl bg-white p-3 text-left shadow-sm sm:right-[-2%] sm:p-4 lg:right-[-3%]">
              <Heading
                as="h4"
                className="text-xs font-medium leading-[120%] sm:text-sm lg:text-sm">
                Learning Progress
              </Heading>

              <Paragraph className="mt-1 font-poppins text-3xl font-semibold leading-[120%] text-textColor sm:text-5xl">
                55%
              </Paragraph>

              <div className="mt-2 h-1.5 w-32 rounded-full bg-[#F6F6F6] sm:h-2 sm:w-50">
                <div className="h-full w-[56%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
        SECTION TWO
    ====================================================== */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Visual */}
          <div className="relative mx-auto w-full max-w-135 lg:order-1 lg:w-1/2 lg:max-w-none">
            {/* Main Image */}
            <Image
              src="/Image (2).png"
              alt="ByteSpace course management"
              width={577}
              height={540}
              className="relative z-10 mx-auto h-auto w-full max-w-115 object-contain filter-[drop-shadow(51px_72px_72px_rgba(0,0,0,0.13))_drop-shadow(37px_53px_56px_rgba(0,0,0,0.11))_drop-shadow(25px_36px_36px_rgba(0,0,0,0.10))_drop-shadow(16px_24px_24px_rgba(0,0,0,0.09))_drop-shadow(10px_14px_16px_rgba(0,0,0,0.08))_drop-shadow(5px_7px_9px_rgba(0,0,0,0.07))_drop-shadow(2px_3px_5px_rgba(0,0,0,0.06))_drop-shadow(0.5px_0.7px_3px_rgba(0,0,0,0.04))] sm:max-w-125 lg:max-w-135"
            />

            {/* Total Revenue */}
            <div className="absolute left-0 top-[4%] z-0 rounded-2xl bg-secondary p-3 shadow-sm sm:left-[1%] sm:p-4">
              <div className="space-y-1">
                <h5 className="text-xs font-medium leading-[120%] text-sectionBg sm:text-base">
                  Total Revenue
                </h5>

                <p className="text-[9px] font-normal leading-[120%] text-sectionBg sm:text-[10px]">
                  July 1-28
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <h4 className="font-poppins text-lg font-semibold leading-8 text-sectionBg sm:text-2xl">
                  $120.29
                </h4>

                <button
                  type="button"
                  className="rounded-3xl bg-primary px-2 py-0.5 text-[9px] font-medium leading-5 text-textColor sm:text-[10px]">
                  +12$
                </button>
              </div>

              <div className="mt-2 h-1.5 w-32 rounded-full bg-white sm:h-2 sm:w-50">
                <div className="h-full w-[56%] rounded-full bg-primary" />
              </div>
            </div>

            {/* Year to Date */}
            <div className="absolute left-0 top-[32%] z-0 rounded-2xl bg-secondary p-3 shadow-sm sm:left-[1%] sm:p-4">
              <div className="space-y-1">
                <h5 className="text-xs font-medium leading-[120%] text-sectionBg sm:text-base">
                  Year to Date
                </h5>

                <p className="text-[9px] font-normal leading-[120%] text-sectionBg sm:text-[10px]">
                  2023
                </p>
              </div>

              <div className="mt-2">
                <h4 className="font-poppins text-lg font-semibold leading-8 text-sectionBg sm:text-2xl">
                  $1,200.38
                </h4>
              </div>

              <button
                type="button"
                className="mt-1 rounded-3xl bg-primary px-2 py-0.5 text-[9px] font-medium leading-5 text-textColor sm:text-[10px]">
                +12$
              </button>
            </div>

            {/* Happy Students */}
            <div className="absolute bottom-[7%] right-0 z-20 rounded-2xl bg-white p-3 text-left shadow-sm sm:right-[-4%] sm:p-4 lg:right-[-7%]">
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

                  <IoIosStar className="text-sm text-primary sm:text-base" />
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

                <div className="-ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary sm:-ml-4 sm:h-11 sm:w-11">
                  <span className="text-[10px] font-bold leading-[150%] text-textColor sm:text-[12px]">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full space-y-8 sm:space-y-9 lg:order-2 lg:w-1/2 lg:space-y-10">
            <Heading as="h3" className="max-w-97.75 font-poppins font-semibold">
              Create & Manage Courses Easily.
            </Heading>

            <Paragraph className="max-w-143.5 text-[#4B4C53]">
              <span className="font-bold text-textColor">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </Paragraph>

            {/* Features */}
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-xl text-secondary sm:text-2xl" />

                <Paragraph className="font-medium text-textColor">
                  Share Your Expertise
                </Paragraph>
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-xl text-secondary sm:text-2xl" />

                <Paragraph className="font-medium text-textColor">
                  Monetize Your Passion
                </Paragraph>
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-xl text-secondary sm:text-2xl" />

                <Paragraph className="font-medium text-textColor">
                  Flexibility and Autonomy
                </Paragraph>
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-xl text-secondary sm:text-2xl" />

                <Paragraph className="font-medium text-textColor">
                  Build a Community
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
