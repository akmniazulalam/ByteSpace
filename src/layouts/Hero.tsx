"use client";

import { useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
// Adjust these paths to match your project
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import { Heading } from "@/components/Heading";

import type { FormEvent } from "react";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

const AVATARS = [
  "/Ellipse.png",
  "/Ellipse (1).png",
  "/Ellipse (2).png",
  "/Ellipse (3).png",
  "/Ellipse (4).png",
  "/Ellipse (5).png",
  "/Ellipse (6).png",
];

const HERO_SHADOW =
  "lg:filter-[drop-shadow(51px_72px_72px_rgba(0,0,0,0.13))_drop-shadow(37px_53px_56px_rgba(0,0,0,0.11))_drop-shadow(25px_36px_36px_rgba(0,0,0,0.10))_drop-shadow(16px_24px_24px_rgba(0,0,0,0.09))_drop-shadow(10px_14px_16px_rgba(0,0,0,0.08))_drop-shadow(5px_7px_9px_rgba(0,0,0,0.07))_drop-shadow(2px_3px_5px_rgba(0,0,0,0.06))_drop-shadow(0.5px_0.7px_3px_rgba(0,0,0,0.04))]";

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <section className="relative overflow-hidden isolate bg-secondary bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[64px_64px] pt-28 sm:pt-32 md:bg-size-[128px_128px] lg:pt-40">
      <div className="mx-auto max-w-300 px-4 text-center sm:px-6">
        <h1 className="mx-auto max-w-182.5 font-poppins text-3xl leading-[120%] font-semibold text-white sm:text-5xl md:text-6xl lg:max-w-218 lg:text-7xl">
          Get Access to Hundreds Courses Available
        </h1>

        <Paragraph className="mx-auto max-w-xl pt-5 pb-8 sm:pt-8 sm:pb-10">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </Paragraph>

        {/* Search */}
        <form
          role="search"
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <label className="flex w-full items-center gap-2 rounded-full bg-white px-5 py-3 sm:max-w-md sm:px-6">
            <BiSearch
              aria-hidden="true"
              className="shrink-0 text-2xl text-shuttleGray"
            />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full min-w-0 text-base font-normal text-textColor placeholder:text-base placeholder:font-normal placeholder:text-shuttleGray focus:outline-0 sm:text-[18px] sm:placeholder:text-[18px]"
            />
          </label>
          <Button className="w-full sm:w-auto">Search</Button>
        </form>

        {/* Visual stage */}
        <div className="relative mt-10 h-85 overflow-hidden sm:mt-14 sm:h-110 lg:h-130">
          {/* Ring */}
          <div
            aria-hidden="true"
            className="absolute top-8 left-1/2 aspect-square w-160 -translate-x-1/2 rounded-full border-120 border-primary bg-transparent sm:top-12 sm:w-225 sm:border-200 lg:top-16 lg:w-290 lg:border-330"
          />

          {/* Hero image */}
          <div className="absolute bottom-0 left-1/2 w-75 -translate-x-1/2 sm:w-105 lg:w-145">
            <Image
              src="/Image (1).png"
              width={580}
              height={541}
              alt="Student learning online"
              priority
              sizes="(min-width: 1024px) 580px, (min-width: 640px) 420px, 300px"
              className={`h-auto w-full object-cover drop-shadow-xl ${HERO_SHADOW}`}
            />
          </div>

          {/* Category card */}
          <div className="absolute top-[14%] left-2 hidden space-y-1 rounded-2xl bg-white p-3 text-left sm:block md:left-[6%] lg:top-[25%] lg:left-[18%] lg:p-4">
            <Heading
              as="h4"
              className="text-sm leading-[120%] font-medium md:text-base lg:text-base">
              UI/UX Design
            </Heading>
            <Paragraph className="text-[12px] text-shuttleGray">
              200 Courses • 1000+ Students
            </Paragraph>
          </div>

          {/* Happy students card */}
          <div className="absolute top-[58%] left-[2%] space-y-2 rounded-2xl bg-white p-3 text-left md:block lg:top-[60%] lg:left-[10%] lg:p-4">
            <div className="space-y-1">
              <Heading
                as="h4"
                className="text-sm leading-[120%] font-medium md:text-base lg:text-base">
                Happy Students
              </Heading>
              <div className="flex items-center gap-0.5">
                <Paragraph className="text-[12px] text-textColor">
                  4.5 <span className="text-shuttleGray">(240)</span>
                </Paragraph>
                <IoIosStar aria-hidden="true" className="text-primary" />
              </div>
            </div>
            <div className="flex">
              {AVATARS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  width={43}
                  height={43}
                  alt=""
                  className={`h-9 w-9 object-cover lg:h-11 lg:w-11 ${i > 0 ? "-ml-3 lg:-ml-4" : ""} ${i >= 3 ? "hidden lg:block" : ""}`}
                />
              ))}
              <div className="-ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary lg:-ml-4 lg:h-11 lg:w-11">
                <span className="text-[12px] leading-[150%] font-bold text-textColor">
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* Progress card */}
          <div className="absolute top-[24%] md:top-[30%] right-0 sm:right-2 w-33.5 md:w-40 space-y-2 rounded-2xl bg-white p-3 text-left sm:block md:right-[6%] lg:top-[25%] lg:right-[24%] lg:w-auto lg:p-4">
            <Heading
              as="h4"
              className="text-sm lg:text-sm leading-[120%] md:text-base font-medium">
              Learning Progress
            </Heading>
            <Paragraph className="font-poppins text-3xl md:text-4xl leading-[120%] font-semibold text-textColor lg:text-5xl">
              55%
            </Paragraph>
            <div
              role="progressbar"
              aria-valuenow={55}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Learning progress"
              className="h-2 w-full rounded-full bg-[#F6F6F6] lg:w-50">
              <div className="h-2 w-[56%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-20 pointer-events-none ornaments" aria-hidden="true">
        <Image
          src={"/ornament-spring-left.png"}
          height={350}
          width={350}
          alt="spring_left"
          aria-hidden="true"
          className="spring_left"
        />
        <Image
          src={"/ornament-spring-left-middle.png"}
          height={175}
          width={175}
          alt="spring_left_middle"
          aria-hidden="true"
          className="spring_left_middle"
        />
        <Image
          src={"/ornament-ring.png"}
          height={342}
          width={342}
          alt="ring"
          aria-hidden="true"
          className="ring"
        />
        <Image
          src={"/ornament-cylinder.png"}
          height={370}
          width={370}
          alt="cylinder"
          aria-hidden="true"
          className="cylinder"
        />
        <Image
          src={"/ornament-triangle.png"}
          height={188}
          width={188}
          alt="triangle"
          aria-hidden="true"
          className="triangle"
        />
        <Image
          src={"/ornament-right-bottom-spring.png"}
          height={330}
          width={330}
          alt="right_spring"
          aria-hidden="true"
          className="right_spring"
        />
      </div>
    </section>
  );
}
