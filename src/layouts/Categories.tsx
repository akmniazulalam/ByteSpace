import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import React from "react";
import { IoMdBusiness } from "react-icons/io";
import {
  MdDesignServices,
  MdDeveloperMode,
  MdLaptop,
  MdPhotoCamera,
} from "react-icons/md";

const Categories = () => {
  return (
    <section className="bg-white pb-16 sm:pb-20 md:pb-24 lg:pb-30">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Section Header */}
        <div className="mx-auto max-w-230 text-center">
          <Heading
            as="h2"
            className="font-poppins text-2xl font-semibold text-[#040819] sm:text-3xl lg:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </Heading>

          <Paragraph className="mx-auto max-w-230 pt-2 text-shuttleGray sm:pt-3 lg:pt-4">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </Paragraph>
        </div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5 md:mt-14 md:gap-6 lg:mt-16 lg:grid-cols-6 lg:gap-10">
          {/* Design */}
          <div className="flex aspect-square w-full items-center justify-center cursor-pointer rounded-3xl border border-[#CED0D3] p-4 transition-colors duration-300 hover:border-secondary">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 sm:h-14 sm:w-14 sm:p-3">
                <MdDesignServices className="text-3xl text-textColor sm:text-4xl" />
              </div>

              <h6 className="mt-3 text-base font-medium leading-[120%] text-textColor sm:text-lg">
                Design
              </h6>
            </div>
          </div>

          {/* Development */}
          <div className="flex aspect-square w-full items-center justify-center cursor-pointer rounded-3xl border border-[#CED0D3] p-4 transition-colors duration-300 hover:border-secondary">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 sm:h-14 sm:w-14 sm:p-3">
                <MdDeveloperMode className="text-3xl text-textColor sm:text-4xl" />
              </div>

              <h6 className="mt-3 text-base font-medium leading-[120%] text-textColor sm:text-lg">
                Development
              </h6>
            </div>
          </div>

          {/* IT & Software */}
          <div className="flex aspect-square w-full items-center justify-center cursor-pointer rounded-3xl border border-[#CED0D3] p-4 transition-colors duration-300 hover:border-secondary">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 sm:h-14 sm:w-14 sm:p-3">
                <MdLaptop className="text-3xl text-textColor sm:text-4xl" />
              </div>

              <h6 className="mt-3 text-base font-medium leading-[120%] text-textColor sm:text-lg">
                IT &amp; Software
              </h6>
            </div>
          </div>

          {/* Business */}
          <div className="flex aspect-square w-full items-center justify-center cursor-pointer rounded-3xl border border-[#CED0D3] p-4 transition-colors duration-300 hover:border-secondary">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 sm:h-14 sm:w-14 sm:p-3">
                <IoMdBusiness className="text-3xl text-textColor sm:text-4xl" />
              </div>

              <h6 className="mt-3 text-base font-medium leading-[120%] text-textColor sm:text-lg">
                Business
              </h6>
            </div>
          </div>

          {/* Marketing */}
          <div className="flex aspect-square w-full items-center justify-center cursor-pointer rounded-3xl border border-[#CED0D3] p-4 transition-colors duration-300 hover:border-secondary">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 sm:h-14 sm:w-14 sm:p-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-7.5 sm:w-7.5"
                  aria-hidden="true">
                  <path
                    d="M13.5 18H10.5C10.5 10.545 16.545 4.5 24 4.5V7.5C18.195 7.5 13.5 12.195 13.5 18ZM24 13.5V10.5C19.86 10.5 16.5 13.86 16.5 18H19.5C19.5 15.51 21.51 13.5 24 13.5ZM7.5 3C7.5 1.335 6.165 0 4.5 0C2.835 0 1.5 1.335 1.5 3C1.5 4.665 2.835 6 4.5 6C6.165 6 7.5 4.665 7.5 3ZM14.175 3.75H11.175C10.815 5.88 8.985 7.5 6.75 7.5H2.25C1.005 7.5 0 8.505 0 9.75L0 13.5H9V10.11C11.79 9.225 13.875 6.765 14.175 3.75ZM25.5 22.5C27.165 22.5 28.5 21.165 28.5 19.5C28.5 17.835 27.165 16.5 25.5 16.5C23.835 16.5 22.5 17.835 22.5 19.5C22.5 21.165 23.835 22.5 25.5 22.5ZM27.75 24H23.25C21.015 24 19.185 22.38 18.825 20.25H15.825C16.125 23.265 18.21 25.725 21 26.61V30H30V26.25C30 25.005 28.995 24 27.75 24Z"
                    fill="#242528"
                  />
                </svg>
              </div>

              <h6 className="mt-3 text-base font-medium leading-[120%] text-textColor sm:text-lg">
                Marketing
              </h6>
            </div>
          </div>

          {/* Photography */}
          <div className="flex aspect-square w-full items-center justify-center cursor-pointer rounded-3xl border border-[#CED0D3] p-4 transition-colors duration-300 hover:border-secondary">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 sm:h-14 sm:w-14 sm:p-3">
                <MdPhotoCamera className="text-3xl text-textColor sm:text-4xl" />
              </div>

              <h6 className="mt-3 text-base font-medium leading-[120%] text-textColor sm:text-lg">
                Photography
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
