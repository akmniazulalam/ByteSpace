import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import React from "react";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const DiscoverSkills = () => {
  const items: string[] = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  const discoverSkillsData = [
    {
      image: "/Frame (5).png",
      title: "Learn Figma from Basic",
    },
    {
      image: "/Frame (6).png",
      title: "Build Digital Asset",
    },
    {
      image: "/Frame (7).png",
      title: "The Power of Big Data",
    },
    {
      image: "/Frame (8).png",
      title: "Balancing Productivity and Self-Care",
    },
    {
      image: "/Frame (9).png",
      title: "Mastering Money Management",
    },
    {
      image: "/Frame (10).png",
      title: "From Idea to Startup Success",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-17.5">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Section Header */}
        <div className="mx-auto text-center">
          <Heading
            as="h2"
            className="mx-auto max-w-140 font-poppins font-semibold text-[#040819]">
            Discover Your Passion, Build Your Skills
          </Heading>

          <Paragraph className="mx-auto max-w-230 pt-2 text-shuttleGray sm:pt-3 lg:pt-4">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </Paragraph>

          {/* Categories */}
          <div className="mt-8 sm:mt-9">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
              {items.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`cursor-pointer rounded-full bg-sectionBg px-3.5 py-2.5 text-sm font-medium leading-[120%] text-[#4B4C53] transition-colors duration-300 ease-in-out hover:bg-primary hover:text-textColor sm:px-4 sm:py-3 sm:text-base ${
                    index >= 18 ? "hidden" : ""
                  }`}>
                  {item}
                </button>
              ))}

              <button
                type="button"
                className="cursor-pointer px-1 py-2.5 text-sm font-medium leading-[120%] text-secondary transition-opacity duration-300 hover:opacity-70 sm:py-3 sm:text-base">
                + More
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-18.5 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {discoverSkillsData.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-[#CED0D3] bg-white p-3.5 transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:p-4">
              {/* Course Image */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  width={341}
                  height={196}
                  alt={item.title}
                  className="h-auto w-full object-cover"
                />

                {/* Image Meta */}
                <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5 sm:inset-x-3 sm:bottom-3 sm:gap-2">
                  <span className="rounded-full bg-[#F6F6F6]/70 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                    17 Lessons
                  </span>

                  <span className="rounded-full bg-[#F6F6F6]/70 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
                    2 hours 16 mins
                  </span>

                  <span className="rounded-full bg-[#F6F6F6]/70 px-2 py-1 text-[10px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]">
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
                      {item.title}
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

                    <div className="-ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <span className="text-[11px] font-medium leading-5 text-textColor">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSkills;
